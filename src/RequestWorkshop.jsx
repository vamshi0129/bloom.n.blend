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
          <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
            Have an idea? Let us design a workshop just for you and your friends.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Left: Form */}
          <div
            style={{
              flex: "1 1 400px",
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Custom Workshop Request</h2>

            <label>
              Your Name:
              <input
                type="text"
                placeholder="Enter your full name"
                style={inputStyle}
              />
            </label>

            <label>
              Email Address:
              <input
                type="email"
                placeholder="your@email.com"
                style={inputStyle}
              />
            </label>

            <label>
              Phone Number:
              <input
                type="tel"
                placeholder="+91-"
                style={inputStyle}
              />
            </label>

            <label>
              Workshop Category:
              <select style={inputStyle}>
                <option value="">Select a category</option>
                <option value="pottery">Pottery &amp; Ceramics</option>
                <option value="baking">Baking &amp; Pastry</option>
                <option value="painting">Painting &amp; Art</option>
                <option value="floral">Floral Design</option>
                <option value="crafts">Crafts &amp; DIY</option>
                <option value="mixed">Mixed Media</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label>
              Number of Participants:
              <select style={inputStyle}>
                <option value="">How many people?</option>
                <option value="2-4">2-4 people</option>
                <option value="5-8">5-8 people</option>
                <option value="9-12">9-12 people</option>
                <option value="13-16">13-16 people</option>
                <option value="17+">17+ people</option>
              </select>
            </label>

            <label>
              Workshop Description:
              <textarea
                placeholder="Tell us about your vision..."
                style={{ ...inputStyle, minHeight: "120px" }}
              ></textarea>
            </label>

            <label>
              Preferred Timeline:
              <textarea
                placeholder="When would you like to schedule this?"
                style={{ ...inputStyle, minHeight: "80px" }}
              ></textarea>
            </label>

            <button style={buttonStyle}>Submit Workshop Request</button>
          </div>

          {/* Right: Info Section */}
          <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: "20px" }}>
            
            <div style={cardStyle}>
              <h3>What We Can Create Together</h3>
              <ul>
                <li> Private Group Sessions for birthdays or team building</li>
                <li> Custom Skill Workshops for your group's experience level</li>
                <li> Themed Experiences for special occasions</li>
                <li> Corporate creative events</li>
                <li> Family Workshops</li>
                <li> Advanced techniques for experienced creators</li>
              </ul>
            </div>

            <div style={cardStyle}>
              <h3>Process & Timeline</h3>
              <ol>
                <li><strong> Initial Consultation:</strong> Discuss your vision and group size.</li>
                <li><strong> Custom Proposal:</strong> Get a detailed plan.</li>
                <li><strong> Confirmation & Scheduling:</strong> Reserve your date.</li>
                <li><strong> Workshop Day:</strong> Enjoy your creative experience!</li>
              </ol>
            </div>

            <div style={cardStyle}>
              <h3>Pricing Information</h3>
              <p>Cost depends on group size, materials, and location.</p>
              <p><strong>Starting from ₹6,200</strong> (~₹ 349 per person). Exact quote after consultation.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0 16px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const buttonStyle = {
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  padding: "12px",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
  width: "100%",
};

const cardStyle = {
  backgroundColor: "rgba(255,255,255,0.9)",
  borderRadius: "10px",
  padding: "20px",
  lineHeight: "1.6",
};
