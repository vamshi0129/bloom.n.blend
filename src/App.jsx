import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import Footer from "./Footer";

// Pages
import LiveWorkshop from "./LiveWorkshop";
import UpcomingWorkshop from "./PreviousWorkshops";
import RequestWorkshop from "./RequestWorkshop";

// Transition HOC
import trans from "./trans";

// Wrap pages
const LiveWithTrans = trans(LiveWorkshop);
const UpcomingWithTrans = trans(UpcomingWorkshop);
const RequestWithTrans = trans(RequestWorkshop);

function Home() {
  return (
    <>
      <div className="head">
        <div className="logo-title">
          <img
            src="/images/logo_bg.png"
            className="logo"
            alt="Logo"
          />
          <span className="title">Bloom & Blend</span>
        </div>

        <h5>Where passions bloom & ideas blend</h5>
        <h5>
          Welcome to a world of creativity — art, craft, and baking
          workshops designed for YOU!
        </h5>
      

      <div className="bg-section">
        <Link to="/live" className="container1">
          <h3>LIVE WORKSHOP</h3>
          <p>
            Join our live sessions and create magic together — hands‑on,
            interactive, and fun!
          </p>
        </Link>

        <Link to="/upcoming" className="container2">
          <h3>Previous WORKSHOP</h3>
          <p>
            Have a look at our Previous workshops !
          </p>
        </Link>

        <Link to="/request" className="container3">
          <h3>REQUEST A WORKSHOP</h3>
          <p>
            Have an idea? Let us design a workshop just for you and your friends.
          </p>
        </Link>
      </div>
      </div>
    </>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<LiveWithTrans />} />
          <Route path="/upcoming" element={<UpcomingWithTrans />} />
          <Route path="/request" element={<RequestWithTrans />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
