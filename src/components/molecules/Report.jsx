import React from "react";

const Report = () => {
  return (
    <div className="w-full mb-5 border border-gray-200 bg-white p-3 rounded flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0">
      <div className="mb-3 md:mb-0 font-semibold md:font-medium text-lg md:text-xl text-black">
        Report
      </div>

      <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
        <div className="relative w-full md:w-auto">
          <i className="ri-calendar-line text-lg font-light absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
          <input
            type="date"
            placeholder="Start Date"
            className="w-full md:w-auto h-[40px] pl-8 border border-gray-300 rounded pr-2 focus:outline-none"
          />
        </div>

        <div className="relative w-full md:w-auto">
          <i className="ri-calendar-line text-lg font-light absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
          <input
            type="date"
            placeholder="End Date"
            className="w-full md:w-auto h-[40px] pl-8 border border-gray-300 rounded pr-2 focus:outline-none"
          />
        </div>

        <button className="bg-primary text-white rounded p-1 text-[0.8rem] font-bold tracking-wide cursor-pointer">
          Export Report
        </button>
      </div>
    </div>
  );
};

export default Report;
