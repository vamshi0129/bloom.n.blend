import React from "react";

export default function RequestWorkshop() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "auto",
        paddingBottom: "40px",
        color: "#000",
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
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        src="/images/live_bg2.mp4"
        type="video/mp4"
      />

      {/* Page content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "40px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
            Request a Workshop
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Have an idea? Let us design a workshop just for you and your friends.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          {/* Left Column — Google Form Embed */}
          <div
            style={{
              flex: "1 1 400px",
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Custom Workshop Request</h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdyLhr9NLsn3hCQ2khh93f1QOlEta6mxmi1ajbLqeo3oJ4nZg/viewform?embedded=true"
              style={{
                width: "100%",
                height: "1493px",
                border: "none",
              }}
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Request Workshop Form"
            >
              Loading…
            </iframe>
          </div>

          {/* Right: Info Section */}
          <div
            style={{
              flex: "1 1 350px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={cardStyle}>
              <h3>What We Can Create Together</h3>
              <ul>
                <li>Private Group Sessions for birthdays or team building</li>
                <li>Custom Skill Workshops for your group's experience level</li>
                <li>Themed Experiences for special occasions</li>
                <li>Corporate creative events</li>
                <li>Family Workshops</li>
                <li>Advanced techniques for experienced creators</li>
              </ul>
            </div>

            <div style={cardStyle}>
              <h3>Process & Timeline</h3>
              <ol>
                <li>
                  <strong>Initial Consultation:</strong> Discuss your vision
                  and group size.
                </li>
                <li>
                  <strong>Custom Proposal:</strong> Get a detailed plan.
                </li>
                <li>
                  <strong>Confirmation & Scheduling:</strong> Reserve your
                  date.
                </li>
                <li>
                  <strong>Workshop Day:</strong> Enjoy your creative
                  experience!
                </li>
              </ol>
            </div>

            <div style={cardStyle}>
              <h3>Pricing Information</h3>
              <p>Cost depends on group size, materials, and location.</p>
              <p>
                <strong>Starting from ₹6,200</strong> (~₹ 349 per person). Exact
                quote after consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusing your card style
const cardStyle = {
  backgroundColor: "rgba(255,255,255,0.9)",
  borderRadius: "10px",
  padding: "20px",
  lineHeight: "1.6",
};
  