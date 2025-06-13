import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';

function Allergies() {
  const [preferences, setPreferences] = useState([]);
  const navigate = useNavigate();
  const { updateSiteData } = useSiteData();

  const options = ['Chicken', 'Turkey', 'Beef', 'None'];

  const handleToggle = (option) => {
    if (option === 'None') {
      setPreferences(['None']);
    } else {
      const updated = preferences.includes(option)
        ? preferences.filter((item) => item !== option)
        : [...preferences.filter((item) => item !== 'None'), option];
      setPreferences(updated);
    }
  };

  const handleContinue = () => {
    updateSiteData("dog", { allergies: preferences }); 
    navigate('/dog-image-upload', { state: { restrictions: preferences } });
  };

  return (
    <section className='allergies'>
      <div className="food-preference-container">
        <h1 className='theme-title'>Any allergies?</h1>
        <p className="description">
          Our treats are formulated by a certified nutritionist and made in the USA and Canada
          to make sure your pup is happy and healthy.
        </p>

        <p className="question"><strong>Please do <u>not</u> send any...</strong></p>

        <div className="food-options">
          {options.map((option) => (
            <div
              key={option}
              className={`food-box ${preferences.includes(option) ? 'selected' : ''}`}
              onClick={() => handleToggle(option)}
            >
              <input
                type="checkbox"
                checked={preferences.includes(option)}
                readOnly
              />
              <span>{option}</span>
            </div>
          ))}
        </div>

        <p className="note">
          If your dog has other dietary needs, please chat with us after you checkout and we'll do our best to accommodate.
        </p>

        <button className="continue-btn theme_btn mx-auto" onClick={handleContinue}>
          CONTINUE
        </button>
      </div>
    </section>
  );
}

export default Allergies;
