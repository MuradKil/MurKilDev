import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex relative z-2 justify-center p-8 pr-30 bg-[#161616]">
        <div className="flex justify-between flex-col lg:flex-row w-[80vw] md:w-[50vw] max-w-[1200px]">
          <div className="mb-8 lg:mb-0 mx-4">
            <h3 className="text-4xl mb-2 font-bold text-gradient">MurKilDev.ru</h3>
            <span className="text-[15px] text-gray-100/70 block">© MurKilDev 2025. Все права защищены.</span>
          </div>
          <div className="flex justify-center flex-col mb-8 lg:mb-0 mx-4">
            <span className="font-semibold border-b border-purple-400/60 mb-1 max-w-12">Меню</span>
            <Link to="/" className="font-medium mb-1 text-gray-100/80">Главная</Link>
            <Link to="/works" className="font-medium mb-1 text-gray-100/80">Работы</Link>
          </div>
          <div className="flex justify-center flex-col mb-8 lg:mb-0 mx-4">
            <span className="font-semibold border-b border-purple-400/60 mb-1 max-w-17">Ссылки</span>
            <a href="" target="_blank" rel="noreferrer" className="font-medium mb-1 text-gray-100/80">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;