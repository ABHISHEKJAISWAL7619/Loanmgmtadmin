"use client";
import React from "react";
import Profilecards from "../molecules/Profilecards";
import AdminProfileTable from "../molecules/AdminProfileTable";

const Adminprofile = () => {
  const inputStyle =
    "w-[369.47px] h-[52px] rounded border-[0.6px] border-gray-400 px-3";
  const labelStyle = "text-sm font-medium mb-1";

  return (
    <div className="bg-[#f1f5f9] ">
      <Profilecards />

      <div className="max-w-6xl mx-auto bg-white p-6  rounded-md mt-10">
        {/* Row with buttons right & profile center */}
        <div className="flex justify-between items-start mb-8">
          {/* Empty div to take space on left */}
          <div className="w-[120px]" />

          {/* Profile in center */}
          <div className="flex flex-col items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcH8kditnw1ElmBpQsWdkHiukx1XEDg_JGig&s"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <h2 className="mt-3 text-lg font-semibold">Add Photo</h2>
          </div>

          {/* Buttons on right */}
          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Edit
            </button>
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
              Block
            </button>
          </div>
        </div>
        <div className="bg-white">
          {/* First Name & Last Name */}
          <div className="flex justify-center gap-8 mb-5">
            <div className="flex flex-col">
              <label className={labelStyle}>First Name</label>
              <input
                type="text"
                placeholder="Enter first name"
                className={inputStyle}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelStyle}>Last Name</label>
              <input
                type="text"
                placeholder="Enter last name"
                className={inputStyle}
              />
            </div>
          </div>

          {/* Email & Phone Number */}
          <div className="flex justify-center gap-8 mb-5">
            <div className="flex flex-col">
              <label className={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className={inputStyle}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelStyle}>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className={inputStyle}
              />
            </div>
          </div>

          {/* DOB & Gender */}
          <div className="flex justify-center gap-8 mb-5">
            <div className="flex flex-col">
              <label className={labelStyle}>Date of Birth</label>
              <input
                type="date"
                className="w-[370px] h-[52px] rounded border-[0.6px] border-gray-400 px-3"
              />
            </div>
            <div className="flex flex-col">
              <label className={labelStyle}>Gender</label>
              <select className="w-[370px] h-[52px] rounded border-[0.6px] border-gray-400 px-3">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          {/* ID & Password */}
          <div className="flex justify-center gap-8 mb-5">
            <div className="flex flex-col">
              <label className={labelStyle}>ID</label>
              <input
                type="text"
                placeholder="Enter ID"
                className={inputStyle}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelStyle}>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className={inputStyle}
              />
            </div>
          </div>

          {/* Create Button */}
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition">
              Create
            </button>
          </div>
        </div>
      </div>

      <AdminProfileTable />
    </div>
  );
};

export default Adminprofile;
