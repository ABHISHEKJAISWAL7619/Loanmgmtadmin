import { ChevronDown, Eye, Filter, Pencil, Trash2 } from "lucide-react";

const Table = () => {
  const rows = [
    {
      id: "L001",
      agent: "Abhishek Jaiswal",
      client: "Rahul Singh",
      type: "Home Loan",
      status: "Processing",
    },
    {
      id: "L002",
      agent: "Anjali Sharma",
      client: "Suresh Yadav",
      type: "Car Loan",
      status: "Approved",
    },
    {
      id: "L003",
      agent: "Rohit Mehta",
      client: "Neha Verma",
      type: "Personal Loan",
      status: "Missing Document",
    },
    {
      id: "L004",
      agent: "Kunal Das",
      client: "Pooja Patel",
      type: "Business Loan",
      status: "Processing",
    },
    {
      id: "L005",
      agent: "Sneha Rathi",
      client: "Vikram Rana",
      type: "Education Loan",
      status: "Approved",
    },
    {
      id: "L006",
      agent: "Nikhil Sinha",
      client: "Aarti Yadav",
      type: "Home Loan",
      status: "Missing Document",
    },
    {
      id: "L007",
      agent: "Divya Sharma",
      client: "Manoj Rawat",
      type: "Car Loan",
      status: "Processing",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "Missing Document":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="overflow-x-auto w-[1182px] bg-white rounded-lg shadow">
      <table className="min-w-full text-sm border border-gray-200">
        <thead className="bg-gray-100 text-gray-600 uppercase">
          {/* First Row - Custom Header Row for icons */}
          <tr>
            <th className="p-0" colSpan="7">
              <div className="flex items-center justify-between bg-white h-[60px] w-full shadow-sm px-3">
                {/* Left: checkbox + dropdown icon */}
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>

                {/* Right: filter + dropdown icon */}
                <div className="flex gap-3">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </th>
          </tr>

          {/* Second Row - Table Headers */}
          <tr>
            <th className="p-3"></th>
            <th className="p-3">ID</th>
            <th className="p-3">Agent Name</th>
            <th className="p-3">Client Name</th>
            <th className="p-3">Loan Type</th>
            <th className="p-3">Request</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody className="text-left text-gray-700">
          {rows.map((row, index) => (
            <tr key={index} className="border-t h-[60px] border-gray-200">
              <td className="p-3">
                <input type="checkbox" />
              </td>
              <td className="p-3">{row.id}</td>
              <td className="p-3">{row.agent}</td>
              <td className="p-3">{row.client}</td>
              <td className="p-3">{row.type}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    row.status
                  )}`}
                >
                  {row.status}
                </span>
              </td>
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-500 cursor-pointer" />
                  <Pencil className="w-4 h-4 text-green-500 cursor-pointer" />
                  <Trash2 className="w-4 h-4 text-red-500 cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
