import React, { useState } from "react";

export default function LiveWorkshop() {
  const pricePerPass = 349;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    passes: 1,
  });
  const [screenshot, setScreenshot] = useState(null);
  const [showForm, setShowForm] = useState(false); // New state for form visibility

  const upiQRCode = "/images/QR.jpg";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "passes" ? Math.max(1, Math.min(10, Number(value))) : value,
    }));
  };

  const handleFileChange = (e) => {
    setScreenshot(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nPasses: ${
        formData.passes
      }\nTotal Price: Rs ${formData.passes * pricePerPass}\nScreenshot: ${
        screenshot ? screenshot.name : "No file uploaded"
      }`
    );
  };

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
            <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>Canvas Painting Workshop</p>
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
              onClick={() => setShowForm(true)} // Show form on click
            >
              Buy Pass
            </button>
          </div>
        </div>

        {/* Form appears only when Buy Pass is clicked */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "400px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              boxSizing: "border-box",
            }}
          >
            <h2>Buy Pass</h2>

            <label style={{ display: "flex", flexDirection: "column", fontWeight: "bold" }}>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </label>

            <label style={{ display: "flex", flexDirection: "column", fontWeight: "bold" }}>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </label>

            <label style={{ display: "flex", flexDirection: "column", fontWeight: "bold" }}>
              Mobile:
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </label>

            <label style={{ display: "flex", flexDirection: "column", fontWeight: "bold" }}>
              Number of Passes:
              <input
                type="number"
                name="passes"
                min={0}
                max={30}
                value={formData.passes}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </label>

            <p style={{ fontWeight: "bold" }}>
              Total Price: Rs {formData.passes * pricePerPass}
            </p>

            

            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Scan UPI QR Code for Payment
              </p>
              <img
                src={upiQRCode}
                alt="UPI QR Code"
                style={{ width: "150px", height: "150px", objectFit: "contain" }}
              />
            </div>

            <label style={{ display: "flex", flexDirection: "column", fontWeight: "bold" }}>
              Upload Screenshot:
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
                style={{ marginTop: "5px" }}
              />
              {screenshot && <small>Selected file: {screenshot.name}</small>}
            </label>

            <button
              type="submit"
              style={{
                backgroundColor: "grey",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// shared style
const inputStyle = {
  padding: "8px",
  marginTop: "5px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};