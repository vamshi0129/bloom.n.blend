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
          <img
            src="/images/Dance.png"
            alt="Dance Workshop"
            className="workshop-img"
          />

          <div className="details">
            <p className="title">Dance Workshop</p>
            <p>on <strong>14th September</strong></p>
            <p>At ETSB Dance Studio , Himayatnagar , Hyderabad</p>
            <p>Slot 1 : 11AM - 12:30PM </p>
            <p>Slot 2 :  2PM - 3:30PM</p>

            <button className="btn" onClick={() => setShowForm(true)}>
              Buy Pass
            </button>
          </div>

          {showForm && (
            <div className="form-container">
              <h2>Pass Booking Form</h2>
              <div className="iframe-wrapper">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScEpDBy1tMTHlLNSJ3vW68C0B-Pyyg27TV6Bzk649aqes-KTA/viewform?embedded=true"
                  title="Pass Booking Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
}
