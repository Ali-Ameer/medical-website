import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const ChangeLang = () => {
  const { i18n } = useTranslation();

  const [toggleLang, setToggleLang] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language"));

  const toggleTheme = () => {
    setToggleLang(!toggleLang);
    toggleLang ? setLanguage("ar") : setLanguage("en");
  };
  useEffect(() => {
    if (language === "ar") {
        i18n.changeLanguage("ar");
      localStorage.setItem("language", "ar");
    } else {
        i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }
  }, [i18n, language]);

  return (
    <div
      className="flex w-fit hover:cursor-pointer transition"
      onClick={() => toggleTheme()}
    >
      {toggleLang ? 
        <h3 className="text-lg text-gray-700 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300 font-Poppins font-medium">AR</h3>
        : 
        <h3 className="text-lg text-gray-700 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300 font-Poppins font-medium">EN</h3>
      }
    </div>
  );
};
