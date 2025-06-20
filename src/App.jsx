import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router"
import { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Works from "./components/Works";
import Footer from "./components/Footer";

function AnimatedRoutes() {
  const location = useLocation();

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
            <motion.div {...pageVariants}>
              <Home />
              <Footer />
            </motion.div>
          }
        />
        <Route
          path="/works"
          element={
            <motion.div {...pageVariants}>
              <Works />
              <Footer />
            </motion.div>
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
