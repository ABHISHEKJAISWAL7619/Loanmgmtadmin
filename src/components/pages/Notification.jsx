"use client";
import React from "react";
import SendMessageForm from "../molecules/SendMessageForm";
import Notifications from "../molecules/Notifications";

const Notification = () => {
  return (
    <div className="mt-16  bg-white rounded-lg">
      <div className="flex flex-col gap-10">
        <SendMessageForm />
        <h1 className="text-xl font-bold px-6">Notifications</h1>
        <Notifications />
      </div>
    </div>
  );
};

export default Notification;
