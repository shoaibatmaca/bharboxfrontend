import React from "react";
import ChatUs from '../Components/ChatUs';
import ContentContainer from '../Components/ContentSec';
import Cta from '../Components/Cta';
import Faqs from '../Components/Faqs';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Testimonial from '../Components/Testimonial';
import VideoSection from '../Components/VideoSection';
import Newsletter from '../Components/Newsletter';

function Landing() {
  return (
        
    <section className="landing-page">
      <Navbar/>
      <div className="container-fluid p-0">
        <div className="banner-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 banner-desc">
                <div className="banner-text">
                  <h1>DOG JOY, DELIVERED EVERY MONTH</h1>
                 <a style={{textDecoration : 'none'}} href="/toy-selector">
                   <button  className="theme_btn">Get BarkBox</button>
                 </a>
                </div>
              </div>
              <div className="col-lg-8"></div>
            </div>
          </div>
        </div>
      </div>

      <ContentContainer />
      <Cta />
      <Testimonial />
      <VideoSection />
      <ChatUs/>
      <Faqs/>
      <Newsletter />
      <Footer />
    </section>
  );
}

export default Landing;
