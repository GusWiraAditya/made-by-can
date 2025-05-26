const Button = ({ children, classname = "", ...rest }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${classname}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
