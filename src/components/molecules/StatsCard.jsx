import Image from "next/image";
import Select from "../atoms/Select";

const StatsCard = ({
  title = "Title",
  icon,
  count = "0",
  selectOptions = [{ label: "30 Days", value: "30" }],
  selectedValue,
  onSelectChange,
  isLast = false, 
  className = "",
}) => {
  return (
    <div
      className={`bg-white w-full h-[160px] px-5 py-4 flex flex-col justify-between rounded-md shadow ${className}`}
    >
      <div className="flex justify-between items-center">
        <p className="capitalize text-gray-500 text-sm tracking-wide font-bold">
          {title}
        </p>

        {isLast ? (
          <span className="text-gray-500  text-[1rem]">12</span>
        ) : (
          <Select
            name={`${title}-select`}
            options={selectOptions}
            value={selectedValue}
            onChange={onSelectChange}
            className="w-auto"
          />
        )}
      </div>

      <div className="flex flex-col gap-3 ">
        <div className="flex gap-5 items-center">
          {icon && (
            <Image
              className="w-13 h-13 object-contain"
              src={icon}
              alt="icon"
              width={56}
              height={56}
            />
          )}
          <span className="text-gray-500 text-4xl">{count}</span>
        </div>

        {isLast && (
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default StatsCard;
