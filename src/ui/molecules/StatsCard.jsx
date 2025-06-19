import Image from "next/image";

const StatsCard = ({ title, icon, count }) => {
  const selectOptions = [{ label: "30 Days", value: "30" }];

  return (
    <div className="bg-white w-[258px] h-[160px] px-6 py-4 flex flex-col justify-between rounded-[8px] shadow-lg">
      {/* Top Section: Title + Select */}
      <div className="flex justify-between items-center">
        <p className="capitalize text-tertiary text-xl font-semibold">
          {title}
        </p>
        <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
          {selectOptions.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Bottom Section: Icon + Count */}
      <div className="flex gap-5 mb-2 items-center">
        <Image
          className="w-14 h-14"
          src={icon}
          alt="icon"
          width={56}
          height={56}
        />
        <span className="text-secondary text-2xl font-bold">{count}</span>
      </div>
    </div>
  );
};

export default StatsCard;
