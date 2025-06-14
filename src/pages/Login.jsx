// import { useState } from 'react';
// import barkBoxLogo from '../assets/barkbox-logo.svg';
// import "../styles/login.css";

// const AuthTabs = () => {
//   const [activeTab, setActiveTab] = useState('login');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState(''); // ← Replace with default or blank

//   const handleLogin = async () => {
//     try {
//       const response = await fetch("https://bharbhoxbackend-production.up.railway.app/api/token/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         alert("Login failed: " + (errorData.detail || "Invalid credentials"));
//         return;
//       }

//       const data = await response.json();
//       localStorage.setItem("access", data.access);
//       localStorage.setItem("refresh", data.refresh);

//       window.location.href = "/dashboard";
//     } catch (err) {
//       console.error("Login error", err);
//       alert("Login failed. Try again.");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
//         <div className="col-lg-4">
//           <div className="login-card shadow p-lg-3 p-1">
//             {/* Logo */}
//             <div className="text-center pt-4 pb-3">
//               <div className='login-logo '>
//                 <img className="obj_fit shadow-sm" alt="" src={barkBoxLogo} />
//               </div>
//             </div>

//             {/* Tabs */}
//             <ul className="nav nav-tabs login-tabs">
//               <li className="nav-item w-50">
//                 <button
//                   className={`nav-link w-100 ${activeTab === 'login' ? 'active fw-medium border-bottom border-dark border-2' : 'text-secondary'}`}
//                   onClick={() => setActiveTab('login')}
//                 >
//                   LOGIN
//                 </button>
//               </li>

//             </ul>

//             {/* Form */}
//             <div className="login-card-body p-lg-4 p-2">
//               <div className="mb-3">
//                 <div className="input-group mb-3">
//                   <span className="input-group-text bg-light border-0" >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </span>
//                   <input
//                     type="username"
//                     className="form-control bg-light border-0"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="Email"
//                   />
//                 </div>

//                 <div className="input-group">
//                   <span className="input-group-text bg-light border-0" style={{ backgroundColor: '#EBF5FF' }}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                     </svg>
//                   </span>
//                   <input
//                     type="password"
//                     className="form-control border-0"
//                     style={{ backgroundColor: '#EBF5FF' }}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                   />
//                 </div>
//               </div>

//               {activeTab === 'login' && (
//                 <>
//                   <div className="text-center mb-3">
//                     <a href="#" className="text-primary small">Want to reset your password?</a>
//                   </div>

//                   <button className="btn theme_btn w-100 py-2 login-p" onClick={handleLogin}>
//                     Log In
//                   </button>
//                 </>
//               )}


              
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthTabs;

import { useState } from 'react';
import barkBoxLogo from '../assets/barkbox-logo.svg';
import "../styles/login.css";

const AuthTabs = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const API_URL = process.env.REACT_APP_API_URL 

  const handleLogin = async () => {
    try {
        const response = await fetch(`${API_URL}/api/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert("Login failed: " + (errorData.detail || "Invalid credentials"));
        return;
      }

      const data = await response.json();
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Login error", err);
      alert("Login failed. Try again.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-lg-4">
          <div className="login-card shadow p-lg-3 p-1">
            {/* Logo */}
            <div className="text-center pt-4 pb-3">
              <div className='login-logo'>
                <img className="obj_fit shadow-sm" alt="" src={barkBoxLogo} />
              </div>
            </div>

            {/* Form */}
            <div className="login-card-body p-lg-4 p-2">
              <div className="mb-3">
                <div className="input-group mb-3">
                  <span className="input-group-text bg-light border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    type="username"
                    className="form-control bg-light border-0"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Email"
                  />
                </div>

                <div className="input-group">
                  <span className="input-group-text bg-light border-0" style={{ backgroundColor: '#EBF5FF' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input
                    type="password"
                    className="form-control border-0"
                    style={{ backgroundColor: '#EBF5FF' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="text-center mb-3">
                <a href="#" className="text-primary small">Want to reset your password?</a>
              </div>

              <button className="btn theme_btn w-100 py-2 login-p" onClick={handleLogin}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthTabs;
