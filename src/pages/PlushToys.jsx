import React, { useState } from "react";
import Toy1 from "../assets/Plush-toys1.webp";
import Toy2 from "../assets/plush-toy2.webp";
import { useNavigate } from "react-router-dom";
import { useSiteData } from "../context/SiteDataContext"; // ✅ context import

function PlushToys() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const { updateSiteData } = useSiteData(); // ✅ context usage

  const handleSelect = (type) => {
    setSelected(type);
  };

  return (
    <>
      <section className="plush-toys">
        <div className="like-toys">
          <h1 className="theme-title">What toys does your dog like best?</h1>

          <div className="toy-options">
            <div
              className={`toy-card-selector plush-toys-card ${
                selected === "plush" ? "selected" : ""
              }`}
              onClick={() => handleSelect("plush")}
            >
              <img src={Toy1} alt="Plush Toys" />
              <div>
                <h3 className="theme-title">Plush Toys</h3>
                <p>Soft materials</p>
              </div>
            </div>

            <div
              className={`toy-card-selector plush-toys-card ${
                selected === "durable" ? "selected" : ""
              }`}
              onClick={() => handleSelect("durable")}
            >
              <img src={Toy2} alt="Durable Chew Toys" />
              <div>
                <h3 className="theme-title">Durable Chew Toys</h3>
                <p>Tough materials</p>
              </div>
            </div>
          </div>

          <button
            className="continue-btn theme_btn mx-auto"
            disabled={!selected}
            onClick={() => {
              updateSiteData("toys", { plushToy: selected }); // ✅ context update
              navigate("/identity-form");
            }}
          >
            CONTINUE
          </button>
        </div>
      </section>
    </>
  );
}

export default PlushToys;
