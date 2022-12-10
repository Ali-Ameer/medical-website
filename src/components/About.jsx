import { MdPerson, MdCall, MdEmail, MdStar, MdOutlineStarHalf, MdCheckCircle } from "react-icons/md"
import { TbVaccine, TbVirus } from "react-icons/tb"
import { CgBandAid } from "react-icons/cg"
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className={`flex flex-col md:flex-row px-2 lg:px-28 my-4 gap-7 dark:bg-gray-900 py-12 ${i18n.language === "en" ? "font-Poppins" : "font-Cairo"}`} id="about">
      <div className="left flex flex-col w-full md:w-[50%] px-0 md:px-20 items-center justify-center relative">
        <img src={require("../assets/images/female-doctor-pointing.png")}
          alt="person"
          className="h-[300px] md:h-[400px] translate-y-6"
        />
        <div className="w-full drop-shadow-lg rounded-md overflow-hidden -translate-y-6 ">
          <h1 className="text-white bg-Blue flex gap-2 items-center justify-center p-3 w-[100%] text-base font-medium">
            <MdPerson className="text-white text-xl" />
            {t("about.drName")}
          </h1>
          <div className="w-full bg-white dark:bg-gray-900 flex flex-col p-4 items-center justify-center gap-2">
            <span className="text-Yellow flex gap-1 items-center justify-center">
              <MdStar className="text-xl" />
              <MdStar className="text-xl" />
              <MdStar className="text-xl" />
              <MdStar className="text-xl" />
              <MdOutlineStarHalf className="text-xl" />
            </span>
          <p className="text-gray-700 dark:text-white flex gap-2 items-center justify-center text-base font-medium"><MdCall className="text-xl text-Blue" /> +123 456 789</p>
          <p className="text-gray-700 dark:text-white flex gap-2 items-center justify-center text-base font-medium"><MdEmail className="text-xl text-Blue" />dr-sarah@mail.com</p>
          </div>
        </div>

        <div className="popupAndAnimatetions">
            <span className="absolute flex items-center justify-center gap-2 p-4 text-gray-700 dark:text-white text-sm font-medium bg-[#ffffffa6] dark:bg-gray-800 dark:bg-opacity-80 rounded-lg drop-shadow-lg top-[45%] md:top-[50%] right-0 animate-animationDurations">
              <MdCheckCircle className="text-3xl text-green-700"/>
              {t("about.popupCard")}
            </span>
            <CgBandAid className="absolute top-[23%] md:top-[20%] left-[23%] md:left-[28%] text-4xl bg-white dark:bg-gray-800 rounded-full drop-shadow-xl text-Blue p-2 animate-animationDurations" />
            <TbVaccine className="absolute top-[25%] right-[25%] md:right-[30%] text-4xl bg-white dark:bg-gray-800 rounded-full drop-shadow-xl text-Blue p-2 animate-animationDurations" />
            <TbVirus className="absolute top-[50%] md:top-[55%] left-[15%] md:left-[20%] text-4xl bg-white dark:bg-gray-800 rounded-full drop-shadow-xl text-Blue p-2 animate-animationDurations" />
          </div>
      </div>

      <div className="right flex flex-col gap-3 w-full md:w-[50%] justify-center relative">
        <p className="text-base text-Blue font-medium text-start">{t("about.sectionName")}</p>
        <h1 className="text-4xl lg:text-6xl text-gray-800 dark:text-white font-bold text-start mt-4 mb-6">
        {t("about.title")}
        </h1>
        <p className="text-base text-gray-600 font-medium text-start mb-6">
        {t("about.paragraph")}
        </p>
        <a href="/#contact" className="w-fit py-2 px-6 bg-Blue hover:bg-blue-600 transition-all text-white text-base font-medium rounded-md drop-shadow">
        {t("about.btn")}
        </a>
      </div>
    </section>
  );
};
