import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>About Us</h3>
        <p>
          We bring your creativity to life through interactive workshops in art,
          craft, and baking. Join us to learn, create, and share your passion!
        </p>

        <h3>Contact Us</h3>
        <a id="insta" href="https://www.instagram.com/bloom.n.blend?utm_source=ig_web_button_share_sheet&igsh=cTB0NnlvM29yenpi" target="_blank" 
   rel="noopener noreferrer">
        Follow us on Instagram
        </a>
        <p>
          Email:{" "}
          <a href="mailto:bloom.n.blend@gmail.com">
            bloom.n.blend@gmail.com
          </a>
        </p>
        <p>
          Mobile: <a href="tel:+916300526806">+91 63005 26806</a>
        </p>
      </div>
    </footer>
  );
}
