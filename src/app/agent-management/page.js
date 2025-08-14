import AgentManagement from "@/components/pages/AgentManagement";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <MainLayout>
        <AgentManagement />
      </MainLayout>
    </div>
  );
};

export default page;
