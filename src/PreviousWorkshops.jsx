import React, { useState } from "react";

export default function UpcomingWorkshop() {
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
      {/* Background Video */}
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

      {/* Workshops Container */}
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
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Canvas Painting Workshop */}
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
            <button
              style={{
                backgroundColor: "grey",
                color: "#000",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                height: "fit-content",
                alignSelf: "start",
              }}
              onClick={() =>window.open("https://photos.app.goo.gl/Z1btqxdnmHQqxUN68", "_blank")}
            >
              Click for Photos..!
            </button>
          </div>
        </div>

        {/* Tote Bag Painting Workshop */}
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
            alt="Tote Bag painting"
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
            <p style={{ margin: 0 }}>
              on <strong>31th August</strong>
            </p>
            <p style={{ margin: 0 }}>
              At Paper Crown Cafe, Jubliee Hills, Hyderabad
            </p>
            <p style={{ margin: 0 }}>11AM - 2PM</p>

            <button
              style={{
                backgroundColor: "grey",
                color: "#000",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                height: "fit-content",
                alignSelf: "start",
              }}
              onClick={() =>window.open("https://photos.app.goo.gl/n5xYn7rKvToSEobW6", "_blank")}
            >
              Click for Photos..!
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
}
