import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-about">
        <h3>About Us</h3>
        <p>
          We bring your creativity to life through interactive workshops in art,
          craft, and baking. Join us to learn, create, and share your passion!
        </p>
      </div>

      <div className="footer-contact">
        <h3>Contact Us</h3>
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
