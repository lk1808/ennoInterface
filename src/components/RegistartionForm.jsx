import React, { useState } from "react";
import { PasswordHide, PasswordShow } from "@/tools/icon/passwordIcon";
import { postRegister } from "./api/api";

const RegistartionForm = ({ setToggleLogin, isPasswordVisible, togglePasswordVisibility }) => {

  const [registerForm, setregisterForm] = useState({ customerName: "", primaryEmailId: "", primaryMobileNo: "", city: "",panNumber: "",product_ServiceInfo:"" })

  const onChangeInput = (value, key) => {
    setregisterForm({ ...registerForm, [key]: value })
  }
  const register = () => {
    postRegister(registerForm).then((data)=>{
      console.log(data)
    })
  }
  return (
    <div className=" flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
          Sign up
        </h1>
        <p className="text-[12px] mt-3 text-gray-500">
          Hey enter your details to create your account
        </p>
      </div>
      <div className="w-full flex-1 mt-8">
        <div className="mx-auto  flex flex-col gap-4">
          <input
            className=""
            type="text"
            onChange={(e) => onChangeInput(e.target.value, "customerName")}
            placeholder="Enter your name"
          />
          <input
            className=""
            type="email"
            onChange={(e) => onChangeInput(e.target.value, "primaryEmailId")}
            placeholder="Enter your email"
          />
          <input
            className=""
            type="text"
            onChange={(e) => onChangeInput(e.target.value, "city")}
            placeholder="Enter your city"
          />
           <input
            className=""
            type="tel"
            onChange={(e) => onChangeInput(e.target.value, "primaryMobileNo")}
            placeholder="Enter your phone"
          />
           <input
            className=""
            type="text"
            onChange={(e) => onChangeInput(e.target.value, "panNumber")}
            placeholder="Enter your PAN Number"
          />
           <input
            className=""
            type="text"
            onChange={(e) => onChangeInput(e.target.value, "product_ServiceInfo")}
            placeholder="Enter your Product ServiceInfo"
          />
          {/* <div className="relative w-full">
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
          </div> */}
          
          <button className="btn-primary" onClick={() => register()}>
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
            <span className="ml-3">Sign Up</span>
          </button>
          <p className="mt-6 text-xs text-gray-600 text-center">
            Already have an account?{" "}
            <span onClick={() => setToggleLogin(true)} className="text-blue-900 cursor-pointer font-semibold">Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default RegistartionForm;
