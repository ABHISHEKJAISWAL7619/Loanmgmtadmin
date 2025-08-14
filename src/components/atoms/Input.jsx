const Input = ({ label, name, type = "text", placeholder, icon }) => {
  return (
    <div className="flex flex-col w-full gap-1">
      {label && (
        <label className="text-sm font-medium" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative w-full">
        {icon && (
          <i className={`${icon} ri-lg text-gray-700 absolute left-2  top-1/2 -translate-y-1/2 pointer-events-none`}></i>
        )}
        <input
          className={`w-full h-[45px] pl-${icon ? "8" : "2"} pr-2  border border-gray-200 rounded bg-white focus:outline-none placeholder-gray-900 text-gray-900`}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
