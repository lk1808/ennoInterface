"use client";
import { useState } from "react";
import ennoLogo from "../tools/image/ennomart-logo.svg"
import Link from "next/link";
import Header from "@/components/home/Header";
import { IoIosSearch } from "react-icons/io";
import categories from "../tools/jsonData/categories.json"
import { FaUtensils, FaHotel, FaSpa, FaCouch, FaHeart, FaBook, FaCar, FaHospital, FaTools, FaPaw, FaBed, FaBuilding, FaTooth, FaDumbbell, FaUserTie, FaCalendarAlt, FaBoxes, FaTruck } from 'react-icons/fa';




export default function Home() {
  // const [isSearch,setIsSearch] = useState(true)
  return (
    <div>
      <Header />
      <section className="px-20 py-10 bg-white">
        <div>
          <h2 className="text-xl font-bold mb-2 text-black">
            Search Across India
          </h2>

          <div className="relative w-fit">
            <input type="text"
              placeholder="Search..."></input>
            <button
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
            >
              <IoIosSearch />
            </button>
          </div>

        </div>
      </section>
      <section className="px-20 py-10 ">
        <div className="grid grid-cols-8 gap-5 w-full">
          {categories?.data?.map((category, index) => {
            const catIcon = category.icon;
            return (
              <div className=" border rounded-md bg-white cursor-pointer p-4 flex justify-center " key={index}>
                <catIcon size={30}/>
                <p className="text-sm text-center">{category.name}</p>
              </div>
            );
          })}
        </div>
        
      </section >
    </div>

  );
}
