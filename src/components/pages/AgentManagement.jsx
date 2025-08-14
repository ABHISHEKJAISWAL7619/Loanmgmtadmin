"use client"
import Link from "next/link";
import SearchBar from "../molecules/SearchBar";
import Button from "../atoms/Button";
import AgentManagementTable from "../molecules/AgentManagementTable";

const AgentManagement = () => {
  return (
    <div className="mt-16">
     <div className="flex flex-col md:flex-row  gap-5 w-full mb-6 justify-between items-start sm:items-center">
        <SearchBar placeholder="Search by name and email address" />
        <Link href="/craete-agent">
          <Button label="Add New Agent"/>
        </Link>
      </div>
      <AgentManagementTable />
    </div>
  );
};

export default AgentManagement;
