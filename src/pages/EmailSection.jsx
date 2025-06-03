import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';

function EmailStep() {
  const navigate = useNavigate();
  const { siteData, updateSiteData } = useSiteData();

  const [email, setEmail] = useState(siteData.contact.email || '');
  const [password, setPassword] = useState(siteData.auth?.password || '');
  const [marketingOptIn, setMarketingOptIn] = useState(siteData.contact.marketingOptIn ?? true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || 'https://bharbhoxbackend-production.up.railway.app';

  useEffect(() => {
    if (siteData.contact.email) setEmail(siteData.contact.email);
    if (siteData.auth?.password) setPassword(siteData.auth.password);
  }, [siteData]);

  const handleContinue = async () => {
  if (!email.trim()) return setError('Email is required.');
  if (!password.trim()) return setError('Password is required.');
  if (password.length < 6) return setError('Password must be at least 6 characters.');

  updateSiteData('contact', { email, marketingOptIn });
  updateSiteData('auth', { password });

  setError('');
  setLoading(true);

  try {
    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);
    formData.append('marketing_opt_in', marketingOptIn);

    const dog = siteData.dog;

    formData.append('dog.name', dog.name || '');
    formData.append('dog.gender', dog.gender || '');
    formData.append('dog.size', dog.size || '');
    formData.append('dog.primaryBreed', dog.primaryBreed || '');
    formData.append('dog.secondaryBreed', dog.secondaryBreed || '');
    formData.append('dog.adoptionDate', dog.adoptionDate || '');
    formData.append('dog.allergies', JSON.stringify(dog.allergies || []));

    if (dog.imageFile) {
      formData.append('dog.image', dog.imageFile); // ✅ append actual file
    }

    const { data } = await axios.post(`${API_URL}/api/signup/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    updateSiteData('auth', {
      access: data.access,
      refresh: data.refresh,
      user: data.user,
      password
    });

    navigate('/choose-pricing-plan',{
      state: {
    siteData 
  }
    });
  } catch (err) {
    console.error('[Signup error]', err.response || err);
    setError(
      err.response?.data?.detail ||
      err.response?.data?.email?.[0] ||
      err.response?.data?.password?.[0] ||
      err.response?.data?.dog?.image?.[0] ||
      'Signup failed. Please try again.'
    );
  } finally {
    setLoading(false);
  }
};


  return (
    <section className='email'>
      <div className="email-step-container">
        <h1 className='theme-title mb-4'>Create your account</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={`email-input ${error ? 'input-error' : ''}`}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={`email-input ${error ? 'input-error' : ''}`}
          style={{ marginTop: '1rem' }}
        />

        {error && <p className="error-text">Error: {error}</p>}

        <div className="checkbox-container" onClick={() => setMarketingOptIn(v => !v)}>
          <input type="checkbox" checked={marketingOptIn} readOnly />
          <label>Send me more ways to make my dog happy.</label>
        </div>

        <hr className="divider" />

        <p className="terms-text">
          By clicking "Continue", you agree to our{' '}
          <a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a> and{' '}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </p>

        <button
          className="continue-button"
          onClick={handleContinue}
          disabled={loading}
        >
          {loading ? 'Creating account…' : 'CONTINUE'}
        </button>
      </div>
    </section>
  );
}

export default EmailStep;
