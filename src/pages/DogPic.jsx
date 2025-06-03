// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSiteData } from '../context/SiteDataContext';

// function DogPic() {
//   const [image, setImage] = useState(null);
//   const { updateSiteData } = useSiteData();
//   const navigate = useNavigate();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImage(imageUrl);
//       updateSiteData("dog", { image: imageUrl });
//     }
//   };

//   const handleContinue = () => {
//     navigate('/you-email');
//   };

//   return (
//     <div className="food-preference-container dog-pic-container">
//       <h2 className="mb-3 theme-title">Upload a Photo of Your Dog</h2>

//       <input
//         type="file"
//         accept="image/*"
//         className="form-control mb-3"
//         onChange={handleImageChange}
//       />

//       {image && (
//         <div className="image-preview mt-3">
//           <img src={image} alt="Dog Preview" className="img-fluid rounded" />
//         </div>
//       )}

//       <button
//         className="continue-btn theme_btn mx-auto mt-4"
//         disabled={!image}
//         onClick={handleContinue}
//       >
//         CONTINUE
//       </button>
//     </div>
//   );
// }

// export default DogPic;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';

function DogPic() {
  const [image, setImage] = useState(null);
  const { updateSiteData } = useSiteData();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);

      // ✅ Save both preview and actual file for backend
      updateSiteData("dog", {
        image: imageUrl,     // for preview
        imageFile: file      // for sending via FormData
      });
    }
  };

  const handleContinue = () => {
    navigate('/you-email'); // this should be your email step route
  };

  return (
    <div className="food-preference-container dog-pic-container">
      <h2 className="mb-3 theme-title">Upload a Photo of Your Dog</h2>

      <input
        type="file"
        accept="image/*"
        className="form-control mb-3"
        onChange={handleImageChange}
      />

      {image && (
        <div className="image-preview mt-3">
          <img src={image} alt="Dog Preview" className="img-fluid rounded" />
        </div>
      )}

      <button
        className="continue-btn theme_btn mx-auto mt-4"
        disabled={!image}
        onClick={handleContinue}
      >
        CONTINUE
      </button>
    </div>
  );
}

export default DogPic;
