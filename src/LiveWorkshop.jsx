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
          alignContent:"center",
          flexWrap: "wrap",
        }}
      >
        <h1>Stay tuned for updates ! </h1>
        
      </div>
    </div>
  );
}
