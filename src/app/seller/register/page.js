"use client";
import React, { useState } from "react";
import { PasswordHide, PasswordShow } from "@/tools/icon/passwordIcon";
import Link from "next/link";
import { postRegisterSeller } from "@/components/api/api";
import { toast } from "react-toastify";


const RegistartionFormSeller = ({ setToggleLogin, isPasswordVisible, togglePasswordVisibility }) => {

  const [registerForm, setregisterForm] = useState({ sellerName: "", primaryEmailId: "", primaryMobileNo: "", address: "", city: "", sellerCategory: "", website: "", companyName: "", panNumber: "", gstinNo: "", productOrServiceName: "", description: "", unitOfMeasure: "", rate: "" })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setregisterForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    postRegisterSeller(registerForm).then((data) => {
      toast('Successfully saved Seller registration data', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: "Bounce",
      });
    })
    // Perform further actions like form submission or API calls
  };

  return (
    <div className=" flex justify-center items-center bg-white h-[100vh] w-[100vw]">
      <div className=" flex flex-col items-center ">
        <div className="text-center">
          <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
            Sign up
          </h1>
          <p className="text-[12px] mt-3 text-gray-500">
            Hey enter your details to create your account
          </p>
        </div>
        <div className="w-full  mt-8">
          <div className="mx-auto  flex flex-col gap-4">
            <form className="grid grid-cols-2 gap-3 " onSubmit={handleRegister}>
              <input
                className=""
                type="text"
                name="sellerName"
                onChange={handleChange}
                placeholder="Enter seller name"
              />
              <input
                className=""
                type="email"
                name="primaryEmailId"
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <input
                className=""
                type="text"
                name="primaryMobileNo"
                onChange={handleChange}
                placeholder="Enter your mobile number"
              />
              <input
                className=""
                type="text"
                name="address"
                onChange={handleChange}
                placeholder="Enter your address"
              />
              <input
                className=""
                type="text"
                name="city"
                onChange={handleChange}
                placeholder="Enter your city"
              />
              <input
                className=""
                type="text"
                name="sellerCategory"
                onChange={handleChange}
                placeholder="Enter seller category"
              />
              <input
                className=""
                type="text"
                name="website"
                onChange={handleChange}
                placeholder="Enter website"
              />
              <input
                className=""
                type="text"
                name="companyName"
                onChange={handleChange}
                placeholder="Enter company name"
              />
              <input
                className=""
                type="text"
                name="panNumber"
                onChange={handleChange}
                placeholder="Enter PAN number"
              />
              <input
                className=""
                type="text"
                name="gstinNo"
                onChange={handleChange}
                placeholder="Enter GSTIN number"
              />
              <input
                className=""
                type="text"
                name="productOrServiceName"
                onChange={handleChange}
                placeholder="Enter product or service name"
              />
              <input
                className=""
                type="text"
                name="description"
                onChange={handleChange}
                placeholder="Enter description"
              />
              <input
                className=""
                type="text"
                name="unitOfMeasure"
                onChange={handleChange}
                placeholder="Enter unit of measure"
              />
              <input
                className=""
                type="number"
                name="rate"
                onChange={handleChange}
                placeholder="Enter rate"
              />
              <div className="grid col-span-2   justify-center ">
                <div className="w-[300px]">
                  <button className="btn-primary" type="submit">Submit</button>
                </div>

              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistartionFormSeller;
