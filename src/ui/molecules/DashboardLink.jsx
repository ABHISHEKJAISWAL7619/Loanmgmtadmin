"use client";
import Link from "next/link";
import { useState } from "react";

const DashboardLink = ({
  active = false,
  label = "Label",
  heroIcon,
  subMenu = [],
  route = "#",
  handleClick = () => {},
}) => {
  const [isSubMenOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    if (subMenu.length > 0) {
      setIsSubMenuOpen((prevState) => !prevState);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div
        onClick={toggleSubMenu}
        className={`flex items-center justify-between w-full px-4 h-14 rounded-md cursor-pointer transition-all duration-200 ${
          active ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-gray-700"
        }`}
      >
        <Link
          href={route}
          onClick={handleClick}
          className="flex items-center gap-3 w-full h-full"
        >
          <img src={heroIcon} alt="icon" className="w-5 h-5" />
          <span className="text-[18px]  font-extralight  text-[#64748B] capitalize truncate">
            {label}
          </span>
        </Link>

        {subMenu.length > 0 && (
          <span>
            <i
              className={`ri-lg ${
                isSubMenOpen ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"
              } ${active ? "text-white" : "text-gray-400"}`}
            ></i>
          </span>
        )}
      </div>

      {subMenu.length > 0 && isSubMenOpen && (
        <div className="flex flex-col gap-1 ms-4">
          {subMenu.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-500 hover:text-gray-700 hover:bg-amber-50 transition"
            >
              <i className={`${item.icon} ri-lg`}></i>
              <span className="capitalize">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardLink;
