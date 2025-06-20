import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Works = () => {
  return ( 
    <main className="flex justify-center max-w-[100vw]">
      <Helmet>
        <title>Работы • MurKilDev</title>
      </Helmet>
      <div className="w-screen max-w-[1440px]">
        <section className="pt-10">
          <motion.div className="text-center mt-24 mb-8 lg:mb-16" initial={{ opacity: 0 }} whileInView={{opacity: 1, transition: { duration: 0.8, delay: 0.2 } }} viewport={{ once: true }}>
            <h2 className="font-bold text-3xl md:text-4xl">Мои работы</h2>
          </motion.div>
          <div className="flex justify-around flex-col items-center px-[1rem] lg:px-[2rem]">
            <a href="https://damof-hosting.xyz" target="_blank" rel="noreferrer" className="mb-20">
              <motion.div className="flex flex-col items-center card-g rounded-3xl max-w-[800px]" initial={{ opacity: 0, y: 30}} whileHover={{scale: 1.03, border: "1px solid #535353", transition: { duration: 0.5 }}} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0, ease: "easeInOut" } }} viewport={{ once: true }}>
                <img src="/damof.png" alt="" className="rounded-3xl" />
                <div className="w-[100%]">
                  <h2 className="font-semibold text-2xl md:text-3xl m-3 ml-6">Damof-Hosting</h2>
                  <p className="mx-6 mb-4 text-neutral-200/80 text-[16px] md:text-[17px]">Damof-hosting — универсальный хостинг-сервис для сайтов, Minecraft-серверов и других онлайн-проектов, обеспечивающий стабильную работу и удобное управление. <br />Многостраничный сайт.</p>
                </div>
              </motion.div>
            </a>
            <a href="https://murkildev.netlify.app" target="_blank" rel="noreferrer" className="mb-20">
              <motion.div className="flex flex-col items-center card-g rounded-3xl max-w-[800px]" initial={{ opacity: 0, y: 30}} whileHover={{scale: 1.03, border: "1px solid #535353", transition: { duration: 0.5 }}} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0, ease: "easeInOut" } }} viewport={{ once: true }}>
                <img src="/portfolio.png" alt="" className="rounded-3xl" />
                <div className="w-[100%]">
                  <h2 className="font-semibold text-2xl md:text-3xl m-3 ml-6">Портфолио</h2>
                  <p className="mx-6 mb-4 text-neutral-200/80 text-[16px] md:text-[17px]">Мой первый сайт-портфолио! Скоро обновка.</p>
                </div>
              </motion.div>
            </a>
            <a href="https://murkildev.netlify.app" target="_blank" rel="noreferrer" className="mb-20">
              <motion.div className="flex flex-col items-center card-g rounded-3xl max-w-[800px]" initial={{ opacity: 0, y: 30}} whileHover={{scale: 1.03, border: "1px solid #535353", transition: { duration: 0.5 }}} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0, ease: "easeInOut" } }} viewport={{ once: true }}>
                <img src="/cola149.png" alt="" className="rounded-3xl" />
                <div className="w-[100%]">
                  <h2 className="font-semibold text-2xl md:text-3xl m-3 ml-6">Cola149</h2>
                  <p className="mx-6 mb-4 text-neutral-200/80 text-[16px] md:text-[17px]">Сайт с ссылками.</p>
                </div>
              </motion.div>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Works;