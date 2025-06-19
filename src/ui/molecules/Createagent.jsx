import React from "react";

const Createagent = () => {
  return (
    <div className="mt-16">
      <div className="bg-white p-6 rounded shadow max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcH8kditnw1ElmBpQsWdkHiukx1XEDg_JGig&s"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            Agent Profile
          </h2>
        </div>

        {/* First Name & Last Name */}
        <div className="flex justify-center gap-8 mb-5">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-[369.47px] h-[52px] rounded border border-gray-400 px-3"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-[369.47px] h-[52px] rounded border border-gray-400 px-3"
            />
          </div>
        </div>

        {/* Email & Phone Number */}
        <div className="flex justify-center gap-8 mb-5">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-[369.47px] h-[52px] rounded border border-gray-400 px-3"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-[369.47px] h-[52px] rounded border border-gray-400 px-3"
            />
          </div>
        </div>

        {/* DOB & Gender & Agent Type */}
        <div className="flex justify-center gap-4 mb-5">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-[245.47px] h-[52px] rounded border border-gray-400 px-3"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Gender</label>
            <select className="w-[245.47px] h-[52px] rounded border border-gray-400 px-3">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Agent Type</label>
            <select className="w-[245.47px] h-[52px] rounded border border-gray-400 px-3">
              <option value="">Select agent type</option>
              <option value="field">Field Agent</option>
              <option value="tele">Tele Agent</option>
            </select>
          </div>
        </div>

        {/* ID & Password */}
        <div className="flex justify-center gap-8 mb-5">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">ID</label>
            <input
              type="text"
              placeholder="Enter ID"
              className="w-[369.47px] h-[52px] rounded border border-gray-400 px-3"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-[369.47px] h-[52px] rounded border border-gray-400 px-3"
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
  );
};

export default Createagent;
