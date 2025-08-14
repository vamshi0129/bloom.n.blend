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
        src="/images/live_bg.mp4"
        type="video/mp4"
      />

      <div
        style={{
          justifyContent:"center",
          alignItems: "center",
          fontSize:"150%",
          padding: "300px 20px",
          color: "black",
          textAlign: "center",
        }}
      >
        <h1>Upcoming Workshop Details</h1>
        <p>Stay tuned! We will update this section with details of our next event.</p>
      </div>
    </div>
  );
}
