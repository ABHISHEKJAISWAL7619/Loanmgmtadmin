"use client";
import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";

const AdminProfile = () => {
  const router=useRouter();

  return (
    <div className="bg-[#f1f5f9] min-h-screen py-5 pt-10 md:pt-4 ">
      <div className="max-w-6xl mx-auto bg-white p-4 rounded-md mt-6 sm:mt-10 shadow">
        <div className="flex justify-between items-start mb-8">
         <i onClick={()=>router.back()} className="ri-arrow-go-back-line text-xl font-light cursor-pointer"></i>

          

          {/* Buttons on right */}
          <div className="flex gap-2 sm:gap-3 mt-2">
           <Button
              label="Delete"
              className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 rounded"
            />
            <Button
              label="Edit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded"
            />
           
          </div>
        </div>

        <div className="flex flex-col items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcH8kditnw1ElmBpQsWdkHiukx1XEDg_JGig&s"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <h2 className="mt-3 text-lg font-medium text-primary cursor-pointer">Edit Photo</h2>
          </div>

        <div className="bg-white w-full md:w-8/12 mx-auto  grid md:grid-cols-2 gap-8 pb-4 pt-6">
            <Input
              label="First Name"
              type="text"
              placeholder="Enter first name"
              icon="ri-user-line"
            />
            <Input
              label="Last Name"
              type="text"
              placeholder="Enter last name"
              icon="ri-user-line"
            />
      
            <Input
              label="Email"
              type="email"
              placeholder="Enter email"
              icon="ri-mail-line"
            />
            <Input
              label="Phone Number"
              type="tel"
              placeholder="Enter phone number"
              icon="ri-phone-line"
            />

            {/* Date of Birth */}
            <div className="flex flex-col w-full ">
              <label className="text-sm font-medium mb-1">Date of Birth</label>
              <div className="relative">
                <i className="ri-calendar-line ri-lg text-gray-700 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                <input
                  type="date"
                  className="w-full h-[45px] border border-gray-300 rounded pl-8 pr-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Gender */}
            <div className="flex flex-col ">
              <label className="text-sm font-medium mb-1">Gender</label>
              <div className="relative">
                <i className="ri-user-line ri-lg text-gray-700 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                <select className="md:w-44 w-full h-[45px] border border-gray-300 rounded pl-8 pr-2 focus:outline-none">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
        </div>
         <div className="flex md:justify-center justify-end py-4">
            <Button
              label="Save"
              className="bg-blue-700 hover:bg-blue-700 text-white px-8 md:px-12 py-2.5 md:py-2.5 rounded text-[1rem]"
            />
          </div>
      </div>
    </div>
  );
};

export default AdminProfile;
