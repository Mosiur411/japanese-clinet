import React, { useEffect } from "react";
import UserLayout from "../../UserLayout";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../../components/shared/Button";
import { Link } from "react-router";
import { useNavigate } from 'react-router-dom'
import { LoginSchema } from "../../components/Form/validation/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginUserMutation } from "../../apps/features/auth/authApi";
import { userloading, userLoggedIn } from "../../apps/features/auth/authSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { handleSubmit, register, formState: { errors }, reset } = useForm({ resolver: yupResolver(LoginSchema) });
    // rtk 
    const [userLogin, { isError, isLoading, isSuccess, data, error }] = useLoginUserMutation()


    const onSubmit = async (formdata) => {
        await userLogin(formdata)


    }
    useEffect(() => {
        if (isError) {
            toast.error(error.data.message)
        }
        if (isSuccess && data.data?.token) {
            localStorage.setItem("token", data.data?.token);
            const userInfo = data.data?.user
            dispatch(userLoggedIn({...userInfo}));
            dispatch(userloading());

            if (data.data?.user.role === 'admin') {
                navigate('/dashboard')
            } else {
                navigate('/lessons')
            }
            toast.success(data.message)
            reset()
        }
    }, [isError, isLoading, isSuccess])


    return (
        <UserLayout>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Emai  <span className="text-red-500">*</span>
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
                                Password   <span className="text-red-500">*</span>
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
                        <Button isLoading={isLoading} text="Login" />

                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-blue-600 hover:text-blue-700">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </UserLayout>

    );
};

export default LoginPage;
