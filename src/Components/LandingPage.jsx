import ChatUs from './ChatUs';
import ContentContainer from './ContentSec';
import Cta from './Cta';
import Faqs from './Faqs';
import Footer from './Footer';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Testimonial from './Testimonial';
import VideoSection from './VideoSection';

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
                  <button className="theme_btn">Get BhauBox</button>
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
      <ChatUs />
      <Faqs />
      <Newsletter />
      <Footer />
    </section>
  );
}

export default Landing;
