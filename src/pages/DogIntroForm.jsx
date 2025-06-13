import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';
function DogIdentityStep() {
  const [dogName, setDogName] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();
  const { updateSiteData } = useSiteData(); 

  const handleContinue = () => {
    if (dogName && gender) {
      updateSiteData("dog", { name: dogName, gender }); 
      navigate('/dog-size-selector', { state: { dogName, gender } });
    }
  };

  return (
    <>
      <section className='identity-section'>
        <div className="dog-identity-container">
          <input
            type="text"
            placeholder="Dog name"
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
            className="dog-name-input"
          />

          <div className="gender-buttons">
            <button
              className={gender === 'girl' ? 'active' : ''}
              onClick={() => setGender('girl')}
            >
              She's a good girl
            </button>
            <button
              className={gender === 'boy' ? 'active' : ''}
              onClick={() => setGender('boy')}
            >
              He's a good boy
            </button>
          </div>

          <button
            className="continue-button"
            disabled={!dogName || !gender}
            onClick={handleContinue}
          >
            CONTINUE
          </button>
        </div>
      </section>
    </>
  );
}

export default DogIdentityStep;
