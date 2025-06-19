"use client";
import data from "../../../public/db/data.json";
import Link from "next/link";
import Image from "next/image";
import DashboardLink from "../molecules/DashboardLink";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { navigation } = data;
  const path = ""; // use pathname for real app

  return (
    <div
      className={`fixed top-0 left-0 z-40 transform bg-[#f1f5f9] shadow transition-transform duration-300 md:relative md:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } w-[243px] h-screen`}
    >
      <nav className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex justify-center pt-3 pb-2">
          <Link href="/">
            <Image
              alt="logo"
              className="w-[106px]"
              src="/img/logo.png"
              width={200}
              height={100}
            />
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col overflow-y-auto px-2">
          {navigation?.map((item, index) => (
            <li key={index}>
              <DashboardLink
                active={path === item.route}
                route={item.route}
                label={item.label}
                heroIcon={item.icon}
                handleClick={() => setIsSidebarOpen(false)}
                subMenu={item.subMenu}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
