import { useState } from "react";
import {
  MdStar,
  MdOutlineStarHalf,
  MdFormatQuote,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useTranslation } from "react-i18next";

export const Testimonial = () => {
  const { t, i18n } = useTranslation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      title: t("testimonial.patient1.title"),
      content: t("testimonial.patient1.content"),
    },
    {
      title: t("testimonial.patient2.title"),
      content: t("testimonial.patient2.content"),
    },
    {
      title: t("testimonial.patient3.title"),
      content: t("testimonial.patient3.content"),
    },
  ];
  const handleBtn = (type) => {
    if (type === "right") {
      if (activeTestimonial === 0 || activeTestimonial === 1)
        setActiveTestimonial((prev) => prev + 1);
    } else {
      if (activeTestimonial === 2 || activeTestimonial === 1)
        setActiveTestimonial((prev) => prev - 1);
    }
  };

  return (
    <section
      className={`px-2 md:px-28 flex flex-col w-full gap-6 py-12"
      id="testimonials ${i18n.language === "en" ? "font-Poppins" : "font-Cairo"}`}
    >
      <div className="nav w-full flex items-center justify-between">
        <div className="flex flex-col gap-2 justify-start pb-6">
          <p className="text-base text-Blue font-medium text-start">
            {t("testimonial.sectionName")}
          </p>
          <h1 className="text-4xl md:text-6xl text-gray-800 dark:text-white font-bold">
            {t("testimonial.title")}
          </h1>
        </div>
        <div className="flex gap-4 items-center justify-center">

        {i18n.language === "en" ?
        <>
          <span
            className="flex items-center justify-center p-2 bg-white dark:bg-gray-800 dark:text-white rounded-md drop-shadow-md hover:bg-Blue dark:hover:bg-Blue text-gray-700 hover:text-white hover:cursor-pointer transition-all"
            onClick={() => handleBtn("left")}
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
          </span>
          <span
            className="flex items-center justify-center p-2 bg-white dark:bg-gray-800 dark:text-white rounded-md drop-shadow-md hover:bg-Blue dark:hover:bg-Blue text-gray-700 hover:text-white hover:cursor-pointer transition-all"
            onClick={() => handleBtn("right")}
          >
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </span>
          </>
          :
          <>
          <span
          className="flex items-center justify-center p-2 bg-white dark:bg-gray-800 dark:text-white rounded-md drop-shadow-md hover:bg-Blue dark:hover:bg-Blue text-gray-700 hover:text-white hover:cursor-pointer transition-all"
          onClick={() => handleBtn("left")}
        >
          <MdOutlineKeyboardArrowRight className="text-2xl" />
        </span>
        <span
            className="flex items-center justify-center p-2 bg-white dark:bg-gray-800 dark:text-white rounded-md drop-shadow-md hover:bg-Blue dark:hover:bg-Blue text-gray-700 hover:text-white hover:cursor-pointer transition-all"
            onClick={() => handleBtn("right")}
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
          </span>
        </>

          }
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-12">
        <div className="left w-full md:w-[50%] flex flex-col gap-4">
          <div className={`client-1 w-full flex gap-1 items-center justify-start p-2 md:p-4 hover:cursor-pointer ${
              activeTestimonial === 0
                ? "bg-gray-100 dark:bg-gray-700 "
                : "bg-white dark:bg-gray-800"
            } dark:bg-gray-800 rounded-md drop-shadow-lg`}
            onClick={() => setActiveTestimonial(0)}
          >
            <img src={require("../assets/images/user1.png")}
              alt="client"
              className="w-14 h-14 rounded-full border-2 border-white drop-shadow-lg mr-2 object-cover"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-base text-gray-700 dark:text-white font-medium">
                {t("testimonial.patient1.name")}
              </h1>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {t("testimonial.patient1.bio")}
              </p>
            </div>
          </div>
          <div className={`client-2 w-full flex gap-1 items-center justify-start p-2 md:p-4 hover:cursor-pointer ${
              activeTestimonial === 1
                ? "bg-gray-100 dark:bg-gray-700 "
                : "bg-white dark:bg-gray-800"
            } dark:bg-gray-800 rounded-md drop-shadow-lg`}
            onClick={() => setActiveTestimonial(1)}
          >
            <img
              src={require("../assets/images/user2.jpg")}
              alt="client"
              className="w-14 h-14 rounded-full border-2 border-white drop-shadow-lg mr-2 object-cover"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-base text-gray-700 dark:text-white font-medium">
                {t("testimonial.patient2.name")}
              </h1>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {t("testimonial.patient2.bio")}
              </p>
            </div>
          </div>
          <div className={`client-3 w-full flex gap-1 items-center justify-start p-2 md:p-4 hover:cursor-pointer ${
              activeTestimonial === 2
                ? "bg-gray-100 dark:bg-gray-700 "
                : "bg-white dark:bg-gray-800"
            } dark:bg-gray-800 rounded-md drop-shadow-lg`}
            onClick={() => setActiveTestimonial(2)}
          >
            <img
              src={require("../assets/images/user3.jpg")}
              alt="client"
              className="w-14 h-14 rounded-full border-2 border-white drop-shadow-lg mr-2 object-cover"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-base text-gray-700 dark:text-white font-medium">
                {t("testimonial.patient3.name")}
              </h1>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {t("testimonial.patient3.bio")}
              </p>
            </div>
          </div>
        </div>
        <div className="right w-full md:w-[50%] flex flex-col gap-6">
          {
            <>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2 items-start">
                  <h1 className="text-base text-gray-700 dark:text-white font-medium">
                    {testimonials[activeTestimonial].title}
                  </h1>
                  <span className="text-Yellow flex gap-1 items-center justify-start">
                    <MdStar className="text-xl" />
                    <MdStar className="text-xl" />
                    <MdStar className="text-xl" />
                    <MdStar className="text-xl" />
                    <MdOutlineStarHalf className="text-xl" />
                  </span>
                </div>
                <MdFormatQuote className="text-9xl text-blue-200 opacity-50" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {testimonials[activeTestimonial].content}
              </p>
            </>
          }
        </div>
      </div>
    </section>
  );
};
