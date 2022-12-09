import { useTranslation } from "react-i18next";
export const Page404 = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
      <article
        className={`flex flex-col w-full h-[calc(100vh-56px)] bg-white dark:bg-gray-900 items-center justify-center 
    ${i18n.language === "en" ? "font-Poppins" : "font-Cairo"}`}
      >
        <img src={require("../assets/images/404-Error.svg").default}
          alt="mySvgImage"
          className="h-[50%] md:h-[70%]"
        />
        <div className="flex flex-col items-center justify-center flex-1 ">
          <p className="text-lg text-gray-700 dark:text-white font-medium">{t("404.p")}</p>
          <h1 className="text-4xl md:text-6xl text-gray-700 dark:text-white text-center font-medium py-4">
          {t("404.h1")}
          </h1>
          <a className="text-lg text-Blue hover:text-blue-600 font-medium transition-all" href="/">
          {t("404.link")}
          </a>
        </div>
      </article>
  );
};
