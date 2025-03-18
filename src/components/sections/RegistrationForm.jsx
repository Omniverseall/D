import { useForm } from "react-hook-form";
import PostList from "../../ToDoCrud/PostLists";
const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 py-40">
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-6">
                    Registration
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">First Name</label>
                            <input
                                type="text"
                                {...register("firstName", { required: true })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.firstName && <p className="text-red-500">First Name is required</p>}
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">Last Name</label>
                            <input
                                type="text"
                                {...register("lastName", { required: true })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.lastName && <p className="text-red-500">Last Name is required</p>}
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">Patronymic</label>
                            <input
                                type="text"
                                {...register("patronymic")}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">Phone Number</label>
                            <input
                                type="tel"
                                {...register("phone", {
                                    required: true,
                                    pattern: /^[0-9]+$/,
                                })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.phone && <p className="text-red-500">Valid phone number is required</p>}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">Username</label>
                            <input
                                type="text"
                                {...register("username", { required: true })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.username && <p className="text-red-500">Username is required</p>}
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && <p className="text-red-500">Email is required</p>}
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">Password</label>
                            <input
                                type="password"
                                {...register("password", { required: true })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.password && <p className="text-red-500">Password is required</p>}
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium text-gray-700 dark:text-white">Gender</label>
                            <select
                                {...register("gender", { required: true })}
                                className="mt-1 px-4 py-2 bg-black text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {errors.gender && <p className="text-red-500">Gender is required</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="col-span-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Register
                    </button>
                </form>
            </div>
            <br /><br /><br />
            <section className="mt-8">
                <PostList />
            </section>
        </div>
    );
};

export default RegistrationForm;
