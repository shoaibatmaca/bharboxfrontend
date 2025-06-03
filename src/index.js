// ✅ React base imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// ✅ Bootstrap (must come first so your CSS can override it)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ✅ Custom styles (your styles come AFTER Bootstrap to override it)
import './index.css';
import './styles/variables.css';
import './styles/main.css';
import './styles/navbar.css';
import './styles/responsive.css'

import 'bootstrap-icons/font/bootstrap-icons.css';


import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ✅ Run performance report if needed
reportWebVitals();
