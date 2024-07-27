"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { PasswordHide, PasswordShow } from "@/tools/icon/passwordIcon";
import Link from "next/link";
const LoginForm = ({ setToggleLogin, isPasswordVisible, togglePasswordVisibility }) => {
    const [loginForm, setLoginForm] = useState({ email: "", password: "" })

    const onChangeInput = (value, key) => {
        setLoginForm({ ...loginForm, [key]: value })
    }
    const login = () => {
        console.log(loginForm)
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-white">
            <div className=" flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                        Login
                    </h1>
                    <p className="text-[12px] mt-3 text-gray-500">
                        Hey enter your Seller Username and Password to Login
                    </p>
                </div>
                <div className="w-full flex-1 mt-8">
                    <div className="mx-auto  flex flex-col gap-4">
                        <input
                            className=""
                            type="email"
                            onChange={(e) => onChangeInput(e.target.value, "email")}
                            placeholder="Enter your email"
                        />
                        <div className="relative w-full">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                onChange={(e) => onChangeInput(e.target.value, "password")}
                                placeholder="Password"
                            />
                            <button
                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                onClick={togglePasswordVisibility}
                            >
                                {isPasswordVisible ? (
                                    <PasswordHide />
                                ) : (
                                    <PasswordShow />
                                )}
                            </button>
                        </div>


                        <button className="btn-primary" onClick={() => login()}>
                            <svg
                                className="w-6 h-6 -ml-2"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                strokeLinecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="ml-3">Login</span>
                        </button>


                        <div className="mt-6 text-xs text-gray-600 text-center flex gap-5 justify-center items-center">
                            <p>
                                New Seller Account
                            </p>

                            <Link href="/seller/register">
                                <button className="btn-primary text-sm">
                                    Register
                                </button>
                            </Link>
                        </div>



                        {/* <div className="flex flex-row">
                        <p>Login With :</p>
                        <div>
                            <button className="btn-secondary px-2 ">
                                <FcGoogle size={30} />
                            </button>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>

        </div>
    );
};
export default LoginForm;
