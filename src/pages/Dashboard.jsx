// import { useEffect, useState } from 'react';
// import barkboxLogo from "../assets/barkbox-logo.svg";
// import Account from '../Components/Account';
// import Boxes from '../Components/Boxes';
// import DogProfile from '../Components/DogProfile';
// import VetChat from '../Components/VetChat';
// import "../styles/dashboard.css";


// const API_URL = process.env.REACT_APP_API_URL 
// // || 'https://bharbhoxbackend-production.up.railway.app';

// const BarkBoxDashboard = () => {
//   const [activeTab, setActiveTab] = useState('subscription');
//   const [subscription, setSubscription] = useState(null);
//   const [dogName, setDogName] = useState(null);
//   const [showChat, setShowChat] = useState(false);




//   useEffect(() => {
//     const fetchSubscription = async () => {
//       const token = localStorage.getItem('access');
//       try {
//         const res = await fetch(`${API_URL}/api/current-subscription/`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await res.json();
//         setSubscription(data);
//       } catch (error) {
//         console.error('Failed to load subscription', error);
//       }
//     };
//     fetchSubscription();

//     const fetchDogProfile = async () => {
//   const token = localStorage.getItem('access');
//   try {
//     const res = await fetch(`${API_URL}/api/dog/profile/`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await res.json();
//     setDogName(data.name);  // 'name' from Dog model
//   } catch (error) {
//     console.error('Failed to load dog profile', error);
//   }
// };

// fetchDogProfile();

//   }, []);

//   const renderTabContent = () => {
//     if (activeTab === 'subscription') {
//       return (
//         <div className="row">
//           <div className="col-lg-6 mb-4">
//             <div className="card h-100 animate-left">
//               <div className="card-body">
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <h5 className="card-title mb-0">Current Subscription</h5>
//                   <span className="badge bg-success">Active</span>
//                 </div>

//                 {subscription ? (
//                   <div className="subscription-details">
//                     <div className="detail-row">
//                       <span className="detail-label">Plan:</span>
//                       <span className="detail-value">{subscription.plan}</span>
//                     </div>
//                     <div className="detail-row">
//                       <span className="detail-label">Price:</span>
//                       <span className="detail-value">{subscription.price}</span>
//                     </div>
//                     <div className="detail-row">
//                       <span className="detail-label">Next Billing:</span>
//                       <span className="detail-value">{subscription.next_billing}</span>
//                     </div>
//                     <div className="detail-row">
//                       <span className="detail-label">Dog Size:</span>
//                       <span className="detail-value">{subscription.dog_size}</span>
//                     </div>
//                   </div>
//                 ) : (
//                   <p>Loading subscription details...</p>
//                 )}

//                 <div className="subscription-actions mt-4">
//                   <button className="btn btn-outline-secondary btn-sm me-2">
//                     <i className="bi bi-pause-fill"></i> Pause Subscription
//                   </button>
//                   <button className="btn btn-outline-secondary btn-sm">
//                     <i className="bi bi-skip-forward-fill"></i> Skip Next Box
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Next Box Preview */}
// <div className="col-lg-6 mb-4">
//   <div className="card h-100">
//     <div className="card-body animate-right">
//       <h5 className="card-title mb-3">Next Box Preview</h5>
//       {subscription?.next_box ? (
//         <>
//           <p className="text-muted mb-3">
//             {subscription.next_box.month_name} {subscription.next_box.year} - "{subscription.next_box.theme}"
//           </p>
//           <div className="box-preview-image mb-3">
//             <div className="preview-placeholder">
//               <i className="bi bi-image" style={{ fontSize: '3rem', color: '#ddd' }}></i>
//             </div>
//           </div>

//           <div className="box-contents">
//             <div className="content-item">
//               <i className="bi bi-box text-primary"></i>
//               <span>2 Adventure-themed toys</span>
//             </div>
//             <div className="content-item">
//               <i className="bi bi-heart text-danger"></i>
//               <span>2 All-natural treat bags</span>
//             </div>
//             <div className="content-item">
//               <i className="bi bi-truck text-success"></i>
//               <span>Ships {subscription.next_box.ship_date}</span>
//             </div>
//           </div>
//         </>
//       ) : (
//         <p className="text-muted">Currently unavailable</p>
//       )}
//     </div>
//   </div>
// </div>

//         </div>
//       );
//     }

//     if (activeTab === 'my-boxes') return <Boxes />;
//     if (activeTab === 'dog-profile') return <DogProfile />;
//     if (activeTab === 'vet-chat') return <VetChat />;
//     if (activeTab === 'account') return <Account />;
//     return null;
//   };

//   return (
//     <div className="barkbox-dashboard">
//       <div className="dashboard-header">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col">
//               <div className="navbar-logo">
//                 <img className="obj_fit" src={barkboxLogo} alt="BarkBox Logo" />
//               </div>
//             </div>
//             <div className="col-auto">
//               <button className="btn btn-outline-secondary btn-sm">
//                 <i className="bi bi-question-circle me-1"></i>
//                 Get help
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container py-4">
        

//           <h1 className="theme-title">
//   Welcome back{dogName ? `, ${dogName}` : ''}! 🐕
// </h1>
// <p className="welcome-subtitle">
//   Manage {dogName || "your buddy"}'s subscription and see what's coming next
// </p>



//         {/* Stats Cards */}
//         <div className="row mb-4">
//           <div className="col-lg-3 col-md-6 mb-3">
//             <div className="stat-card animate-bottom">
//               <div className="stat-icon boxes"><i className="bi bi-box icon-bounce"></i></div>
//               <div className="stat-number">{subscription?.total_boxes_delivered ?? 0}</div>
//               <div className="stat-label">Boxes Delivered</div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 mb-3">
//             <div className="stat-card animate-bottom">
//               <div className="stat-icon toys"><i className="bi bi-heart icon-bounce"></i></div>
//               <div className="stat-number">{subscription?.total_toys_delivered ?? 0}</div>
//               <div className="stat-label">Toys Loved</div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 mb-3">
//             <div className="stat-card animate-bottom">
//               <div className="stat-icon treats"><i className="bi bi-gift icon-bounce"></i></div>
//               <div className="stat-number">{subscription?.total_treats_delivered ?? 0}</div>
//               <div className="stat-label">Treats Enjoyed</div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 mb-3">
//             <div className="stat-card animate-bottom">
//               <div className="stat-icon delivery"><i className="bi bi-calendar3 icon-bounce"></i></div>
//               <div className="stat-number">{subscription?.next_billing || 'Loading...'}</div>
//               <div className="stat-label">Next Delivery</div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Tabs */}
//         <ul className="nav nav-tabs dashboard-tabs mb-4">
//           {['subscription', 'my-boxes', 'dog-profile', 'vet-chat', 'account'].map(tab => (
//             <li className="nav-item" key={tab}>
//               <button
//                 className={`nav-link ${activeTab === tab ? 'active' : ''}`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="tab-content">
//           {renderTabContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BarkBoxDashboard;

import { useEffect, useState } from 'react';
import barkboxLogo from "../assets/barkbox-logo.svg";
import Account from '../Components/Account';
import Boxes from '../Components/Boxes';
import DogProfile from '../Components/DogProfile';
import VetChat from '../Components/VetChat';
import "../styles/dashboard.css";

const API_URL = process.env.REACT_APP_API_URL;

const BarkBoxDashboard = () => {
  const [activeTab, setActiveTab] = useState('subscription');
  const [subscription, setSubscription] = useState(null);
  const [dogName, setDogName] = useState(null);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const fetchSubscription = async () => {
      const token = localStorage.getItem('access');
      try {
        const res = await fetch(`${API_URL}/api/current-subscription/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setSubscription(data);
      } catch (error) {
        console.error('Failed to load subscription', error);
      }
    };
    fetchSubscription();

    const fetchDogProfile = async () => {
      const token = localStorage.getItem('access');
      try {
        const res = await fetch(`${API_URL}/api/dog/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setDogName(data.name);  // 'name' from Dog model
      } catch (error) {
        console.error('Failed to load dog profile', error);
      }
    };

    fetchDogProfile();
  }, []);

  // Function to handle skipping the next box
  const handleSkip = async () => {
    const token = localStorage.getItem('access');
    try {
      const res = await fetch(`${API_URL}/api/skip-box/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        // Update subscription with the remaining months after skip
        setSubscription(prev => ({
          ...prev,
          remaining_months: data.remaining_months,
        }));
      } else {
        console.error('Failed to skip next box');
      }
    } catch (error) {
      console.error('Error skipping the box:', error);
    }
  };

  const renderTabContent = () => {
    if (activeTab === 'subscription') {
      return (
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card h-100 animate-left">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="card-title mb-0">Current Subscription</h5>
                  <span className="badge bg-success">Active</span>
                </div>

                {subscription ? (
                  <div className="subscription-details">
                    <div className="detail-row">
                      <span className="detail-label">Plan:</span>
                      <span className="detail-value">{subscription.plan}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Price:</span>
                      <span className="detail-value">{subscription.price}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Next Billing:</span>
                      <span className="detail-value">{subscription.next_billing}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Dog Size:</span>
                      <span className="detail-value">{subscription.dog_size}</span>
                    </div>
                  </div>
                ) : (
                  <p>Loading subscription details...</p>
                )}

                <div className="subscription-actions mt-4">
                  <button className="btn btn-outline-secondary btn-sm me-2">
                    <i className="bi bi-pause-fill"></i> Pause Subscription
                  </button>
                  <button className="btn btn-outline-secondary btn-sm" onClick={handleSkip}>
                    <i className="bi bi-skip-forward-fill"></i> Skip Next Box
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Next Box Preview */}
          <div className="col-lg-6 mb-4">
            <div className="card h-100">
              <div className="card-body animate-right">
                <h5 className="card-title mb-3">Next Box Preview</h5>
                {subscription?.next_box ? (
                  <>
                    <p className="text-muted mb-3">
                      {subscription.next_box.month_name} {subscription.next_box.year} - "{subscription.next_box.theme}"
                    </p>
                    <div className="box-preview-image mb-3">
                      <div className="preview-placeholder">
                        <i className="bi bi-image" style={{ fontSize: '3rem', color: '#ddd' }}></i>
                      </div>
                    </div>

                    <div className="box-contents">
                      <div className="content-item">
                        <i className="bi bi-box text-primary"></i>
                        <span>2 Adventure-themed toys</span>
                      </div>
                      <div className="content-item">
                        <i className="bi bi-heart text-danger"></i>
                        <span>2 All-natural treat bags</span>
                      </div>
                      <div className="content-item">
                        <i className="bi bi-truck text-success"></i>
                        <span>Ships {subscription.next_box.ship_date}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-muted">Currently unavailable</p>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'my-boxes') return <Boxes />;
    if (activeTab === 'dog-profile') return <DogProfile />;
    if (activeTab === 'vet-chat') return <VetChat />;
    if (activeTab === 'account') return <Account />;
    return null;
  };

  return (
    <div className="barkbox-dashboard">
      <div className="dashboard-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="navbar-logo">
                <img className="obj_fit" src={barkboxLogo} alt="BarkBox Logo" />
              </div>
            </div>
            <div className="col-auto">
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-question-circle me-1"></i>
                Get help
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <h1 className="theme-title">
          Welcome back{dogName ? `, ${dogName}` : ''}! 🐕
        </h1>
        <p className="welcome-subtitle">
          Manage {dogName || "your buddy"}'s subscription and see what's coming next
        </p>

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="stat-card animate-bottom">
              <div className="stat-icon boxes"><i className="bi bi-box icon-bounce"></i></div>
              <div className="stat-number">{subscription?.total_boxes_delivered ?? 0}</div>
              <div className="stat-label">Boxes Delivered</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="stat-card animate-bottom">
              <div className="stat-icon toys"><i className="bi bi-heart icon-bounce"></i></div>
              <div className="stat-number">{subscription?.total_toys_delivered ?? 0}</div>
              <div className="stat-label">Toys Loved</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="stat-card animate-bottom">
              <div className="stat-icon treats"><i className="bi bi-gift icon-bounce"></i></div>
              <div className="stat-number">{subscription?.total_treats_delivered ?? 0}</div>
              <div className="stat-label">Treats Enjoyed</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="stat-card animate-bottom">
              <div className="stat-icon delivery"><i className="bi bi-calendar3 icon-bounce"></i></div>
              <div className="stat-number">{subscription?.next_billing || 'Loading...'}</div>
              <div className="stat-label">Next Delivery</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <ul className="nav nav-tabs dashboard-tabs mb-4">
          {['subscription', 'my-boxes', 'dog-profile', 'vet-chat', 'account'].map(tab => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default BarkBoxDashboard;
