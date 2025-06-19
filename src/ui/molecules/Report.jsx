import Image from "next/image";
import React from "react";

const Report = () => {
  return (
    <div>
      <div className="w-[1182px]  mb-5 shadow bg-white h-[64px] p-3  rounded-[4px] flex justify-between items-center">
        {/* Left Content */}
        <div>Report</div>

        {/* Right Content */}
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-white shadow flex items-center justify-center h-8 w-28 gap-2">
            <Image
              className="w-5 h-5"
              src="/icon/Frame copy 2.svg"
              alt="icon"
              width={20}
              height={20}
            />
            <span className="text-sm font-bold">Start Date</span>
          </button>
          <button className="bg-white shadow flex items-center justify-center h-8 w-28 gap-2">
            <Image
              className="w-5 h-5"
              src="/icon/Frame copy 2.svg"
              alt="icon"
              width={20}
              height={20}
            />
            <span className="text-sm font-bold">End Date</span>
          </button>
          <button className="bg-[#0EA5E9] shadow flex items-center justify-center h-8 w-28 gap-2">
            Export Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
