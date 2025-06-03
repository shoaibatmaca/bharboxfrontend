// import { useEffect, useState } from 'react';

// const API_URL = 'http://127.0.0.1:8000';

// const getMonthName = (month) =>
//   new Date(2000, month - 1).toLocaleString('default', { month: 'long' });

// const BoxHistory = () => {
//   const [boxHistory, setBoxHistory] = useState([]);

//   useEffect(() => {
//     const fetchHistory = async () => {
//       const token = localStorage.getItem('access');
//       try {
//         const res = await fetch(`${API_URL}/api/box-history/`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await res.json();
//         setBoxHistory(data);
//       } catch (err) {
//         console.error('Failed to load box history:', err);
//       }
//     };
//     fetchHistory();
//   }, []);

//   const renderStars = (rating) =>
//     Array.from({ length: 5 }, (_, i) => (
//       <span key={i} className={`star ${i < rating ? 'filled' : 'empty'}`}>★</span>
//     ));

//   return (
//     <div className="container">
//       <div className="box-history-container animate-bottom">
//         <div className="box-history-header">
//           <h2 className="theme-title">Box History</h2>
//           <p className="box-history-subtitle">See all the boxes your pup has received</p>
//         </div>

//         <div className="box-history-list">
//           {boxHistory.map((box) => (
//             <div key={box.id} className="box-history-item animate-bottom">
//               <div className="box-image-placeholder">
//                 {box.box_image ? (
//                   <img src={box.box_image} alt="Box" />
//                 ) : (
//                   <div className="placeholder-img" />
//                 )}
//               </div>

//               <div className="box-details">
//                 <div className="box-main-info">
//                   <h3 className="box-month">
//                     {getMonthName(box.month)} {box.year}
//                   </h3>
//                   <p className="box-theme">{box.box_theme}</p>
//                   <div className="box-status">
//                     <span className="status-badge">{box.status.toUpperCase()}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="box-actions">
//                 <div className="box-rating">{renderStars(box.rating)}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BoxHistory;

import axios from 'axios';
import { useEffect, useState } from 'react';


const API_URL = process.env.REACT_APP_API_URL || 'https://bharbhoxbackend-production.up.railway.app';

const getMonthName = (month) => new Date(2000, month - 1).toLocaleString('default', { month: 'long' });

const BoxHistory = () => {
  const [boxHistory, setBoxHistory] = useState([]);
  
const token = localStorage.getItem('access');

  useEffect(() => {
    const fetchHistory = async () => {
      
      try {
        const response = await axios.get(`${API_URL}/api/box-history/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBoxHistory(response.data);
      } catch (error) {
        console.error('Failed to fetch box history:', error);
      }
    };
    fetchHistory();
  }, [token]);

  const handleRating = async (boxId, ratingValue) => {
    try {
      await axios.post(`${API_URL}/api/rate-box/${boxId}/`, {
        rating: ratingValue
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setBoxHistory((prev) =>
        prev.map(box =>
          box.id === boxId ? { ...box, rating: ratingValue } : box
        )
      );
    } catch (error) {
      console.error('Rating failed:', error);
    }
  };

  const renderStars = (rating = 0, boxId) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={`star ${i < rating ? 'filled' : 'empty'}`}
      style={{ cursor: 'pointer' }}
      onClick={() => handleRating(boxId, i + 1)}
    >
      ★
    </span>
  ));
};


  return (
    <div className="container">
      <div className="box-history-container animate-bottom">
        <div className="box-history-header">
          <h2 className="theme-title">Box History</h2>
          <p className="box-history-subtitle">See all the boxes your pup has received</p>
        </div>

        <div className="box-history-list">
          {boxHistory.map((box) => (
            <div key={box.id} className="box-history-item animate-bottom">
              <div className="box-image-placeholder">
  {box.box_image_url ? (
    <img
      src={box.box_image_url}
      alt="Box"
      style={{
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '12px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
      }}
    />
  ) : (
    <div className="placeholder-img"></div>
  )}
</div>


              <div className="box-details">
                <div className="box-main-info">
                  <h3 className="box-month">{`${getMonthName(box.month)} ${box.year}`}</h3>
                  <p className="box-theme">{box.box_theme}</p>
                  <div className="box-status">
                    <span className="status-badge">{box.status.toUpperCase()}</span>
                  </div>
                </div>
              </div>

              <div className="box-actions">
                <div className="box-rating">
                  {renderStars(box.rating, box.id)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxHistory;
