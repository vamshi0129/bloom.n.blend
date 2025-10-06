import React, { useState } from "react";
import "./LiveWorkshop.css"; // <-- import the CSS file

export default function LiveWorkshop() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="page">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
        src="/images/paint_bg.mp4"
        type="video/mp4"
      />

      {/* Content overlay */}
      {/* <h1>Stay tuned for the updates ! </h1> */}
      <div className="overlay">
        <div className="card">
          <img
            src="/images/tissue.jpg"
            alt="Dance Workshop"
            className="workshop-img"
          />

          <div className="details">
            <p className="title">Tissue Art Workshop</p>
            <p>on <strong>12th October</strong></p>
            <p>At Belloso Cafe , Uppal, Hyderabad</p>
            <p>@11AM </p>

            <button className="btn" onClick={() => setShowForm(true)}>
              Buy Pass
            </button>
          </div>

          {showForm && (
            <div className="form-container">
              <h2>Pass Booking Form</h2>
              <div className="iframe-wrapper">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8be_jpUuoruslpgnGBo5RhspXBY1skd56mfUcwnueutb8-Q/viewform?embedded=true" width="640" height="2137" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
