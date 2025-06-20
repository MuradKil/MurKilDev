import { Link } from "react-router";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Revievs from "./Revievs";

gsap.registerPlugin(ScrollTrigger, SplitText);


const Home = () => {
  useEffect(() => {
    let split;

    const selector = ".about-me__text";
    const startColor = "#353535";
    const targetColor = "#ebebeb";

    function initAnimation() {
      const element = document.querySelector(selector);
      if (!element || typeof SplitText === "undefined") return;

      if (split) {
        split.revert();
      }

      split = new SplitText(selector, { type: "lines" });

      gsap.set(split.lines, { color: startColor });

      split.lines.forEach(line => {
        const splitChars = new SplitText(line, { type: "chars" });

        gsap.set(splitChars.chars, { color: startColor, immediateRender: true });

        gsap.to(splitChars.chars, {
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          },
          color: targetColor,
          duration: 1,
          stagger: {
            each: 0.5,
            from: "start"
          },
          ease: "none"
        });
      });
    }

    function handleResize() {
      ScrollTrigger.getAll().forEach(st => st.kill());
      initAnimation();
    }

    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 200);
    });

    window.addEventListener("load", handleResize);
    handleResize();

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (split) split.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.main className="flex justify-center max-w-[100vw]" exit={{ opacity: 0 }}>
      <Helmet>
        <title>Портфолио • MurKilDev</title>
      </Helmet>
      <div className="w-full max-w-[1440px]">
        <motion.section className="relative flex justify-center items-center h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.6 } }}>
          <div className="absolute w-[100%] max-w-[440px] h-[440px] bg-purple-500/60 rounded-full blur-[170px] -z-10 bottom-20 animate-pulse" style={{ animationDuration: "6s" }} />
          <div className="flex items-center flex-col max-w-[330px] md:max-w-[400px] lg:max-w-[540px]">
            <div className="flex justify-evenly items-center w-full mb-4 lg:px-6">
              <div className="border border-neutral-500 p-1 px-3 lg:px-7 rounded-full">JavaScript</div>
              <div className="border border-neutral-500 p-1 px-3 lg:px-7 rounded-full">React JS</div>
              <div className="border border-neutral-500 p-1 px-3 lg:px-7 rounded-full">Tailwind CSS</div>
            </div>
            <h1 className="font-semibold text-center text-3xl md:text-4xl lg:text-5xl mb-6">Привет! Я — MurKilDev,<br />Frontend-разработчик.</h1>
            <p className="text-[17px] lg:text-[20px] text-center mb-7">Создаю сайты, которые нравятся и клиентам, и пользователям.</p>
            <Link to='/works' className="p-4 px-7 bg-purple-600 rounded-full font-semibold text-[17px] hover:button-g transition-shadow duration-300">Посмотреть работы</Link>
          </div>
        </motion.section>
        <motion.section className="min-h-[700px]">
          <motion.div className="text-center mt-24 mb-26" initial={{ opacity: 0 }} whileInView={{opacity: 1, transition: { duration: 0.8, delay: 0.2 } }} viewport={{ once: true }}>
            <h2 className="font-bold text-3xl md:text-4xl">Обо мне</h2>
          </motion.div>
          <div className="flex justify-center items-center">
            <motion.div className="about-me__text px-[1rem] text-[18px] lg:text-[24px] font-roboto font-light" initial={{ opacity: 0 }} whileInView={{opacity: 1, transition: { duration: 0.8, delay: 0.3 } }} viewport={{ once: true }}>
              <div>Меня зовут Мурад.</div>
              <div className="mb-5">г. Махачкала, Россия.</div>
              <div>Делаю современные и удобные сайты</div>
              <div>на актуальном технологическом стеке.</div>
              <div>Соблюдаю сроки, внимателен к задаче,</div>
              <div>не затягиваю и не обещаю лишнего.</div>
              <div>Стараюсь быть надёжным исполнителем,</div>
              <div>на которого можно положиться.</div>
            </motion.div>
          </div>
        </motion.section>
        <motion.section className="px-[3rem] mb-30" >
          <motion.div className="text-center mt-24 mb-16" initial={{ opacity: 0 }} whileInView={{opacity: 1, transition: { duration: 0.8, delay: 0.2 } }} viewport={{ once: true }}>
            <h2 className="font-bold text-3xl md:text-4xl">Мой стек</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(4,_minmax(200px,_310px))] gap-8 gap-y-14 mb-14">
            <motion.div initial={{ opacity: 0, y: 30 }} whileHover={{scale: 1.01, border: "1px solid #9800eb", transition: { duration: 0.3 }}} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0, ease: "backInOut" } }} viewport={{ once: true }} className="card-g pt-6 rounded-3xl p-5 h-36">
              <div className="flex justify-center items-center mb-5 space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width='28' height='28' viewBox="0 0 16 16"><path fill="#ffffff" d="M2 2v12h12V2zm6 6h1v4a1.003 1.003 0 0 1-1 1H7a1.003 1.003 0 0 1-1-1v-1h1v1h1zm3 0h2v1h-2v1h1a1.003 1.003 0 0 1 1 1v1a1.003 1.003 0 0 1-1 1h-2v-1h2v-1h-1a1.003 1.003 0 0 1-1-1V9a1.003 1.003 0 0 1 1-1"/></svg>
                <h3 className="text-2xl font-semibold">JavaScript</h3>
              </div>
              <p className="text-[16px] lg:text-[18px] text-center text-green-400">• Active</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileHover={{scale: 1.01, border: "1px solid #9800eb", transition: { duration: 0.3 }}} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1, ease: "backInOut" } }} viewport={{ once: true }} className="card-g pt-6 rounded-3xl p-5 h-36">
              <div className="flex justify-center items-center mb-5 space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width='28' height='28' viewBox="0 0 32 32"><path fill="#ffffff" d="M16 12c7.444 0 12 2.59 12 4s-4.556 4-12 4-12-2.59-12-4 4.556-4 12-4m0-2c-7.732 0-14 2.686-14 6s6.268 6 14 6 14-2.686 14-6-6.268-6-14-6"/><path fill="#ffffff" d="M16 14a2 2 0 1 0 2 2 2 2 0 0 0-2-2"/><path fill="#ffffff" d="M10.458 5.507c2.017 0 5.937 3.177 9.006 8.493 3.722 6.447 3.757 11.687 2.536 12.392a.9.9 0 0 1-.457.1c-2.017 0-5.938-3.176-9.007-8.492C8.814 11.553 8.779 6.313 10 5.608a.9.9 0 0 1 .458-.1m-.001-2A2.87 2.87 0 0 0 9 3.875C6.13 5.532 6.938 12.304 10.804 19c3.284 5.69 7.72 9.493 10.74 9.493A2.87 2.87 0 0 0 23 28.124c2.87-1.656 2.062-8.428-1.804-15.124-3.284-5.69-7.72-9.493-10.74-9.493Z"/><path fill="#ffffff" d="M21.543 5.507a.9.9 0 0 1 .457.1c1.221.706 1.186 5.946-2.536 12.393-3.07 5.316-6.99 8.493-9.007 8.493a.9.9 0 0 1-.457-.1C8.779 25.686 8.814 20.446 12.536 14c3.07-5.316 6.99-8.493 9.007-8.493m0-2c-3.02 0-7.455 3.804-10.74 9.493C6.939 19.696 6.13 26.468 9 28.124a2.87 2.87 0 0 0 1.457.369c3.02 0 7.455-3.804 10.74-9.493C25.061 12.304 25.87 5.532 23 3.876a2.87 2.87 0 0 0-1.457-.369"/></svg>
                <h3 className="text-2xl font-semibold">React JS</h3>
              </div>
              <p className="text-[16px] lg:text-[18px] text-center text-green-400">• Active</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileHover={{scale: 1.01, border: "1px solid #9800eb", transition: { duration: 0.3 }}} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2, ease: "backInOut" } }} viewport={{ once: true }} className="card-g pt-6 rounded-3xl p-5 h-36">
              <div className="flex justify-center items-center mb-5 space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width='28' height='28' fill="none" viewBox="0 0 54 33"><g clip-path="url(#prefix__clip0)"><path fill="#e5e5e5" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#e5e5e5" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>
                <h3 className="text-2xl font-semibold">Tailwind CSS</h3>
              </div>
              <p className="text-[16px] lg:text-[18px] text-center text-green-400">• Active</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileHover={{scale: 1.01, border: "1px solid #9800eb", transition: { duration: 0.3 }}} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3, ease: "backInOut" } }} viewport={{ once: true }} className="card-g pt-6 rounded-3xl p-5 h-36">
              <div className="flex justify-center items-center mb-5 space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width='28' height='28' viewBox="0 0 24 9"><path d="M 9.062 0 L 4.32 8.992 L 0 8.992 L 3.703 1.971 C 4.277 0.882 5.709 0 6.902 0 Z M 19.656 2.248 C 19.656 1.006 20.623 0 21.816 0 C 23.009 0 23.976 1.006 23.976 2.248 C 23.976 3.49 23.009 4.496 21.816 4.496 C 20.623 4.496 19.656 3.49 19.656 2.248 Z M 9.872 0 L 14.192 0 L 9.45 8.992 L 5.13 8.992 Z M 14.974 0 L 19.294 0 L 15.592 7.021 C 15.018 8.11 13.585 8.992 12.392 8.992 L 10.232 8.992 Z" fill="#ffffff"></path></svg>
                <h3 className="text-2xl font-semibold">Framer Motion</h3>
              </div>
              <p className="text-[16px] lg:text-[18px] text-center text-green-400">• Active</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileHover={{scale: 1.01, border: "1px solid #9800eb", transition: { duration: 0.3 }}} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2, ease: "backInOut" } }} viewport={{ once: true }} className="card-g pt-6 rounded-3xl p-5 h-36 lg:col-start-2">
              <div className="flex justify-center items-center mb-5 space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width='28' height='28' xml:space="preserve" viewBox="0 0 16 16"><path fill="#ffffff" d="M2 2v12h12V2zm4 6h3v1H8v4H7V9H6zm5 0h2v1h-2v1h1a1.003 1.003 0 0 1 1 1v1a1.003 1.003 0 0 1-1 1h-2v-1h2v-1h-1a1.003 1.003 0 0 1-1-1V9a1.003 1.003 0 0 1 1-1"/></svg>
                <h3 className="text-2xl font-semibold">TypeScript</h3>
              </div>
              <p className="text-[16px] lg:text-[18px] text-center text-orange-400">• In Progress</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileHover={{scale: 1.01, border: "1px solid #9800eb", transition: { duration: 0.3 }}} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3, ease: "backInOut" } }} viewport={{ once: true }} className="card-g pt-6 rounded-3xl p-5 h-36 ">
              <div className="flex justify-center items-center mb-5 space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width='28' height='28' viewBox="0 0 32 32"><path fill="#ffffff" d="M16 2a14 14 0 1 0 5.816 26.723L12 14v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.434a1 1 0 0 1 .857.486l11.491 19.15A14 14 0 0 0 16 2m8 16h-4V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z"/></svg>
                <h3 className="text-2xl font-semibold">Next JS</h3>
              </div>
              <p className="text-[16px] lg:text-[18px] text-center text-orange-400">• In Progress</p>
            </motion.div>
          </div>
        </motion.section>
        <Revievs />
        <motion.section className="flex justify-center flex-col mb-22">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{opacity: 1, transition: { duration: 0.8, delay: 0.2 } }} viewport={{ once: true }}>
            <h2 className="font-bold text-3xl md:text-4xl mb-3">Готовы обсудить проект?</h2>
            <p className="font-normal text-[18px] md:text-[20px] mb-12">Напишите мне в телеграм</p>
            <a className="p-4 px-7 bg-purple-600 rounded-full font-semibold text-[17px] hover:button-g transition-shadow duration-300" href="http://t.me/murkildev" target="_blank" rel="noopener noreferrer">Написать мне</a>
          </motion.div>
        </motion.section>
      </div>
    </motion.main>
  )
}

export default Home;