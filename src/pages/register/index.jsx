
import React, { useEffect, useState } from "react";
import UserLayout from "../../UserLayout";
import { RegisterSchema } from "../../components/Form/validation/RegisterSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRegisterUserMutation } from "../../apps/features/auth/authApi";

const RegisterPage = () => {
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [file, setfile] = useState(null);
    // rtk handel 
    const [createAccount, { data, isError, isSuccess, error, isLoading }] = useRegisterUserMutation()

    const { handleSubmit, register, formState: { errors }, reset } = useForm({ resolver: yupResolver(RegisterSchema) });

    const onSubmit = async (event) => {
        if (!file) {
            toast.error("Pleass images upload")
        } else {
            const formData = new FormData();
            formData.append("name", event?.name)
            formData.append("email", event?.email)
            formData.append("password", event?.password)
            formData.append("profilePhoto", file)
            await createAccount(formData)
        }
       
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setfile(file)
            setProfilePhoto(URL.createObjectURL(file));

        }
    };
    useEffect(() => {
        if (isError) {
            toast.error(error.data.message)
        }
        if (isSuccess) {
            toast.success(data.message)
            reset()
        }
    }, [isError, isLoading, isSuccess])




    return (
        <UserLayout>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name  <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                {...register("name", { required: true })}
                            />   {errors && (
                                <span className="text-red-500">{errors?.name?.message}</span>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email  <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                {...register("email", { required: true })}
                            />
                            {errors && (
                                <span className="text-red-500">{errors?.email?.message}</span>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password  <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                {...register("password", { required: true })}
                            />
                            {errors && (
                                <span className="text-red-500">{errors?.password?.message}</span>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm Password  <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                {...register("confirmPassword", { required: true })}
                            />
                            {errors && (
                                <span className="text-red-500">{errors?.confirmPassword?.message}</span>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-700">
                                Profile Photo  <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="file"
                                id="profilePhoto"
                                accept="image/*"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleFileChange}

                            />

                            {profilePhoto && (
                                <div className="mt-2 flex justify-center">
                                    <img
                                        src={profilePhoto}
                                        alt="Profile Preview"
                                        className="w-24 h-24 object-cover rounded-full"
                                    />
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Register
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            Already have an account?{" "}
                            <a href="/login" className="text-blue-600 hover:text-blue-700">
                                Login here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </UserLayout>

    );
};

export default RegisterPage;















