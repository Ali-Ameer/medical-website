import { FaUserMd, FaRegCalendarAlt, FaLightbulb } from "react-icons/fa";
import { TbActivityHeartbeat, TbStethoscope } from "react-icons/tb";
import { BiPlusMedical } from "react-icons/bi";

import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`hero flex flex-col w-full px-2 lg:px-28 pt-8 md:pt-0 items-center justify-center bg-white dark:bg-gray-900 ${i18n.language === "en" ? "font-Poppins" : "font-Cairo"}`}
      id="header"
    >
      <div className="infoAndImg-col flex flex-col md:flex-row gap-6 w-full items-center justify-center">
        <div className="left w-full md:w-[55%] flex flex-col gap-6">
          <h1 className="text-gray-800 dark:text-white text-4xl lg:text-6xl font-bold leading-loose">
            <ReactMarkdown
              components={{
                em: ({ node, ...props }) => (
                  <span className="text-Blue leading-normal" {...props} />
                ),
              }}
            >
              {t("header.title")}
            </ReactMarkdown>
          </h1>
          <p className="text-gray-600 text-base font-medium mb-2 ">
            {t("header.paragraph")}
          </p>
        </div>

        <div className="right w-full md:w-[45%] flex items-center justify-center relative">
          <img src={require("../assets/images/female-doctor-pointing-left.png")}
            alt="person"
            className="h-[460px] translate-y-[0.5rem] "
          />
          <div className="absolute top-[50%] md:top-[40%] right-0 flex bg-[#ffffffa6] dark:bg-gray-800 dark:bg-opacity-80 drop-shadow-lg gap-4 p-2 rounded-lg items-center justify-center animate-animationDurations">
            <img className="avatar h-[50px] w-[50px] bg-gray-200 dark:bg-gray-800 object-cover object-top rounded-lg "
            src={require("../assets/images/dr-avatar.png")}
              alt="person"
            />
            <p className="text-gray-600 dark:text-gray-400 text-base font-medium">
              {t("header.drName")}
            </p>
          </div>

          <div className="absolute top-[70%] md:top-[60%] left-[0] md:left-[-5%] flex bg-[#ffffffa6] dark:bg-gray-800 dark:bg-opacity-80 drop-shadow-lg gap-4 p-2 rounded-lg items-center justify-center animate-animationDurations">
            <a href="/#contact" className="py-2 px-6 bg-Orange hover:bg-[#e56a51] transition-all text-white text-base font-medium rounded-md drop-shadow">
              {t("header.makeAppointment")}
            </a>
          </div>

          <TbActivityHeartbeat className="absolute top-[25%] md:top-[20%] right-[10%] md:right-[25%] text-4xl bg-white dark:bg-gray-800 rounded-full drop-shadow-xl text-Blue p-2 animate-animationDurations" />
          <TbStethoscope className="absolute top-[35%] left-[20%] text-4xl bg-white dark:bg-gray-800 rounded-full drop-shadow-xl text-Blue p-2 animate-animationDurations" />
          <BiPlusMedical className="absolute top-[75%] md:top-[70%] right-[10%] md:right-[15%] text-4xl bg-white dark:bg-gray-800 rounded-full drop-shadow-xl text-Blue p-2 animate-animationDurations" />
        </div>
      </div>

      <div className="cards-col flex flex-col md:flex-row gap-2 lg:gap-6 w-full py-6 bg-Blue rounded-lg drop-shadow-md items-center justify-center translate-y-[-3rem] z-50">

        <div className="card1 flex flex-col w-[290px] px-4 py-8 bg-white dark:bg-gray-900 rounded-md drop-shadow-md items-center justify-center">
          <span className="p-2 bg-Blue rounded-md flex items-center justify-center ">
            <FaUserMd className="text-2xl text-white" />
          </span>
          <h2 className="py-4 text-lg text-Blue text-center font-medium">
            {t("header.cards.card1.title")}
          </h2>
          <p className="text-base text-gray-600 text-center font-medium">
            {t("header.cards.card1.paragraph")}
          </p>
        </div>

        <div className="card2 flex flex-col w-[290px] px-4 py-8 bg-white dark:bg-gray-900 rounded-md drop-shadow-md items-center justify-center">
          <span className="p-2 bg-Orange rounded-md flex items-center justify-center ">
            <FaRegCalendarAlt className="text-2xl text-white" />
          </span>
          <h2 className="py-4 text-lg text-Orange text-center font-medium">
            {t("header.cards.card2.title")}
          </h2>
          <p className="text-base text-gray-600 text-center font-medium">
            {t("header.cards.card2.paragraph")}
          </p>
        </div>

        <div className="card3 flex flex-col w-[290px] px-4 py-8 bg-white dark:bg-gray-900 rounded-md drop-shadow-md items-center justify-center">
          <span className="p-2 bg-Yellow rounded-md flex items-center justify-center ">
            <FaLightbulb className="text-2xl text-white" />
          </span>
          <h2 className="py-4 text-lg text-Yellow text-center font-medium">
            {t("header.cards.card3.title")}
          </h2>
          <p className="text-base text-gray-600 text-center font-medium">
            {t("header.cards.card3.paragraph")}
          </p>
        </div>
      </div>
    </div>
  );
};
