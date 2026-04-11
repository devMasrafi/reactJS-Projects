const Button = ({ className, children }) => {
  return (
    <button
      className={` px-10 py-2 rounded-lg capitalize tracking-wider font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
