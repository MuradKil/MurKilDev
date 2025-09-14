import { useState } from "react";
import { motion } from "framer-motion";

const scrollToWorks = () => {
  const worksSection = document.getElementById("works");
  if (worksSection && window._scrollSmoother) {
    window._scrollSmoother.scrollTo("#works", true);
  }
};

const scrollToTop = () => {
  if (window._scrollSmoother) {
    window._scrollSmoother.scrollTo(0, true);
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (  
    <div className="z-40 w-screen h-[80px] md:h-[96px] fixed flex justify-center items-center">
      <motion.nav className="w-[98vw] md:w-[50vw] max-w-[400px] md:max-w-[480px] lg:max-w-[480px] lg:min-w-[500px] bg-gray-600/30 border border-gray-300/5 
      backdrop-blur-[4px] fixed flex h-[60px] rounded-full items-center justify-between px-8 nav-shadow" initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "backInOut" } }} exit={{ opacity: 0, y: -60, transition: { duration: 0.5 } }}>
        <h2 className="font-bold text-2xl">MurKinDev</h2>

        <ul className="w-[38%] hidden md:flex items-center justify-around">
          <button
            type="button"
            onClick={scrollToTop}
            className="font-medium"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Главная
          </button>
          <button
            type="button"
            onClick={scrollToWorks}
            className="font-medium"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Работы
          </button>
        </ul>

        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="relative w-6 h-5">
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              className="absolute w-7 h-[3px] bg-white"
            />
            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              className="absolute w-7 h-[3px] bg-white top-2"
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              className="absolute w-7 h-[3px] bg-white bottom-0"
            />
          </div>
        </div>
      </motion.nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, y: 0, backdropFilter: "blur(12px)" }}
          exit={{ opacity: 0, y: -20, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.4 }}
          className="absolute top-[70px] max-w-[400px] rounded-4xl w-[98vw] flex justify-center lg:hidden"
        >
          <motion.div
            className="bg-gray-600/30 border border-gray-300/20 w-[98vw] rounded-4xl p-4 text-center flex flex-col gap-3"
          >
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setTimeout(scrollToTop, 100);
              }}
              className="pb-2 font-medium border-b border-gray-300/20"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Главная
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setTimeout(scrollToWorks, 100);
              }}
              className="font-medium"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Работы
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
