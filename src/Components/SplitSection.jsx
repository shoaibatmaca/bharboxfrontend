import React from "react";
import imageOne from '../assets/image-1.png'
import imageTwo from '../assets/image-2.png'
import imageThree from '../assets/image-3.png'

function SplitSection() {
  return (
    <section className="split-section-container">
    {/* Section 01 */}
    <div className="container p-0">
      <div className="row align-items-center" style={{ backgroundColor: '#1a4e8a' }}>
        <div className="col-lg-6  order-1 p-lg-5 p-4">
          <div className="split-text-section">
            <h2 className="theme-title text-white number">01</h2>
            <h2 className="theme-title text-white">
              Tell us about your best bud
            </h2>
            <p className="text-white p-20">
              We build a box that's just as unique as your pup — from
              allergy-friendly snacks to toys designed for their playstyle.
            </p>
          </div>
        </div>
        <div className="col-lg-6 p-0 order-2">
          <div className="split-text-section">
            <div className="image-1">
              <img className="obj_fit" src={imageOne} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {/* Section 02 - ALTERNATES on LG+ */}
    <div className="container p-0">
      <div className="row align-items-center" style={{ backgroundColor: '#1a4e8a' }}>
        {/* Image First on lg+, Second on mobile */}
        <div className="col-lg-6 p-0 order-2 order-lg-1">
          <div className="split-text-section">
            <div className="image-1">
              <img className="obj_fit" src={imageTwo} alt="" />
            </div>
          </div>
        </div>
        {/* Text Second on lg+, First on mobile */}
        <div className="col-lg-6  order-1 order-lg-2 p-lg-5 p-4">
          <div className="split-text-section">
            <h2 className="theme-title text-white number">02</h2>
            <h2 className="theme-title text-white">
              Tell us about your best bud
            </h2>
            <p className="text-white p-20">
              We build a box that's just as unique as your pup — from
              allergy-friendly snacks to toys designed for their playstyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  
    {/* Section 03 */}
    <div className="container p-0">
      <div className="row align-items-center" style={{ backgroundColor: '#1a4e8a' }}>
        <div className="col-lg-6  order-1 p-lg-5 p-4">
          <div className="split-text-section">
            <h2 className="theme-title text-white number">03</h2>
            <h2 className="theme-title text-white">
              Tell us about your best bud
            </h2>
            <p className="text-white p-20">
              We build a box that's just as unique as your pup — from
              allergy-friendly snacks to toys designed for their playstyle.
            </p>
          </div>
        </div>
        <div className="col-lg-6 p-0 order-2">
          <div className="split-text-section">
            <div className="image-1">
              <img className="obj_fit" src={imageThree} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  
  );
}

export default SplitSection;
