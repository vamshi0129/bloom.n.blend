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
            src="/images/Dance.png"
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
              Dance Workshop
            </p>
            <p style={{ margin: 0 }}>on <strong>14th September</strong></p>
            <p style={{ margin: 0 }}>At ETSB Dance Studio , Himayatnagar , Hyderabad</p>
            <p style={{ margin: 0 }}>Slot 1 : 11AM - 12:30PM </p>
            <p style={{ margin: 0 }}>Slot 2 :  2PM - 3:30PM</p>

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
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScEpDBy1tMTHlLNSJ3vW68C0B-Pyyg27TV6Bzk649aqes-KTA/viewform?embedded=true" 
            width="640" 
            height="2361" 
            frameborder="0"
            marginheight="0" 
            marginwidth="0"
            >Loading…</iframe>
          </div>
        )}
        </div>
      </div>
        
      </div>
    </div>
  );
}
