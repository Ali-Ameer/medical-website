import { FaClinicMedical, FaRegCalendarAlt, FaLightbulb } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const HowItWork = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={`flex flex-col px-2 md:px-28 items-center justify-center gap-6 py-12 ${i18n.language === "en" ? "font-Poppins" : "font-Cairo"}`}>
      <h1 className="text-4xl md:text-6xl text-gray-800 dark:text-white font-bold ">
        {t("howItWork.title")}
      </h1>
      <p className="text-gray-600 w-full md:w-[50%] text-center dark:text-gray-300 font-medium">
      {t("howItWork.paragraph")}
      </p>
      <div className="cards flex flex-col md:flex-row gap-6 w-full p-6 bg-Blue rounded-lg drop-shadow-md items-center justify-center">
        <div className="card-1 flex items-center justify-center gap-2 w-[270px]">
          <span className="icon bg-LightBlue rounded-md w-[68px] h-[68px] flex flex-none items-center justify-center mr-2">
            <FaRegCalendarAlt className="text-white text-3xl" />
          </span>
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-base font-medium ">
            {t("howItWork.cards.card1.title")}
            </h1>
            <p className="text-gray-300 text-sm font-medium ">
            {t("howItWork.cards.card1.paragraph")}
            </p>
          </div>
        </div>

        <div className="card-1 flex items-center justify-center gap-2 w-[270px]">
          <span className="icon bg-Orange rounded-md w-[68px] h-[68px] flex flex-none items-center justify-center mr-2">
            <FaClinicMedical className="text-white text-3xl" />
          </span>
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-base font-medium ">
            {t("howItWork.cards.card2.title")}
            </h1>
            <p className="text-gray-300 text-sm font-medium ">
            {t("howItWork.cards.card2.paragraph")}
            </p>
          </div>
        </div>

        <div className="card-1 flex items-center justify-center gap-2 w-[270px]">
          <span className="icon bg-Yellow rounded-md w-[68px] h-[68px] flex flex-none items-center justify-center mr-2">
            <FaLightbulb className="text-white text-3xl" />
          </span>
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-base font-medium ">
            {t("howItWork.cards.card3.title")}
            </h1>
            <p className="text-gray-300 text-sm font-medium ">
            {t("howItWork.cards.card3.paragraph")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
