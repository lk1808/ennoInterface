"use client";
import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import RegistartionForm from "@/components/RegistartionForm";



export default function Login() {
  const [toggleLogin, setToggleLogin] = useState(true)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }


  return (
    <div className="h-[100vh] w-[100vw] items-center flex justify-center  px-5 lg:px-0">
      <div className=" bg-white h-full w-full shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-blue-900 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex justify-center items-center">
          {toggleLogin ?
            <LoginForm togglePasswordVisibility={togglePasswordVisibility} isPasswordVisible={isPasswordVisible} setToggleLogin={setToggleLogin} /> :
            <RegistartionForm togglePasswordVisibility={togglePasswordVisibility} isPasswordVisible={isPasswordVisible} setToggleLogin={setToggleLogin} />}
        </div>
      </div>
    </div>
  );
}
