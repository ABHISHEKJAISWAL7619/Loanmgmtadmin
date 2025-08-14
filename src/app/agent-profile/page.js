import MainLayout from "@/components/templates/MainLayout";
import AgentProfile from "@/components/pages/AgentProfile";
import React from "react";

const page = () => {
  return (
    <div>
      <MainLayout>
        <AgentProfile />
      </MainLayout>
    </div>
  );
};

export default page;
