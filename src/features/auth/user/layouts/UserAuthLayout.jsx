import Button from "../../../../components/ui/Button";
import { motion } from "framer-motion"; // yang benar dari "framer-motion", bukan "motion/react"
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import logoPrim from "../../../../assets/logo/mbc-primary.png";
import logo from "../../../../assets/logo/mbc-putih.png";
import background from "../../../../assets/background/background.jpeg";

const AuthLayouts = (props) => {
  const { children, title, type } = props;

  return (
    <>
      {/* NAVBAR */}
      <nav className="px-10 md:px-20 py-3 flex items-center justify-between z-10 relative">
        <Link to={'/'} className="w-2/6 md:w-2/12 lg:w-1/12">
        <img src={logoPrim} alt="mbc"  /></Link>
        <p className="text-primary">Butuh Bantuan?</p>
      </nav>

      {/* PARALLAX BACKGROUND */}
      <div
        className="relative py-16 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(109,78,46,0.8), rgba(109,78,46,0.8)), url(${background})`,
        }}
      >
        {/* Content */}
        <div className="flex items-center justify-center w-full">
          {/* Form Login/Register */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.7 }}
            className="max-w-md px-8 py-6 container mx-auto items-center justify-center shadow-xl rounded bg-neutral-50"
          >
            <h1 className="text-2xl text-center font-bold font-inter mb-4 text-primary">
              {title}
            </h1>

            {children}

            <p className="text-center text-sm text-slate-600 mt-4">
              {type === "login"
                ? "Don't have an account? "
                : "Have an account? "}
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
          </motion.div>
        </div>
      </div>
      <footer className="bg-white text-primary text-sm">
        <div className="max-w-6xl mx-auto px-4 py-10 text-center">
          {/* Social Media */}
          <div className="mb-6">
            <p className="font-bold mb-2">FOLLOW US ON</p>
            <div className="flex justify-center gap-4 text-2xl">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="TikTok">
                <FaTiktok />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Copyright & Policies */}
          <div className="text-xs sm:text-sm mt-4">
            <p className="mb-2 font-semibold">
              ©2025 MBC | All Right Reserved.
            </p>
            <p className="font-semibold space-x-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Return & Refund Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AuthLayouts;
