import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dogSmall from '../assets/dog-small.png';
import dogMedium from '../assets/dog-medium.png';
import dogLarge from '../assets/dog-large.png';
import { useSiteData } from '../context/SiteDataContext'; // ✅ import context

function DogSizeSelector() {
  const [selectedSize, setSelectedSize] = useState('');
  const navigate = useNavigate();
  const { updateSiteData } = useSiteData(); // ✅ use context

  const handleSelect = (size) => {
    setSelectedSize(size);
  };

  const handleContinue = () => {
    if (selectedSize) {
      updateSiteData("dog", { size: selectedSize }); // ✅ context update
      navigate('/dog-breed', { state: { size: selectedSize } });
    }
  };

  return (
    <section className='dog-size-section'>
      <div className="dog-size-container">
        <h2 className="theme-title">What size is your dog?</h2>

        <div className="size-options">
          <div
            className={`size-card ${selectedSize === 'small' ? 'selected' : ''}`}
            onClick={() => handleSelect('small')}
          >
            <img src={dogSmall} alt="Small Dog" />
            <h3>Small</h3>
            <p>1–20lbs</p>
          </div>

          <div
            className={`size-card ${selectedSize === 'medium' ? 'selected' : ''}`}
            onClick={() => handleSelect('medium')}
          >
            <img src={dogMedium} alt="Medium Dog" />
            <h3>Medium</h3>
            <p>20–50lbs</p>
          </div>

          <div
            className={`size-card ${selectedSize === 'large' ? 'selected' : ''}`}
            onClick={() => handleSelect('large')}
          >
            <img src={dogLarge} alt="Large Dog" />
            <h3>Large</h3>
            <p>50+ lbs</p>
          </div>
        </div>

        <p className="size-note">
          All products are the same price, regardless of size. You can change sizes at any time.
        </p>

        <button
          className="continue-button"
          disabled={!selectedSize}
          onClick={handleContinue}
        >
          CONTINUE
        </button>
      </div>
    </section>
  );
}

export default DogSizeSelector;
