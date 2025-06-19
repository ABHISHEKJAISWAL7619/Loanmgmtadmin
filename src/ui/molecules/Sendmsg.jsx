"use client";
import React from "react";

const Sendmsg = () => {
  return (
    <div className="bg-white w-full p-6 shadow rounded">
      <div className="flex flex-wrap lg:flex-nowrap items-start gap-8">
        {/* Left Inputs */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-[370px] h-[82px] rounded border border-gray-400 px-3"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-[370px] h-[82px] rounded border border-gray-400 px-3"
            />
          </div>
        </div>

        {/* Textarea */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Message</label>
          <textarea
            placeholder="Enter your message"
            className="w-[421px] h-[215px] rounded border border-gray-400 px-3 py-2 resize-none"
          ></textarea>
        </div>

        {/* Send Button */}
        <div className="pt-[25px]">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Send Msg
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sendmsg;
