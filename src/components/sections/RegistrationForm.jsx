import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [language, setLanguage] = useState("en");

    // Функция отправки данных
    const onSubmit = (data) => {
        axios.post("https://jsonplaceholder.typicode.com/posts", data)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    };

    // Переключение языка
    const toggleLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 py-6">
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-4xl mx-auto">
                <div className="flex justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
                        {language === "en" ? "Registration" : "Регистрация"}
                    </h2>
                    <div>
                        <button
                            onClick={() => toggleLanguage("en")}
                            className={`px-2 py-1 text-lg font-semibold rounded-lg mr-2 ${language === "en" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => toggleLanguage("ru")}
                            className={`px-2 py-1 text-lg font-semibold rounded-lg ${language === "ru" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                        >
                            RU
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">

                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">
                                {language === "en" ? "First Name" : "Имя"}
                            </label>
                            <input
                                type="text"
                                {...register("firstName", { required: true })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.firstName && <p className="text-red-500">{language === "en" ? "First Name is required" : "Имя обязательно"}</p>}
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">
                                {language === "en" ? "Last Name" : "Фамилия"}
                            </label>
                            <input
                                type="text"
                                {...register("lastName", { required: true })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.lastName && <p className="text-red-500">{language === "en" ? "Last Name is required" : "Фамилия обязательна"}</p>}
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">
                                {language === "en" ? "Patronymic" : "Отчество"}
                            </label>
                            <input
                                type="text"
                                {...register("patronymic", { required: true })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">
                                {language === "en" ? "Phone Number" : "Номер телефона"}
                            </label>
                            <input
                                type="tel"
                                {...register("phone", {
                                    required: true,
                                    pattern: /^[0-9]+$/, 
                                })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.phone && <p className="text-red-500">{language === "en" ? "Valid phone number is required" : "Номер телефона обязателен"}</p>}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">
                                {language === "en" ? "Username" : "Логин/Псевдоним"}
                            </label>
                            <input
                                type="text"
                                {...register("username", { required: true })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.username && <p className="text-red-500">{language === "en" ? "Username is required" : "Логин обязателен"}</p>}
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">
                                {language === "en" ? "Email" : "Электронная почта"}
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && <p className="text-red-500">{language === "en" ? "Email is required" : "Электронная почта обязательна"}</p>}
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">
                                {language === "en" ? "Password" : "Пароль"}
                            </label>
                            <input
                                type="password"
                                {...register("password", { required: true })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.password && <p className="text-red-500">{language === "en" ? "Password is required" : "Пароль обязателен"}</p>}
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">
                                {language === "en" ? "Gender" : "Пол"}
                            </label>
                            <select
                                {...register("gender", { required: true })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="male">{language === "en" ? "Male" : "Мужчина"}</option>
                                <option value="female">{language === "en" ? "Female" : "Женщина"}</option>
                                <option value="Down">{language === "en" ? "Down" : "Даун/Не адекватный/Больной на всю голову"}</option>
                            </select>
                            {errors.gender && <p className="text-red-500">{language === "en" ? "Gender is required" : "Пол обязателен"}</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="col-span-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        {language === "en" ? "Register" : "Зарегистрироваться"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
