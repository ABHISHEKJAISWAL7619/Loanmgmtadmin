// Notification.jsx
"use client";
import React from "react";
import Sendmsg from "../molecules/Sendmsg";
import Notifications from "../molecules/Notifications";

const Notification = () => {
  return (
    <div className="mt-16 px-6">
      <div className="flex flex-col gap-10">
        <Sendmsg />
        <h1 className="text-2xl font-extralight">Notifications</h1>
        <Notifications />
      </div>
    </div>
  );
};

export default Notification;
