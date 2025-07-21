import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router"
import { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";


function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Prevent multiple initializations
    if (!window._scrollSmoother) {
      window._scrollSmoother = ScrollSmoother.create({
        smooth: 1,
        effects: true,
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
      });
    }
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <div id="smooth-wrapper">
              <motion.div {...pageVariants} id='smooth-content'>
                <Home />
                <Footer />
              </motion.div>
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 400);
    }, [pathname]);

    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
    </Router>
  )
}

export default App
