"use client";

import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[58px] bg-white z-50 w-full shadow-sm">
      <div className="w-full h-full flex items-center justify-between px-4 md:px-8">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu (Mobile Only) */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="outline-none md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="font-nunito font-semibold text-[20px] md:text-[28px] lg:text-[36px] leading-none text-black">
            Logo
          </div>
        </div>

        {/* Right: Profile Section */}
        <div className="flex items-center gap-2 md:gap-3 pr-2 md:pr-4">
          <Link href="/admin-profile">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="profile"
              width={32}
              height={32}
              className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full object-cover"
            />
          </Link>

          <span className="text-xs md:text-sm font-medium text-[#475569] hidden sm:inline-block">
            Subhash Kumar
          </span>

          <Link href="/notifications">
            <Bell className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
