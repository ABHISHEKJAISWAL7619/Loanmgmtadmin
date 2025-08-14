"use client";
import React from "react";
import { MoreHorizontal, FileText } from "lucide-react";

const notifications = [
  {
    id: 1,
    name: "Abhishek Ghosh",
    message: "Message sent to Abhishek Ghosh to update pending loans!",
    time: "15h",
    img: "https://i.pravatar.cc/40?img=1",
    type: "text",
  },
  {
    id: 2,
    name: "Jerome Bell",
    message: "Demo File.pdf",
    size: "2.2 MB",
    time: "15h",
    img: "https://i.pravatar.cc/40?img=2",
    type: "file",
  },
  {
    id: 3,
    name: "Jane Cooper",
    message: "Message sent to Abhishek Ghosh to update pending loans!",
    time: "15h",
    img: "https://i.pravatar.cc/40?img=3",
    type: "text",
  },
  {
    id: 4,
    name: "Marvin McKinney",
    message: "Demo File.pdf",
    size: "2.2 MB",
    time: "15h",
    img: "https://i.pravatar.cc/40?img=4",
    type: "file",
  },
];

const Notifications = () => {
  return (
    <div className="w-full bg-white px-4 md:px-6 pb-6 shadow rounded">
      <button className="mb-3 text-gray-900 font-bold  text-lg">
         Previous
      </button>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="flex justify-between items-start border-t border-gray-400 py-4 hover:bg-gray-50"
          >
            {/* Left: Avatar + Content */}
            <div className="flex gap-4">
              <img
                src={notif.img}
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="space-y-1">
                <p className="text-sm font-bold text-gray-900">
                  {notif.name}
                </p>

                {notif.type === "file" ? (
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FileText className="w-4 h-4 text-gray-600" />
                    <span>{notif.message}</span>
                    <span className="text-xs text-gray-800">({notif.size})</span>
                  </div>
                ) : (
                  <p className="text-sm text-gray-900">{notif.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-end justify-between h-full">
              <p className="text-xs text-gray-900">{notif.time}</p>
              <MoreHorizontal className="text-gray-700 cursor-pointer mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
