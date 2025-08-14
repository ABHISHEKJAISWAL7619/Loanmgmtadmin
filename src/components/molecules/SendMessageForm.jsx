"use client";
import React from "react";

const SelectField = ({ label, options = [] }) => {
  return (
    <div className="flex flex-col w-full md:w-[300px]">
      <label className="text-sm font-medium mb-1">{label}</label>
      <select className="border border-gray-300 rounded px-3 py-2 w-full bg-white focus:outline-none ">
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const TextAreaField = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col w-full md:w-[400px]">
      <label className="text-sm font-medium mb-1">{label}</label>
      <textarea
        placeholder={placeholder}
        className="border border-gray-300 rounded px-3 py-2 w-full h-[150px] resize-none bg-gray-50 focus:outline-none "
      ></textarea>
    </div>
  );
};

const FileUpload = ({ label }) => {
  return (
    <div className="flex flex-col w-full md:w-[300px]">
      <label className="text-sm font-medium mb-1">{label}</label>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder={label}
          className="border border-gray-300 rounded px-3 py-2 w-full bg-white focus:outline-none "
          readOnly
        />
        <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition focus:outline-none ">
          Upload
        </button>
      </div>
    </div>
  );
};

const SendMessageForm = () => {
  return (
    <div className=" p-4 md:p-6 flex flex-col md:flex-row flex-wrap gap-8 items-start">
      <div className="flex flex-col gap-4 w-full md:w-auto">
        <SelectField
          label="Agent Name"
          options={[{ label: "Nidhi Kumari", value: "nidhi" }]}
        />
        <FileUpload label="Attachments" />
      </div>
      <TextAreaField
        label="Message"
        placeholder="Type your message here..."
      />
      <div className="md:pt-6 w-full md:w-auto">
        <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition focus:outline-none  cursor-pointer">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default SendMessageForm;
