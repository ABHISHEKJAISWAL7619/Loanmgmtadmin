"use client";
import React from "react";
import { MoreVertical } from "lucide-react";

const notifications = [
  {
    id: 1,
    name: "Abhishek Jaiswal",
    message: "You have a new task assigned.",
    time: "15 hr ago",
    img: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Amarjeet Verma",
    message: "Document uploaded successfully.",
    time: "12 hr ago",
    img: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Arun Chakravarti",
    message: "Profile updated successfully.",
    time: "10 hr ago",
    img: "https://i.pravatar.cc/40?img=3",
  },
];

const Notifications = () => {
  return (
    <div className="w-full bg-white p-6 shadow rounded">
      {/* Previous Button */}
      <button className="mb-6 text-blue-600 font-semibold hover:underline">
        ← Previous
      </button>

      {/* Notification List */}
      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="flex items-start justify-between border rounded p-4 shadow-sm hover:bg-gray-50"
          >
            {/* Profile + Content */}
            <div className="flex items-start gap-4">
              <img
                src={notif.img}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-black">{notif.name}</p>
                <p className="text-sm text-gray-600">{notif.message}</p>
                <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
              </div>
            </div>

            {/* 3-dot Icon */}
            <MoreVertical className="text-gray-500 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
