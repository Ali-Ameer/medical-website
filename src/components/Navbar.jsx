import { DarkMode } from "./DarkMode";
import { MdMenu, MdClose } from "react-icons/md"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ChangeLang } from "./ChangeLang";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menu, setMenu] = useState(true);
  return (
    <div className={`flex justify-between px-2 lg:px-28 py-2 items-center bg-white dark:bg-gray-900 
    ${i18n.language === "en" ? "font-Poppins" : "font-Cairo"}`}>
      <a href="/" className="text-2xl text-Blue font-bold">{t("navbar.logo")}</a>

      <div className="flex items-center justify-center gap-2 md:gap-6">
        <nav className="gap-4 hidden md:flex">
          <a
          href="/#header"
          className="text-gray-700 hover:text-gray-800 dark:text-white dark:hover:text-gray-300 text-lg font-medium  Transition">
            {t("navbar.links.home")}
          </a>

          <a
            href="/#about"
            className="text-gray-700 hover:text-gray-800 dark:text-white dark:hover:text-gray-300 text-lg font-medium  Transition">
             {t("navbar.links.about")}
          </a>

          <a
            href="/#contact"
            className="text-gray-700 hover:text-gray-800 dark:text-white dark:hover:text-gray-300 text-lg font-medium  Transition">
             {t("navbar.links.contact")}
          </a>
        </nav>
        <DarkMode/>
        <ChangeLang/>
        <a href="/#contact" className="py-2 px-4 md:py-2 md:px-6 bg-Blue hover:bg-blue-600 transition-all text-white text-base font-medium rounded-md drop-shadow">
        {t("navbar.btn")}
        </a>
        
        <div className="flex md:hidden transition-all">
        {menu ? 
        <MdMenu className="text-3xl text-gray-700 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 hover:cursor-pointer transition-all"
        onClick={() => setMenu(false)}
        />
        :
        <>
        <MdClose className="text-3xl text-gray-700 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 hover:cursor-pointer transition-all"
        onClick={() => setMenu(true)}
        />
        <nav className={`flex flex-col h-full w-44 bg-white dark:bg-gray-800 gap-4 justify-start items-center absolute ${i18n.language === "en" ? "right-0" : "left-0" } top-12 z-[999] drop-shadow-lg p-4`}>
          <a
          href="#header"
          onClick={() => setMenu(true)}
          className="text-gray-700 hover:text-gray-800 dark:text-white dark:hover:text-gray-300  text-lg font-medium  Transition">
            {t("navbar.links.home")}
          </a>

          <a
            href="#about"
            onClick={() => setMenu(true)}
            className="text-gray-700 hover:text-gray-800 dark:text-white dark:hover:text-gray-300  text-lg font-Poppins font-medium  Transition">
             {t("navbar.links.about")}
          </a>

          <a
            href="#contact"
            onClick={() => setMenu(true)}
            className="text-gray-700 hover:text-gray-800 dark:text-white dark:hover:text-gray-300  text-lg font-Poppins font-medium  Transition">
             {t("navbar.links.contact")}
          </a>
          
        </nav>
        </>
        }
        </div>
      </div>
    </div>
  );
};
