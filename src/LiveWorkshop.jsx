import React, { useState } from "react";

export default function LiveWorkshop() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "auto",
        paddingBottom: "40px",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        src="/images/paint_bg.mp4"
        type="video/mp4"
      />

      {/* Content overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#000",
          padding: "20px",
          display: "flex",
          gap: "30px",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Workshop Info Box */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            maxWidth: "fit-content",
          }}
        >
          <img
            src="/images/canvas.jpg"
            alt="Profile"
            style={{
              width: "200px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              Canvas Painting Workshop
            </p>
            <p>Rs 349/- Per pass</p>
            <p>on 17th August from 11AM - 2PM</p>
            <p>At Belloso Cafe, Uppal, Hyderabad</p>
            <button
              style={{
                backgroundColor: "grey",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                height: "fit-content",
                alignSelf: "start",
              }}
              onClick={() => setShowForm(true)}
            >
              Buy Pass
            </button>
          </div>
        </div>

        {/* Show Google Form when button is clicked */}
        {showForm && (
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "20px",
              borderRadius: "10px",
              flex: "1 1 400px",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Pass Booking Form</h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSemlu67aO5VPCwwDDaePXS4iwmMPApnclPV1YRzhRTBlvaDXw/viewform?embedded=true"
              style={{
                width: "100%",
                height: "1000px",
                border: "none",
              }}
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Pass Buying Form"
            >
              Loading…
            </iframe>
          </div>
        )}
      </div>
    </div>
  );
}
