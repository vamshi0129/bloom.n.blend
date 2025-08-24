import React from "react";

export default function UpcomingWorkshop() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "auto",
        paddingBottom: "40px",
      }}
    >
      {/* Background Video with Reduced Opacity */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          opacity: 0.6,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        src="/images/live_bg.mp4"
        type="video/mp4"
      />

      {/* Centered Workshop Card */}
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
            src="/images/canvas.jpg"
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
              Canvas Painting Workshop
            </p>
            <p style={{ margin: 0 }}>Held on 17th August</p>
            <p style={{ margin: 0 }}>At Belloso Cafe, Uppal, Hyderabad</p>
            {/* <button
              style={{
                backgroundColor: "grey",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                alignSelf: "flex-start",
              }}
              onClick={() => window.open("https://photos.app.goo.gl/F2bBN8nfvYQqk8e6A", "_blank")}
            >
              Click for Photos !
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
