"use client";

import Report from "../molecules/Report";
import StatsCard from "../molecules/StatsCard";
import Table from "../molecules/Table";
import Link from "next/link";
import SearchBar from "../molecules/SearchBar";
import Button from "../atoms/Button"; 

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
      title: "Total Loan Submitted",
      span: "",
      count: "85%",
      growth: "1.8",
      timeline: "yesterday",
    },
  ];

  return (
    <>
      <section className="space-y-4 mb-5 mt-16 bg-[#f1f5f9]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              {...stat}
              hideSelect={index === stats.length - 1}
              showRange={index === stats.length - 1}
              isLast={index === stats.length - 1}
            />
          ))}
        </div>
      </section>

      <Report />

      <span className="block text-xl md:text-2xl text-[#64748B] mb-5 font-extralight">
        Pending Loans
      </span>

      <div className="flex flex-col md:flex-row  gap-5 w-full mb-6 justify-between items-start sm:items-center">
        <SearchBar placeholder="Search by name and email address" />
        <Link href="/craete-agent">
          <Button label="Add New Agent" className="text-sm bg-primary text-white py-2.5 md:py-2.5 " />
        </Link>
      </div>

      <Table />
    </>
  );
};

export default HomePage;
