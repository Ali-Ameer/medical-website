import { BsBehance, BsGithub, BsLinkedin, BsInstagram, BsDribbble, } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
      <footer className={`w-full mt-40 px-2 lg:px-28 bg-gray-900 dark:bg-gray-800 flex flex-col justify-center items-center ${i18n.language === "en" ? "font-Poppins" : "font-Cairo"}`}>

        <div className="newsletter flex flex-col md:flex-row h-40 mx-20 w-full md:w-95 bg-Blue items-center place-self-center rounded-lg -translate-y-1/2">
          <div className="left flex-1 flex flex-col items-center justify-center md:pl-2">
            <h1 className="text-lg md:text-lg font-semibold lg:text-2xl text-white lg:font-bold drop-shadow-md">
              {t("footer.newsletter.title")}
            </h1>
            <p className="text-base md:text-lg text-white font-medium drop-shadow-md">
            {t("footer.newsletter.paragraph")}
            </p>
          </div>
          <div className="right flex-1 flex items-center justify-center gap-2">
            <input
              className="w-2/4 md:w-3/5 text-base placeholder:text-slate-400 bg-white border border-slate-300 rounded p-3 shadow-sm focus:outline-none focus:border-Orange focus:ring-Orange focus:ring-1"
              type="email"
              name="email"
              placeholder={t("footer.newsletter.inputPlaceholder")}
            />
            <button
              className="text-base text-white bg-Orange hover:bg-[#e56a51] transition py-3 px-4 font-medium rounded"
              type="submit"
            >
              {t("footer.newsletter.btn")}
            </button>
          </div>
        </div>

        <div className="container w-full flex flex-col items-center gap-6 -translate-y-1/2">
          <div className="links flex-1 flex gap-4 md:gap-8">
            <a
              className="text-base text-white hover:text-gray-200 transition font-normal drop-shadow-md"
              href="#header"
            >
              {t("footer.links.home")}
            </a>
            <a
              className="text-base text-white hover:text-gray-200 transition font-normal drop-shadow-md"
              href="#about"
            >
              {t("footer.links.about")}
            </a>
            <a
              className="text-base text-white hover:text-gray-200 transition font-normal drop-shadow-md"
              href="#testimonials"
            >
              {t("footer.links.testimonials")}
            </a>
            <a
              className="text-base text-white hover:text-gray-200 transition font-normal drop-shadow-md"
              href="#contact"
            >
              {t("footer.links.contact")}
            </a>
          </div>
          <div className="social flex gap-6">
            <a href="##"><BsInstagram className="text-gray-300 hover:text-gray-400 transition text-lg" /></a> 
            <a href="##"><BsLinkedin className="text-gray-300 hover:text-gray-400 transition text-lg" /></a>
            <a href="##"><BsDribbble className="text-gray-300 hover:text-gray-400 transition text-lg" /></a>
            <a href="##"><BsBehance className="text-gray-300 hover:text-gray-400 transition text-lg" /></a>
            <a href="##"><BsGithub className="text-gray-300 hover:text-gray-400 transition text-lg" /></a>
          </div>
        </div>
        <div className="copyRight flex text-base p-4 text-gray-300 font-normal drop-shadow-md justify-center -translate-y-1/2">
        {t("footer.copyRight")}
        </div>
      </footer>
  );
};

export default Footer;