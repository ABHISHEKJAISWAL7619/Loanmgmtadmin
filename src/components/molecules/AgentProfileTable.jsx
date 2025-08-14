"use client";
import { useState } from "react";

const AgentProfileTable = () => {
  const [selected, setSelected] = useState([]);

  const rows = [
    { id: 7, agent: "Jacob Jones", type: "Loan", status: "Approved" },
    { id: 6, agent: "Jenny Wilson", type: "Credit Card", status: "Missing Document" },
    { id: 5, agent: "Wade Warren",type: "Insurance", status: "Missing Document" },
    { id: 4, agent: "Brooklyn Simmons", type: "Credit Card", status: "Missing Document" },
    { id: 3, agent: "Guy Hawkins",type: "Loan", status: "Missing Document" },
    { id: 2, agent: "Jane Cooper", type: "Insurance", status: "Approved" },
    { id: 1, agent: "Theresa Webb", type: "Credit Card", status: "Processing" },
  ];

  const getStatus = (status) => {
    switch (status) {
      case "Approved":
        return { text: "text-green-600", icon: "ri-checkbox-circle-line" };
      case "Processing":
        return { text: "text-yellow-600", icon: "ri-error-warning-line" };
      case "Missing Document":
        return { text: "text-red-600", icon: "ri-close-circle-line" };
      default:
        return { text: "text-gray-600", icon: "" };
    }
  };

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selected.length === rows.length) {
      setSelected([]);
    } else {
      setSelected(rows.map((r) => r.id));
    }
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
      <table className="md:min-w-full w-[900px] text-sm">
        <thead>
          <tr>
            <th colSpan="7" className="bg-white px-4 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={toggleSelectAll}
                >
                  <i
                    className={`${
                      selected.length === rows.length
                        ? "ri-checkbox-line"
                        : "ri-checkbox-blank-line"
                    } text-gray-400 text-lg font-light`}
                  ></i>
                  <i className="ri-arrow-down-s-line text-gray-500 text-lg font-light"></i>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-filter-line text-gray-500 text-lg font-light cursor-pointer"></i>
                  <i className="ri-arrow-down-s-line text-gray-500 text-lg font-light cursor-pointer"></i>
                </div>
              </div>
            </th>
          </tr>

          {/* Header Row */}
          <tr className="bg-gray-50 text-gray-400 capitalize text-xs">
            <th className="py-3"></th>
            <th className="py-3 text-center text-gray-400">ID</th>
            <th className="py-3 text-center text-gray-400">Name</th>
            <th className="py-3 text-center text-gray-400">Loan Type</th>
            <th className="py-3 pr-6 text-end text-gray-400">Loan Request</th>
          </tr>
        </thead>

        <tbody className="text-gray-700">
          {rows.map(({ id, agent, type, status }) => {
            const { text, icon } = getStatus(status);
            return (
              <tr key={id} className="border-b border-gray-200">
                <td className="py-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(id)}
                    onChange={() => toggleSelect(id)}
                    className="cursor-pointer"
                  />
                </td>
                <td className="p-3 text-blue-600 font-medium cursor-pointer">{id}</td>
                <td className="p-3">{agent}</td>
                <td className="p-3">{type}</td>
                <td className="py-3 flex items-center justify-end gap-3 text-gray-400">
                  <span className={`${text} font-medium`}>{status}</span>
                  <i className={`${icon} ${text} text-lg`}></i>
                  <i className="ri-more-fill cursor-pointer text-lg"></i>
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="7" className="px-4 py-2 text-xs text-gray-500 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="cursor-not-allowed text-gray-400">Previous</span>
                <span>1-7 of 7</span>
                <span className="cursor-not-allowed text-gray-400">Next</span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AgentProfileTable;
