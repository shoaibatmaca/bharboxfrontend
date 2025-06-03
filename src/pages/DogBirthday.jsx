import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext'; // ✅ context import

function AdoptionDateStep() {
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { updateSiteData } = useSiteData(); // ✅ use context

  const isValidDate = (value) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{4}$/; // MM/YYYY
    return regex.test(value);
  };

  const handleContinue = () => {
    if (!date || isValidDate(date)) {
      setError('');
      updateSiteData("dog", { adoptionDate: date || null }); // ✅ context update
      navigate('/food-preferences', { state: { adoptionDate: date || null } });
    } else {
      setError('Invalid date');
    }
  };

  const handleSkip = () => {
    updateSiteData("dog", { adoptionDate: null }); // ✅ context update
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

        {/* <input
          type="text"
          placeholder="MM/YYYY"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`adoption-input ${error ? 'input-error' : ''}`}
        /> */}
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
