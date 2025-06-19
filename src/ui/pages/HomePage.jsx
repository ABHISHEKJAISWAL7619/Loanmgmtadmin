"use client";

import Image from "next/image";
import Report from "../molecules/Report";
import StatsCard from "../molecules/StatsCard";
import Table from "../molecules/Table";
import Link from "next/link";

const HomePage = () => {
  const stats = [
    {
      title: "Total Agents",
      span: "trained",
      icon: "/icon/icon.svg",
      count: "24",
      growth: "8.5",
    },
    {
      title: "Total Loan Approved",
      span: "",
      icon: "/icon/icon.svg",
      count: "245",
      growth: "1.3",
    },
    {
      title: "Total Loans",
      span: "theory",
      icon: "/icon/icon.svg",
      count: "32",
      growth: "4.3",
      timeline: "yesterday",
    },
    {
      title: "Total Loan Submited",
      span: "",
      icon: "/icon/progress.svg",
      count: "85%",
      growth: "1.8",
      timeline: "yesterday",
    },
  ];

  return (
    <div>
      <section className="space-y-4 mb-5 mt-16 bg-[#f1f5f9] ">
        <div className="grid lg:grid-cols-4 ">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </section>
      <Report />
      <span className="text-2xl text-[#64748B] mb-5 font-extralight">
        Pending Loans
      </span>
      <div className="flex w mt-5 w-[1182px] mb-6 justify-between">
        <div className="flex items-center w-[320px] h-[32px] py-1 pl-2 gap-3 rounded-full border border-gray-300 bg-white">
          <Image
            src="/icon/search.svg"
            alt="Search Icon"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
        <Link
          href="/craeteagent"
          className="w-[139px] h-[36px] px-4 py-2 rounded-[4px] bg-blue-600 text-white text-sm shadow"
        >
          Add New Agent
        </Link>
      </div>
      <Table />
    </div>
  );
};

export default HomePage;
