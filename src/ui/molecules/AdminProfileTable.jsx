import {
  ChevronDown,
  Eye,
  Filter,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

const AdminProfileTable = () => {
  const rows = [
    {
      id: "L001",
      Name: "Abhishek Jaiswal",
      type: "Home Loan",
      status: "Processing",
    },
    {
      id: "L002",
      Name: "Abhishek Jaiswal",
      type: "Car Loan",
      status: "Approved",
    },
    {
      id: "L003",
      Name: "Abhishek Jaiswal",
      type: "Personal Loan",
      status: "Missing Document",
    },
    {
      id: "L004",
      Name: "Abhishek Jaiswal",
      type: "Business Loan",
      status: "Processing",
    },
    {
      id: "L005",
      Name: "Abhishek Jaiswal",
      type: "Education Loan",
      status: "Approved",
    },
    {
      id: "L006",
      Name: "Abhishek Jaiswal",
      type: "Home Loan",
      status: "Missing Document",
    },
    {
      id: "L007",
      Name: "Abhishek Jaiswal",
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
      <table className="min-w-full text-sm  border border-gray-200">
        <thead className="bg-gray-100 text-gray-600 uppercase">
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
          <tr>
            <th className="p-3">
              <input type="checkbox" />
            </th>
            <th className="p-3">ID</th>
            <th className="p-3">NAme</th>

            <th className="p-3">Loan Type</th>
            <th className="p-3">Request</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody className=" text-left text-gray-700">
          {rows.map((row, index) => (
            <tr key={index} className="border-t h-[60px] border-gray-200">
              <td className="p-3">
                <input type="checkbox" />
              </td>
              <td className="p-3">{row.id}</td>
              <td className="p-3">{row.Name}</td>
              {/* <td className="p-3">{row.client}</td> */}
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
                  <MoreHorizontal />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProfileTable;
