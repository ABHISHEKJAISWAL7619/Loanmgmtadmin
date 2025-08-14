"use client";

const Select = ({
  name,
  options = [],
  value,
  onChange,
  className = "",
  disabled = false,
}) => {
  return (
    <select
      name={name}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      className={`border border-gray-200 rounded px-2 md:py-0.5 py-1 text-xs outline-none text-gray-400 ${className}`}
    >
      {options.map((option, i) => {
        const val = option.value ?? option;
        const label = option.label ?? option;
        return (
          <option key={i} value={val} className="text-gray-400">
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
