"use client";

import Report from "../molecules/Report";
import StatsCard from "../molecules/StatsCard";
import AgentProfileTable from "../molecules/AgentProfileTable";
import Profile from "../molecules/Profile";
import { useRouter } from "next/navigation";

const AgentProfile = () => {
  const router= useRouter();
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
      <section className="space-y-4 mb-5 mt-12 bg-[#f1f5f9]">
         <button className="mt-2">
          <i onClick={()=>router.back()} className="ri-arrow-go-back-line text-xl font-light cursor-pointer"></i>
         </button>

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

      <Profile/>

      <AgentProfileTable/>
    </>
  );
};

export default AgentProfile;
