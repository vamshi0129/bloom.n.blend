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
      <h1>Stay tuned for the updates ! </h1>
      {/* <div className="overlay">
        <div className="card">
          <video 
            autoPlay
            loop
            muted
            playsInline
            src="/images/diya_poster.mp4"
            alt="Dance Workshop"
            className="workshop-img"
          />

          <div className="details">
            <p className="title">Diya Making Workshop</p>
            <p>on <strong>19th October</strong></p>
            <p>At Paper Crown Cafe , Banjara Hills , Hyderabad</p>
            <p>@11AM </p>

            <button className="btn" onClick={() => setShowForm(true)}>
              Buy Pass
            </button>
          </div>

          {showForm && (
            <div className="form-container">
              <h2>Pass Booking Form</h2>
              <div className="iframe-wrapper">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSelIk0iW_jnL312fOUTs3LJYNpwtw3NXhEMHTLHu9Jrb-Punw/viewform?embedded=true" width="640" height="2137" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
}
