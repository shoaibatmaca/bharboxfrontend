import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';

function AdoptionDateStep() {
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { updateSiteData } = useSiteData(); 
  // const isValidDate = (value) => {
  //   const regex = /^(0[1-9]|1[0-2])\/\d{4}$/; 
  //   return regex.test(value);
  // };


  // notes for that working scenario
// 1.Future months/years (e.g., 2027 if today is 2025) are not allowed
// 2.Current month/year (e.g., June 2025) is not allowed
// 3.Only valid past months should be accepted
  const isValidDate = (value) => {
  const regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
  if (!regex.test(value)) return false;

  const [month, year] = value.split('/').map(Number);
  const now = new Date();
  const currentMonth = now.getMonth() + 1; // 0-indexed
  const currentYear = now.getFullYear();

  // Reject if it's the current month/year or future date
  if (year > currentYear || (year === currentYear && month >= currentMonth)) {
    return false;
  }

  return true;
};

  const handleContinue = () => {
    if (!date || isValidDate(date)) {
      setError('');
      updateSiteData("dog", { adoptionDate: date || null }); 
      navigate('/food-preferences', { state: { adoptionDate: date || null } });
    } else {
      setError('Invalid date');
    }
  };

  const handleSkip = () => {
    updateSiteData("dog", { adoptionDate: null }); 
    navigate('/food-preferences', { state: { adoptionDate: null } });
  };

  return (
    <section className='adoption-section'>
      <div className="adoption-date-container">
        <h1 className='theme-title mb-4'>
          When is Dog's birthday?
        </h1>
        <p className="adoption-message">
          Or adoption day. We want to help celebrate their special day!
        </p>

<input
  type="text"
  placeholder="MM/YYYY"
  value={date}
  onChange={(e) => {
    let value = e.target.value.replace(/\D/g, ''); // remove non-digits
    if (value.length > 6) value = value.slice(0, 6); // max 6 digits
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    setDate(value);
  }}
  className={`adoption-input ${error ? 'input-error' : ''}`}
/>

        {error && <p className="error-text">Error: {error}</p>}

        <p className="skip-link" onClick={handleSkip}>
          Or, skip this step
        </p>

        <button className="continue-button" onClick={handleContinue}>
          CONTINUE
        </button>
      </div>
    </section>
  );
}

export default AdoptionDateStep;
