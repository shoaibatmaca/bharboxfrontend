import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <div className="container">
      <h2 className="theme-title text-center mb-5">Wanna sniff butts?</h2>
        <div className="row justify-content-center">
          <div className="col-lg-5 text-center">
            <p className="newsletter-text p-20">
              And by "sniff butts," of course we mean "sign up for our 
              emails so you can get exclusive deals, content, and more."
              <br />
              So... wanna sniff butts?
            </p>
          </div>
     
        
          <div className="col-lg-5 text-center">
          <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control"
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn btn-signup" type="submit">SIGN UP</button>
              </div>
            </form>
      
          </div>
        </div>
        
     
      </div>
      <hr className="newsletter-divider" />
    </section>
  );
}

export default Newsletter;