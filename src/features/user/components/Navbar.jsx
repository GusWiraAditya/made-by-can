import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import logoPrim from "../../../assets/logo/mbc-primary.png";
import logo from "../../../assets/logo/mbc-putih.png";
import Button from "../../../components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-700 ${
          isHome
            ? isScrolled
              ? "bg-white shadow-md "
              : "bg-transparent"
            : "bg-white shadow-md"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-20 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={isHome ? (isScrolled ? logoPrim : logo) : logoPrim}
              alt="MBC"
              className="h-14 sm:h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 font-semibold">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  to={href}
                  className={`transition-all ${
                    isHome
                      ? location.pathname === href
                        ? isScrolled
                          ? "text-primary border-b-2 border-primary pb-1"
                          : "text-white border-b-2 border-white pb-1"
                        : isScrolled
                        ? "text-primary hover:border-b-2 hover:border-primary pb-1"
                        : "text-white hover:border-b-2 hover:border-white pb-1"
                      : location.pathname === href
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-primary hover:border-b-2 hover:border-primary pb-1"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Search & Login */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-wrap items-center justify-center">
              <FaSearch
                className={
                  isHome
                    ? isScrolled
                      ? "text-primary mr-2"
                      : "text-neutral-50 mr-2"
                    : "text-primary mr-2"
                }
              />
              <input
                type="text"
                placeholder="Search..."
                className={`bg-transparent border-b outline-none text-sm ${
                  isHome
                    ? isScrolled
                      ? "placeholder:text-primary border-primary text-primary"
                      : "placeholder:text-neutral-50 border-neutral-50 text-neutral-50"
                    : "placeholder:text-primary border-primary text-primary"
                }`}
              />
            </div>
            <form action="/login">
              <Button classname="bg-secondary text-white font-bold px-5 py-2 rounded hover:opacity-90">
                LOG IN
              </Button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50 flex items-center justify-center">
            <div className="flex items-center justify-center">
              <FaSearch
                className={
                  isHome
                    ? isScrolled
                      ? "text-primary mr-2"
                      : "text-neutral-50 mr-2"
                    : "text-primary mr-2"
                }
              />
              <input
                type="text"
                placeholder="Search..."
                className={`bg-transparent border-b outline-none text-sm max-w-32  ${
                  isHome
                    ? isScrolled
                      ? "placeholder:text-primary border-primary text-primary"
                      : "placeholder:text-neutral-50 border-neutral-50 text-neutral-50"
                    : "placeholder:text-primary border-primary text-primary"
                }`}
              />
            </div>
        
            <Button onClick={toggleMenu}>
              {isMenuOpen ? (
                <X
                  size={28}
                  className={isScrolled ? "text-primary" : "text-white"}
                />
              ) : (
                <Menu
                  size={28}
                  className={
                    isHome
                      ? isScrolled
                        ? "text-primary"
                        : "text-white"
                      : "text-primary"
                  }
                />
              )}
            </Button>
        
          </div>
        </div>
      </nav>

      {/* Mobile Drawer & Overlay */}
      <div className={`fixed inset-0 z-30 pointer-events-none`}>
        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="absolute inset-0 bg-black/50 z-30 transition-opacity duration-300 pointer-events-auto"
            onClick={toggleMenu}
          />
        )}

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white p-6 z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center mb-6">
            <img src={logoPrim} alt="MBC" className="h-10" />
            <Button onClick={toggleMenu}>
              <X size={24} className={"text-primary"} />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 font-semibold">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                onClick={toggleMenu}
                className={`${
                  location.pathname === href
                    ? "text-primary"
                    : "text-neutral-800 hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Search & Login */}

          <Button classname="bg-secondary text-white font-bold px-4 py-2 rounded mt-6">
            LOG IN
          </Button>
        </div>
      </div>
    </>
  );
}
