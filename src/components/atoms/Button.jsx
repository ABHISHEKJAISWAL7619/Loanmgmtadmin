const Button = ({ label, icon, className }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 md:py-2 py-2 font-semibold  rounded cursor-pointer ${
        className ? className : "bg-primary text-white"
      }`}
    >
      {icon && <i className={`${icon} ri-lg`}></i>}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
