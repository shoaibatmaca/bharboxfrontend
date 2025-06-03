import { useEffect, useState } from 'react';

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('access');

      try {
        const res = await fetch('https://bharbhoxbackend-production.up.railway.app/api/user/profile/', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading account info...</p>;

  return (
    <div className="account-container">
      <div className="account-content">
        <div className="account-section animate-bottom">
          <h2 className="section-title">Account Information</h2>

          <div className="account-details animate-bottom">
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{user.email}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{user.first_name} {user.last_name}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Customer ID:</span>
              <span className="detail-value">#{user.id}</span>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Account;




// {/* Billing & Shipping Section */}
//         <div className="billing-section animate-right">
//           <h2 className="section-title">Billing & Shipping</h2>
          
//           <div className="billing-content">
//             <div className="payment-method">
//               <h3 className="subsection-title">Payment Method</h3>
//               <div className="payment-info">
//                 <svg className="card-icon" width="20" height="16" viewBox="0 0 24 19" fill="none">
//                   <rect x="1" y="3" width="22" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
//                   <path d="M1 7h22" stroke="currentColor" strokeWidth="2"/>
//                 </svg>
//                 <span className="card-number">•••• •••• •••• 4242</span>
//               </div>
//             </div>

//             <div className="shipping-address">
//               <h3 className="subsection-title">Shipping Address</h3>
//               <div className="address-info">
//                 <div className="address-line">123 Dog Street</div>
//                 <div className="address-line">Puppy City, PC 12345</div>
//               </div>
//             </div>

//             <button className="update-billing-btn">
//               Update Billing Info
//             </button>
//           </div>
//         </div>