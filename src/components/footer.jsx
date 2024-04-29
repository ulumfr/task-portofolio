import React from "react";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="flex justify-center items-center border-primary-color border-2 border-dotted rounded-[40px] text-center py-8 mx-10 sm:mx-28 md:mx-28 lg:mx-28 mt-20 mb-10">
      <div className="max-w-7xl text-primary-color">
        <div className="flex justify-center items-center text-xl space-x-4 ">
          <a
            href="https://www.instagram.com/ulumfr/"
            className="hover:text-hover-first"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="https://www.facebook.com/UlummFR/"
            className="hover:text-hover-first"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/ulumfr"
            className="hover:text-hover-first"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ulumfr/"
            className="hover:text-hover-first"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:bahrululumfr@gmail.com"
            className="hover:text-hover-first"
          >
            <SiGmail />
          </a>
        </div>
        <div className="mt-5">
          <p>&copy; Punya Ulum | {year}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
