import { useState } from "react";
import {
  MdCall,
  MdEmail,
  MdOutlineAccessTimeFilled,
  MdCheckCircle,
} from "react-icons/md";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t, i18n } = useTranslation();
  const [msg, setMsg] = useState(null);

  return (
    <section className={`flex flex-col md:flex-row gap-8 px-2 lg:px-28 py-12 ${i18n.language === "en" ? "font-Poppins" : "font-Cairo"}`} id="contact">
      <div className="left w-full md:w-[40%] flex flex-col gap-6">
        <p className="text-base text-Blue font-medium text-start">
          {t("contact.sectionName")}
        </p>
        <h1 className="text-4xl md:text-6xl text-gray-800 dark:text-white font-bold">
        {t("contact.title")}
        </h1>
        <p className="text-base text-gray-600 font-medium text-start">
        {t("contact.paragraph")}
        </p>
        <div className="card flex flex-col gap-4 rounded-md drop-shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 items-start justify-center p-8 h-full">
          <h2 className="text-lg text-gray-800 dark:text-white font-medium mb-2">
          {t("contact.infoCard.title")}
          </h2>
          <p className="text-gray-700 dark:text-white flex gap-2 items-center justify-center text-base font-medium">
            <MdCall className="text-xl text-Blue" /> {t("contact.infoCard.phone")}
          </p>
          <p className="text-gray-700 dark:text-white flex gap-2 items-center justify-center text-base font-medium">
            <MdEmail className="text-xl text-Blue" />
            dr-sarah@mail.com
          </p>
          <p className="text-gray-700 dark:text-white flex gap-2 items-center justify-center text-base font-medium">
            <MdOutlineAccessTimeFilled className="text-xl text-Blue" />
            {t("contact.infoCard.time")}
          </p>
        </div>
      </div>
      <div className="right w-full md:w-[60%] flex flex-col gap-6 rounded-md drop-shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 items-start justify-center p-8">
        <label
          htmlFor="name"
          className="w-full flex flex-col gap-2 text-base text-gray-700 dark:text-white font-medium"
        >
          {t("contact.form.name")}
          <input
            id="name"
            type="text"
            className="w-full p-2 bg-gray-100 dark:bg-gray-900 focus-visible:outline-Blue outline-none rounded"
          />
        </label>
        <label
          htmlFor="email"
          className="w-full flex flex-col gap-2 text-base text-gray-700 dark:text-white font-medium"
        >
          {t("contact.form.email")}
          <input
            id="email"
            type="email"
            className="w-full p-2 bg-gray-100 dark:bg-gray-900 focus-visible:outline-Blue outline-none rounded"
          />
        </label>
        <label
          htmlFor="phone"
          className="w-full flex flex-col gap-2 text-base text-gray-700 dark:text-white font-medium"
        >
          {t("contact.form.phone")}
          <input
            id="phone"
            type="number"
            className="w-full p-2 bg-gray-100 dark:bg-gray-900 focus-visible:outline-Blue outline-none rounded"
          />
        </label>
        <label
          htmlFor="msg"
          className="w-full flex flex-col gap-2 text-base text-gray-700 dark:text-white font-medium"
        >
          {t("contact.form.msg")}
          <textarea
            className="w-full p-2 bg-gray-100 dark:bg-gray-900 focus-visible:outline-Blue outline-none rounded"
            id="msg"
            name="msg"
            cols="30"
            rows="3"
          />
        </label>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <button
            className="py-2 px-4 bg-Blue hover:bg-blue-600 text-white text-sm font-medium rounded-md w-fit min-w-fit"
            onClick={() =>
              setMsg(
                "Thank you, we will contact you soon as possible to confirm appointment"
              )
            }
          >
            {t("contact.form.btn")}
          </button>
          {msg && (
            <p className="text-green-700 flex gap-2 items-start justify-start text-base font-medium">
            <MdCheckCircle className="text-3xl text-green-700" />{msg}</p>
          )}
        </div>
      </div>
    </section>
  );
};
