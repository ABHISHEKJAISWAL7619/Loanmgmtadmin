// import { Table } from "lucide-react";
import React from "react";
import Table from "../molecules/Table";
import { Image, Search } from "lucide-react";
import Link from "next/link";

const AgentMgmt = () => {
  return (
    <div className="mt-16">
      <div className="flex w mt-5 w-[1182px] mb-14 justify-between">
        <div className="flex items-center w-[320px] h-[32px] py-1 pl-2 gap-3 rounded-full border border-gray-300 bg-white">
          <Search className="text-[#64748B]" />
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

export default AgentMgmt;
