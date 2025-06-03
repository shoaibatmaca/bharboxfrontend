import React from "react";
import chatImg from '../assets/chat-sec-img.png'

function ChatUs() {
  return (
    <section className="cta-section chat-area" style={{backgroundColor: '#eef2f3'}}>
      <div class="container-fluid p-0">
        <div class="cta-area pb-0">
          <h2 className="theme-title">OUR PACK HAS YOUR BACK</h2>
          <p>
            If your pup isn't 100% happy, then we'll work with you to make it
            right. In case it wasn't obvious, we're kiiind of obsessed with
            dogs.
          </p>
          <button className="theme_btn">Chat With Us Now</button>

         
        </div>
        <div class="bottom_chat_img">
            <img className="obj_fit" src={chatImg} alt="" />
          </div>
      </div>
    </section>
  );
}

export default ChatUs;
