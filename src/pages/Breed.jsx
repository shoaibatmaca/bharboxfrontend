// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSiteData } from '../context/SiteDataContext'; // ✅ context import

// function DogBreedStep() {
//   const [breed, setBreed] = useState('');
//   const navigate = useNavigate();
//   const { updateSiteData } = useSiteData(); // ✅ use context

//   const handleContinue = () => {
//     updateSiteData("dog", { breed }); // ✅ context update
//     navigate('/adoption-date-step', { state: { breed } });
//   };

//   const handleSkip = () => {
//     updateSiteData("dog", { breed: '' }); // ✅ context update even if skipped
//     navigate('/adoption-date-step', { state: { breed: '' } });
//   };

//   return (
//     <section className='breed-section'>
//       <div className="dog-breed-container">
//         <h1 className='theme-title mb-4'> What's breed of your Dog</h1>

//         {/* <input
//           type="text"
//           placeholder="Dog breed"
//           value={breed}
//           onChange={(e) => setBreed(e.target.value)}
//           className="dog-breed-input"
//         /> */}

// <select
//   value={breed}
//   onChange={(e) => setBreed(e.target.value)}
//   className="dog-breed-input"
// >
//   <option value="">Select Dog Breed</option>
//   <option value="Labrador Retriever">Labrador Retriever</option>
//   <option value="German Shepherd">German Shepherd</option>
//   <option value="Golden Retriever">Golden Retriever</option>
//   <option value="Border Collie">Border Collie</option>
//   <option value="Poodle">Poodle</option>
//   <option value="Rottweiler">Rottweiler</option>
//   <option value="Doberman Pinscher">Doberman Pinscher</option>
//   <option value="Belgian Malinois">Belgian Malinois</option>
//   <option value="Beagle">Beagle</option>
//   <option value="Shih Tzu">Shih Tzu</option>
//   <option value="Cocker Spaniel">Cocker Spaniel</option>
//   <option value="Cavalier King Charles Spaniel">Cavalier King Charles Spaniel</option>
//   <option value="Siberian Husky">Siberian Husky</option>
//   <option value="Alaskan Malamute">Alaskan Malamute</option>
//   <option value="Boxer">Boxer</option>
//   <option value="Pug">Pug</option>
//   <option value="French Bulldog">French Bulldog</option>
//   <option value="Chihuahua">Chihuahua</option>
//   <option value="Samoyed">Samoyed</option>
//   <option value="Pomeranian">Pomeranian</option>
//   <option value="Mix">Mix</option>
// </select>

//         <p className="skip-link" onClick={handleSkip}>
//           Or, skip this step
//         </p>

//         <button className="continue-button" onClick={handleContinue}>
//           CONTINUE
//         </button>
//       </div>
//     </section>
//   );
// }

// export default DogBreedStep;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';

const dogBreeds = [
  "Labrador Retriever", "German Shepherd", "Golden Retriever", "Border Collie",
  "Poodle", "Rottweiler", "Doberman Pinscher", "Belgian Malinois",
  "Beagle", "Shih Tzu", "Cocker Spaniel", "Cavalier King Charles Spaniel",
  "Siberian Husky", "Alaskan Malamute", "Boxer", "Pug",
  "French Bulldog", "Chihuahua", "Samoyed", "Pomeranian", "Mix"
];

function DogBreedStep() {
  const [primaryBreed, setPrimaryBreed] = useState('');
  const [secondaryBreed, setSecondaryBreed] = useState('');
  const [showPrimarySuggestions, setShowPrimarySuggestions] = useState(false);
  const [showSecondarySuggestions, setShowSecondarySuggestions] = useState(false);
  const navigate = useNavigate();
  const { updateSiteData } = useSiteData();

  const handleContinue = () => {
    updateSiteData("dog", {
      primaryBreed: primaryBreed || '',
      secondaryBreed: secondaryBreed || ''
    });
    navigate('/adoption-date-step', {
      state: {
        primaryBreed: primaryBreed || '',
        secondaryBreed: secondaryBreed || ''
      }
    });
  };

  const handleSkip = () => {
    updateSiteData("dog", { primaryBreed: '', secondaryBreed: '' });
    navigate('/adoption-date-step', {
      state: { primaryBreed: '', secondaryBreed: '' }
    });
  };

  const getFilteredBreeds = (input) =>
    dogBreeds.filter((b) => b.toLowerCase().includes(input.toLowerCase()));

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginBottom: '4px'
  };

  const listStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxHeight: '200px',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    zIndex: 999
  };

  const listItemStyle = {
    padding: '10px 14px',
    borderBottom: '1px solid #eee',
    cursor: 'pointer'
  };

  return (
    <section className='breed-section'>
      <div className="dog-breed-container">
        <h1 className='theme-title mb-4'>What's the breed of your Dog?</h1>

        {/* Primary Breed Picker */}
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <label className="form-label">Primary Breed (Optional)</label>
          <input
            type="text"
            placeholder="Type or select breed"
            value={primaryBreed}
            onChange={(e) => {
              setPrimaryBreed(e.target.value);
              setShowPrimarySuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowPrimarySuggestions(false), 150)}
            style={inputStyle}
          />
          {showPrimarySuggestions && (
            <ul style={listStyle}>
              {getFilteredBreeds(primaryBreed).map((b) => (
                <li
                  key={b}
                  onMouseDown={() => {
                    setPrimaryBreed(b);
                    setShowPrimarySuggestions(false);
                  }}
                  style={listItemStyle}
                >
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Secondary Breed Picker */}
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <label className="form-label">Secondary Breed (Optional)</label>
          <input
            type="text"
            placeholder="Type or select breed"
            value={secondaryBreed}
            onChange={(e) => {
              setSecondaryBreed(e.target.value);
              setShowSecondarySuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSecondarySuggestions(false), 150)}
            style={inputStyle}
          />
          {showSecondarySuggestions && (
            <ul style={listStyle}>
              {getFilteredBreeds(secondaryBreed).map((b) => (
                <li
                  key={b}
                  onMouseDown={() => {
                    setSecondaryBreed(b);
                    setShowSecondarySuggestions(false);
                  }}
                  style={listItemStyle}
                >
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="skip-link" onClick={handleSkip} style={{ cursor: 'pointer', color: '#888', marginBottom: '10px' }}>
          Or, skip this step
        </p>

        <button className="continue-button" onClick={handleContinue}>
          CONTINUE
        </button>
      </div>
    </section>
  );
}

export default DogBreedStep;
