import { useState, forwardRef } from "react";
import { motion, AnimatePresence, usePresenceData, wrap } from "framer-motion";

const testimonials = [
  
  {
    avatar: "/xsnowwyx.png",
    name: "@Miorsi",
    text: "Всем привет! Крайне советую ",
  },
  {
    avatar: "/usercola149.jpg",
    name: "@Cola149",
    text: "Спасибо за сайт, сайт отличный. Анимации вкусные а самое главное все поправки круто сделал)\nСайт имба ваще, спасибо!",
  },
];

export default function Revievs() {
  const [selected, setSelected] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newDir) => {
    const newIndex = wrap(0, testimonials.length, selected + newDir);
    setDirection(newDir);
    setSelected(newIndex);
  };

  const data = testimonials[selected];

  return (
    <motion.section className="flex justify-center px-[1rem] lg:px-[4rem] mb-8 lg:mb-50 relative z-2" initial={{ opacity: 0 }} whileInView={{opacity: 1, transition: { duration: 0.8, delay: 0.2 } }} viewport={{ once: true }}>
      <div className="py-30 flex justify-center items-center flex-col max-w-[1440px]">
        <div className="text-center mb-8">
            <h2 className="font-bold text-3xl md:text-4xl mb-3">Отзывы моих клиентов</h2>
        </div>
        
        <AnimatePresence mode="popLayout" custom={direction}>
          <Slide key={selected} data={data} />
        </AnimatePresence>

        <div className="flex justify-center mt-4">
          <div className="flex gap-4 p-1 card-g rounded-full">
            <motion.button
            onClick={() => paginate(-1)}
            className="w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-200 flex items-center justify-center cursor-pointer"
            whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left text-black"><path d="m15 18-6-6 6-6"/></svg>
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-200 flex items-center justify-center cursor-pointer"
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right text-black"><path d="m9 18 6-6-6-6"/></svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

const Slide = forwardRef(function Slide({ data }, ref) {
  const direction = usePresenceData();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 60 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.1,
          type: "spring",
          bounce: 0.3,
          duration: 0.4,
        },
      }}
      exit={{ opacity: 0, x: direction * -60 }}
      whileHover={{scale: 1.02, border: "1px solid #9800eb", transition: { duration: 0.3 }}}
      className="card-g h-100 lg:h-64 rounded-3xl shadow-lg p-6 text-center lg:min-w-[640px] max-w-[800px] overflow-y-auto"
    >
      <div className="flex items-center justify-start gap-4 mb-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-12 h-12 rounded-full border-1 border-white"
        />
        <div className="text-left">
          <h3 className="text-lg text-white font-semibold">{data.name}</h3>
        </div>
      </div>
      <p className="text-left text-gray-300 mb-6 whitespace-pre-line">{data.text}</p>
    </motion.div>
  );
});