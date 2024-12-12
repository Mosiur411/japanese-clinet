
import React, { useEffect, useState } from "react";
import UserLayout from "../../UserLayout";
import { RegisterSchema } from "../../components/Form/validation/RegisterSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRegisterUserMutation } from "../../apps/features/auth/authApi";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "../../components/shared/Button";

const RegisterPage = () => {
    // react hook
    const navigate = useNavigate();
    const [profilePhoto, setProfilePhoto] = useState(null);
    // rtk handel 
    const [createAccount, { data, isError, isSuccess, error, isLoading }] = useRegisterUserMutation()

    const { handleSubmit, register, formState: { errors }, reset } = useForm({ resolver: yupResolver(RegisterSchema) });

    const onSubmit = async (event) => {
  
        await createAccount(event)
       
    };


    useEffect(() => {
        if (isError) {
            toast.error(error.data.message)
        }
        if (isSuccess) {
            toast.success(data.message)
            reset()
            navigate('/login')
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
                                type="text"
                                id="profilePhoto"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={setProfilePhoto}
                                {...register("profilePhoto", { required: true })}

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
                        <Button isLoading={isLoading} text="Register" />
                        
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















