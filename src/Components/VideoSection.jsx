
function VideoSection() {
  return (
    <section className="cta-section">
      <div className="container-fluid p-0">
        <div className="cta-area">
          <h2 className="theme-title">THE LEADER IN DOG TOY SAFETY</h2>
          <p>
            Did you know there are no safety standards for dog toys? Don’t
            worry, we’re fixing that. We put every Bhau toy to the test in our
            state-of-the-art lab to ensure it meets the highest safety
            requirements.
          </p>
          <button className="theme_btn" href="/toy-selector">Get BhauBox</button>

          {/* embedded YouTube video */}
          <div className="mt-5">
            <iframe
              width=""
              height="500"
              src="https://www.youtube.com/embed/FZsEKt2zbw4?si=CchnyQe0PtPR5dqU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
