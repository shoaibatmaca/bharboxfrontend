import React, { useEffect, useRef } from "react";
import imageOne from '../assets/testimonial-img1.png'
import imageTwo from '../assets/testimonial-img2.png'
import imageThree from '../assets/testimonil-img3.png'
// Assuming you'll add two more images - use placeholders for now
const imageFour = imageOne; // Replace with your fourth image
const imageFive = imageTwo; // Replace with your fifth image

function Testimonial() {
  const owlCarouselRef = useRef(null);

  useEffect(() => {
    // Load jQuery and Owl Carousel if they're not already loaded
    const loadScripts = async () => {
      // Check if jQuery is already loaded
      if (!window.jQuery) {
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
        jqueryScript.async = true;
        document.body.appendChild(jqueryScript);

        // Wait for jQuery to load
        await new Promise(resolve => {
          jqueryScript.onload = resolve;
        });
      }

      // Check if Owl Carousel is already loaded
      if (!window.jQuery.fn.owlCarousel) {
        // Load Owl Carousel CSS
        const owlCarouselCSS = document.createElement('link');
        owlCarouselCSS.rel = 'stylesheet';
        owlCarouselCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css';
        document.head.appendChild(owlCarouselCSS);

        // Load Owl Carousel theme CSS
        const owlCarouselThemeCSS = document.createElement('link');
        owlCarouselThemeCSS.rel = 'stylesheet';
        owlCarouselThemeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css';
        document.head.appendChild(owlCarouselThemeCSS);

        // Load Owl Carousel JS
        const owlCarouselScript = document.createElement('script');
        owlCarouselScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
        owlCarouselScript.async = true;
        document.body.appendChild(owlCarouselScript);

        // Wait for Owl Carousel to load
        await new Promise(resolve => {
          owlCarouselScript.onload = resolve;
        });
      }

      // Initialize Owl Carousel
      const $ = window.jQuery;
      $(owlCarouselRef.current).owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 3
          }
        }
      });
    };

    loadScripts();

    // Cleanup function
    return () => {
      const $ = window.jQuery;
      if ($ && $.fn.owlCarousel && owlCarouselRef.current) {
        try {
          $(owlCarouselRef.current).owlCarousel('destroy');
        } catch (e) {
          console.error('Error destroying Owl Carousel:', e);
        }
      }
    };
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="theme-title mb-2">SOME NICE THINGS DOGS HAVE SAID ABOUT US</h2>
          <p className="cta-area testimonial-data">
            There's no better feeling than when a dog likes you. And since 2012,
            we've made over 6,000,000 dogs like us. See what the pups in our
            pack are barking about.
          </p>
        </div>
      </div>

      <div className="owl-carousel owl-theme" ref={owlCarouselRef}>
        {/* First Testimonial */}
        <div className="item">
          <div className="card h-100 testimonial-card" style={{backgroundColor: 'var(--theme-color-dark)'}}>
            <img className="obj_fit" src={imageOne} alt="" />
            {/* <div className="card-body d-flex flex-column">
              <div className="mb-3">
              </div>
              <p className="card-text flex-grow-1 text-white">
                "This product has completely transformed our business. The
                customer service team is always responsive and helpful. Highly
                recommend!"
              </p>
              <div className="d-flex align-items-center mt-3">
                <div className="">
                  <small style={{color: '#01aed8'}} className="">Stella Julia</small>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Second Testimonial */}
        <div className="item">
          <div className="card h-100 testimonial-card" style={{backgroundColor: 'var(--theme-color-sky)'}}>
            <img className="obj_fit" src={imageTwo} alt="" />
            {/* <div className="card-body d-flex flex-column">
              <div className="mb-3">
              </div>
              <p className="card-text flex-grow-1 text-white">
                "We've been using this service for over a year now and the
                results speak for themselves. Our productivity has increased by
                40%."
              </p>
              <div className="d-flex align-items-center mt-3">
                <div className="">
                  <small className="text-muted">Cashew Maddie</small>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Third Testimonial */}
        <div className="item">
          <div className="card h-100 testimonial-card" style={{backgroundColor: 'var(--theme-color-dark)'}}>
            <img className="obj_fit" src={imageThree} alt="" />
            {/* <div className="card-body d-flex flex-column">
              <div className="mb-3">
              </div>
              <p className="card-text flex-grow-1 text-white">
                "The implementation was smooth and the features are exactly what
                we needed. This solution has streamlined our entire workflow."
              </p>
              <div className="d-flex align-items-center mt-3">
                <div className="">
                  <small style={{color: '#01aed8'}} className="">Macaroni Briana</small>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        
        {/* Fourth Testimonial */}
        <div className="item">
          <div className="card h-100 testimonial-card" style={{backgroundColor: 'var(--theme-color-sky)'}}>
            <img className="obj_fit" src={imageFour} alt="" />
            {/* <div className="card-body d-flex flex-column">
              <div className="mb-3">
              </div>
              <p className="card-text flex-grow-1 text-white">
                "I've never seen my dog so excited about anything. Every month
                she gets so happy when she sees the BarkBox arrive. Best decision ever!"
              </p>
              <div className="d-flex align-items-center mt-3">
                <div className="">
                  <small className="text-muted">Cooper Jasmine</small>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        
        {/* Fifth Testimonial */}
        <div className="item">
          <div className="card h-100 testimonial-card" style={{backgroundColor: 'var(--theme-color-dark)'}}>
            <img className="obj_fit" src={imageFive} alt="" />
            {/* <div className="card-body d-flex flex-column">
              <div className="mb-3">
              </div>
              <p className="card-text flex-grow-1 text-white">
                "The quality of the toys is excellent. My dog is a heavy chewer
                and these toys have lasted much longer than anything else we've tried."
              </p>
              <div className="d-flex align-items-center mt-3">
                <div className="">
                  <small style={{color: '#01aed8'}} className="">Rocky David</small>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="cta-area">
        <button className="theme_btn">
          Get BarkBox
        </button>
      </div>

      <style>
        {`
          .owl-nav {
            position: absolute;
            top: 50%;
            width: 100%;
            transform: translateY(-50%);
          }
          
          .owl-prev, .owl-next {
            position: absolute;
            background: rgba(255, 255, 255, 0.7) !important;
            width: 40px;
            height: 40px;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
          
          .owl-prev {
            left: -20px;
          }
          
          .owl-next {
            right: -20px;
          }
          
          .owl-dots {
            margin-top: 20px !important;
          }
          
          .owl-dot.active span {
            background-color: var(--theme-color-sky) !important;
          }
          
          .testimonial-card {
            margin: 10px;
          }
        `}
      </style>
    </div>
  );
}

export default Testimonial;