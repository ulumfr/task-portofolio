import React, { useState, useEffect } from "react";
import UlumLogo from "../../public/icon.png";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-secondary-color ${
        scrolled ? "shadow-md" : ""
      } z-50`}
    >
      <div className="mx-auto max-w-7xl px-10 sm:px-28 lg:px-8 py-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="home"
              className="flex-shrink-0 cursor-pointer"
              spy={true}
              smooth={true}
              offset={-70}
            >
              <img
                src={UlumLogo}
                alt="logo-ulum"
                draggable="false"
                className="w-12"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-6">
              {["Home", "About", "Projects"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    className="text-primary-color cursor-pointer hover:text-hover-first font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={handleMenu}
            className="block md:hidden cursor-pointer text-primary-color fixed-right-10 top-10 z-50"
          >
            {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>

        {menu && (
          <div className="md:hidden">
            <ul className="py-5 text-lg space-y-3">
              {["Home", "About", "Projects"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    className="text-primary-color cursor-pointer hover:text-hover-first font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
