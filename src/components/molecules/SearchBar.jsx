"use client"
const SearchBar = ({
  placeholder = "Search...",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`flex items-center md:w-[300px] w-[320px]  md:py-2 py-2.5 pl-5 gap-2 rounded-full shadow bg-white ${className}`}
    >
      <i className="ri-search-line text-gray-400 text-[16px]" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent outline-none text-sm w-full"
        {...props}
      />
    </div>
  );
};

export default SearchBar;
