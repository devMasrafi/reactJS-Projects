const Button = ({ className, children, onClick }) => {
  return (
    <button
    onClick={onClick}
      className={` px-10 py-2 rounded-lg capitalize tracking-wider font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
