import Button from "../Elements/Button/index";
import { SlArrowLeftCircle } from "react-icons/sl";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
    const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center bg-primary">
      <div className="container mx-auto items-center px-4 justify-center max-w-lg shadow-lg rounded-2xl bg-white relative">
        {/* BACK BUTTON */}
        <Button className="absolute top-12 left-6 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
          <SlArrowLeftCircle className="w-[30px] h-[30px] text-white bg-secondary rounded-3xl mt-4" />
        </Button>
        <div className="w-full bg-white px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-black font-inter mb-8 text-primary">{title}</h1>
          {children}
          <p className="text-center text-sm text-slate-600">
            {type === "login" ? "Don't have an account? " : "Have an account? "}
            {type === "login" && (
              <Link to="/register" className="text-primary font-bold">
                Sign Up
              </Link>
            )}
            {type === "register" && (
              <Link to="/login" className="text-primary font-bold">
                Login
              </Link>
            )}
        </p>
        </div>
      </div>
    </div>

  );
};

export default AuthLayouts;