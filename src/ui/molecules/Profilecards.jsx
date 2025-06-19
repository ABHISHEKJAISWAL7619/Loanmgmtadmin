import React from "react";
import StatsCard from "./StatsCard";
import Report from "./Report";

const Profilecards = () => {
  const stats = [
    {
      title: "Missing Documents",
      span: "trained",
      icon: "/icon/icon.svg",
      count: "24",
      growth: "8.5",
    },
    {
      title: "Success Loans",
      span: "",
      icon: "/icon/icon.svg",
      count: "245",
      growth: "1.3",
    },
    {
      title: "Processing Loans",
      span: "theory",
      icon: "/icon/icon.svg",
      count: "32",
      growth: "4.3",
      timeline: "yesterday",
    },
    {
      title: "Total Loans",
      span: "",
      icon: "/icon/progress.svg",
      count: "85%",
      growth: "1.8",
      timeline: "yesterday",
    },
  ];
  return (
    <div className="bg-[#f1f5f9]">
      <section className="space-y-4 mb-5 mt-16 ">
        <div className="grid lg:grid-cols-4 ">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </section>
      <div className="shadow">
        <Report />
      </div>
    </div>
  );
};

export default Profilecards;
