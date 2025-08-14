import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import Footer from "./Footer";

// Pages
import LiveWorkshop from "./LiveWorkshop";
import UpcomingWorkshop from "./UpcomingWorkshop";
import RequestWorkshop from "./RequestWorkshop"; // now points to your new form UI


// Transition HOC
import trans from "./trans";

// Wrap pages with transition effect
const LiveWithTrans = trans(LiveWorkshop);
const UpcomingWithTrans = trans(UpcomingWorkshop);
const RequestWithTrans = trans(RequestWorkshop);

// Home page with 3 containers
function Home() {
  return (
    <>
      <div className="head">
        <img
          src="/images/logo.jpg"
          className="logo"
          alt="Logo"
          style={{
            width: "10%",
            height: "auto",
            display: "block",
            alignContent: "center",
          }}
        />
        <h5>Where passions bloom & ideas blend</h5>
        <h5>
          Welcome to a world of creativity — art, craft, and baking workshops
          designed for YOU!
        </h5>
      </div>

      <div className="bg-section">
        <Link to="/live" className="container1">
          <h3>LIVE WORKSHOP</h3>
          <p>
            Join our live sessions and create magic together — hands-on,
            interactive, and fun!
          </p>
        </Link>

        <Link to="/upcoming" className="container2">
          <h3>UPCOMING WORKSHOP</h3>
          <p>
            Stay tuned for our next creative journey — register in advance to
            secure your spot.
          </p>
        </Link>

        <Link to="/request" className="container3">
          <h3>REQUEST A WORKSHOP</h3>
          <p>
            Have an idea? Let us design a workshop just for you and your
            friends.
          </p>
        </Link>
      </div>
    </>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* AnimatePresence enables Framer Motion page transition animations */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<LiveWithTrans />} />
          <Route path="/upcoming" element={<UpcomingWithTrans />} />
          <Route path="/request" element={<RequestWithTrans />} />
        </Routes>
      </AnimatePresence>

      {/* Footer always visible */}
      <Footer />
    </>
  );
}
