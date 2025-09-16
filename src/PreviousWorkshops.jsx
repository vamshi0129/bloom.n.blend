import React from "react";

export default function PrevoiusWorkshops() {
  const overlayStyle = {
    position: "relative",
    zIndex: 1,
    color: "#000",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    minHeight: "100vh"
  };
  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: "24px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "24px",
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
    maxWidth: "900px",
    width: "100%",
    flexWrap: "wrap",
    margin: "10px"
  };
  const imgStyle = {
    width: "180px",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
  };
  const detailsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    flex: 1
  };
  const titleStyle = {
    fontWeight: "bold",
    fontSize: "1.3em",
    margin: 0
  };
  const btnStyle = {
    backgroundColor: "grey",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    alignSelf: "start"
  };

  const bgVideoStyle = {
    position: "absolute",
    opacity: 0.6,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "auto", paddingBottom: "40px" }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={bgVideoStyle}
        src="/images/live_bg.mp4"
        type="video/mp4"
      />
      <div style={overlayStyle}>
        {/* Canvas Painting Workshop */}
        <div style={cardStyle}>
          <img src="/images/canvas.jpg" alt="Canvas painting" style={imgStyle} />
          <div style={detailsStyle}>
            <p style={titleStyle}>Canvas Painting Workshop</p>
            <p>Held on 17th August</p>
            <p>At Belloso Cafe, Uppal, Hyderabad</p>
            <button
              style={btnStyle}
              onClick={() => window.open("https://photos.app.goo.gl/Z1btqxdnmHQqxUN68", "_blank")}
            >
              Click for Photos..!
            </button>
          </div>
        </div>

        {/* Tote Bag Painting Workshop */}
        <div style={cardStyle}>
          <img src="/images/tote_bag.png" alt="Tote Bag painting" style={imgStyle} />
          <div style={detailsStyle}>
            <p style={titleStyle}>Tote Bag Painting Workshop</p>
            <p>on <strong>31th August</strong></p>
            <p>At Paper Crown Cafe, Jubilee Hills, Hyderabad</p>
            <p>11AM - 2PM</p>
            <button
              style={btnStyle}
              onClick={() => window.open("https://photos.app.goo.gl/n5xYn7rKvToSEobW6", "_blank")}
            >
              Click for Photos..!
            </button>
          </div>
        </div>

        {/* Dance Workshop */}
        <div style={cardStyle}>
          <img src="/images/Dance.png" alt="Dance Workshop" style={imgStyle} />
          <div style={detailsStyle}>
            <p style={titleStyle}>Dance Workshop</p>
            <p>on 14th September</p>
            <p>At ETSB Dance Studio , Himayatnagar , Hyderabad</p>
            <button
              style={btnStyle}
              onClick={() => window.open("https://photos.app.goo.gl/WUSQA3Aj7xK3if1t7", "_blank")}
            >
              Click for photos..!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
