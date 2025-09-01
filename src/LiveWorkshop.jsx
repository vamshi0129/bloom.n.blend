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
      <div style={{
        position: "relative",
          zIndex: 1,
          color: "#000",
          padding: "20px",
          display: "flex",
          gap: "30px",
          alignItems:"flex-start",
          justifyContent: "center",
          alignContent:"center",
          flexWrap: "wrap", 
      }}><h1>Stay Tuned for the updates</h1></div>
      {/* Content overlay */}
      {/* <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#000",
          padding: "20px",
          display: "flex",
          gap: "30px",
          alignItems: "flex-start",
          justifyContent: "center",
          alignContent:"center",
          flexWrap: "wrap",
        }}
      >
        <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            padding: "24px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src="/images/tote_bag.png"
            alt="Canvas painting"
            style={{
              width: "180px",
              height: "250px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontWeight: "bold", fontSize: "1.3em", margin: 0 }}>
              Tote Bag Painting Workshop
            </p>
            <p style={{ margin: 0 }}>on <strong>31th August</strong></p>
            <p style={{ margin: 0 }}>At Paper Crown Cafe, Jubliee Hills, Hyderabad</p>
            <p style={{ margin: 0 }}>11AM - 2PM</p>

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
            
              src="https://docs.google.com/forms/d/e/1FAIpQLSewl9lM-ezvjmUkB1OSP9_bOu44odT8oLDE030NBROKn_c5Fg/viewform?embedded=true"
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
        
      </div> */}
    </div>
  );
}
