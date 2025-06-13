// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSiteData } from '../context/SiteDataContext';

// // const dogBreeds = [
// //   "Labrador Retriever", "German Shepherd", "Golden Retriever", "Border Collie",
// //   "Poodle", "Rottweiler", "Doberman Pinscher", "Belgian Malinois",
// //   "Beagle", "Shih Tzu", "Cocker Spaniel", "Cavalier King Charles Spaniel",
// //   "Siberian Husky", "Alaskan Malamute", "Boxer", "Pug",
// //   "French Bulldog", "Chihuahua", "Samoyed", "Pomeranian", "Mix"
// // ];

// const dogBreeds = [
//   "Labrador Retriever", "German Shepherd", "Golden Retriever", "Border Collie",
//   "Poodle", "Rottweiler", "Doberman Pinscher", "Belgian Malinois",
//   "Beagle", "Shih Tzu", "Cocker Spaniel", "Cavalier King Charles Spaniel",
//   "Siberian Husky", "Alaskan Malamute", "Boxer", "Pug",
//   "French Bulldog", "Chihuahua", "Samoyed", "Pomeranian", "Mix",
//   "Great Dane", "Saint Bernard", "Bullmastiff", "Maltese",
//   "Boston Terrier", "Australian Shepherd", "Bichon Frise", "Akita",
//   "Basenji", "Bernese Mountain Dog", "Bloodhound", "Basset Hound",
//   "Newfoundland", "Weimaraner", "Rhodesian Ridgeback", "Whippet",
//   "Yorkshire Terrier", "Miniature Schnauzer", "English Bulldog", "Australian Cattle Dog",
//   "Shar Pei", "Lhasa Apso", "Papillon", "Havanese", "English Springer Spaniel",
//   "Other"
// ];

// function DogBreedStep() {
//   const [primaryBreed, setPrimaryBreed] = useState('');
//   const [secondaryBreed, setSecondaryBreed] = useState('');
//   const [showPrimarySuggestions, setShowPrimarySuggestions] = useState(false);
//   const [showSecondarySuggestions, setShowSecondarySuggestions] = useState(false);
//   const navigate = useNavigate();
//   const { updateSiteData } = useSiteData();

//   const handleContinue = () => {
//     updateSiteData("dog", {
//       primaryBreed: primaryBreed || '',
//       secondaryBreed: secondaryBreed || ''
//     });
//     navigate('/adoption-date-step', {
//       state: {
//         primaryBreed: primaryBreed || '',
//         secondaryBreed: secondaryBreed || ''
//       }
//     });
//   };

//   const handleSkip = () => {
//     updateSiteData("dog", { primaryBreed: '', secondaryBreed: '' });
//     navigate('/adoption-date-step', {
//       state: { primaryBreed: '', secondaryBreed: '' }
//     });
//   };

//   const getFilteredBreeds = (input) =>
//     dogBreeds.filter((b) => b.toLowerCase().includes(input.toLowerCase()));

//   const inputStyle = {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '6px',
//     border: '1px solid #ccc',
//     marginBottom: '4px'
//   };

//   const listStyle = {
//     position: 'absolute',
//     top: '100%',
//     left: 0,
//     right: 0,
//     background: '#fff',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     maxHeight: '200px',
//     overflowY: 'auto',
//     listStyle: 'none',
//     padding: 0,
//     margin: 0,
//     zIndex: 999
//   };

//   const listItemStyle = {
//     padding: '10px 14px',
//     borderBottom: '1px solid #eee',
//     cursor: 'pointer'
//   };

//   return (
//     <section className='breed-section'>
//       <div className="dog-breed-container">
//         <h1 className='theme-title mb-4'>What's the breed of your Dog?</h1>

//         {/* Primary Breed Picker */}
//         <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
//           <label className="form-label">Primary Breed</label>
//           <input
//             type="text"
//             placeholder="Type or select breed"
//             value={primaryBreed}
//             onChange={(e) => {
//               setPrimaryBreed(e.target.value);
//               setShowPrimarySuggestions(true);
//             }}
//             onBlur={() => setTimeout(() => setShowPrimarySuggestions(false), 150)}
//             style={inputStyle}
//           />
//           {showPrimarySuggestions && (
//             <ul style={listStyle}>
//               {getFilteredBreeds(primaryBreed).map((b) => (
//                 <li
//                   key={b}
//                   onMouseDown={() => {
//                     setPrimaryBreed(b);
//                     setShowPrimarySuggestions(false);
//                   }}
//                   style={listItemStyle}
//                 >
//                   {b}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Secondary Breed Picker */}
//         <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
//           <label className="form-label">Secondary Breed</label>
//           <input
//             type="text"
//             placeholder="Type or select breed"
//             value={secondaryBreed}
//             onChange={(e) => {
//               setSecondaryBreed(e.target.value);
//               setShowSecondarySuggestions(true);
//             }}
//             onBlur={() => setTimeout(() => setShowSecondarySuggestions(false), 150)}
//             style={inputStyle}
//           />
//           {showSecondarySuggestions && (
//             <ul style={listStyle}>
//               {getFilteredBreeds(secondaryBreed).map((b) => (
//                 <li
//                   key={b}
//                   onMouseDown={() => {
//                     setSecondaryBreed(b);
//                     setShowSecondarySuggestions(false);
//                   }}
//                   style={listItemStyle}
//                 >
//                   {b}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <p className="skip-link" onClick={handleSkip} style={{ cursor: 'pointer', color: '#888', marginBottom: '10px' }}>
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
  "French Bulldog", "Chihuahua", "Samoyed", "Pomeranian", "Mix",
  "Great Dane", "Saint Bernard", "Bullmastiff", "Maltese",
  "Boston Terrier", "Australian Shepherd", "Bichon Frise", "Akita",
  "Basenji", "Bernese Mountain Dog", "Bloodhound", "Basset Hound",
  "Newfoundland", "Weimaraner", "Rhodesian Ridgeback", "Whippet",
  "Yorkshire Terrier", "Miniature Schnauzer", "English Bulldog", "Australian Cattle Dog",
  "Shar Pei", "Lhasa Apso", "Papillon", "Havanese", "English Springer Spaniel",
  "Other"
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
          <label className="form-label">Primary Breed</label>
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

        {/* Secondary Breed Picker (with "Other" input support) */}
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <label className="form-label">Secondary Breed</label>
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
                    if (b === "Other") {
                      const custom = prompt("Please enter your dog's secondary breed:");
                      if (custom) setSecondaryBreed(custom);
                    } else {
                      setSecondaryBreed(b);
                    }
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
