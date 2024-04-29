import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const AboutBox = ({ title, subTitle, link, linkText }) => {
  return (
    <div className="bg-primary-color-alt text-secondary-color-alt p-[17px] rounded-[25px] lg:mx-20">
      <h3 className="text-center font-medium text-[16px]">{title}</h3>
      <span className="font-light text-[13px] block text-center">
        {subTitle}
      </span>
      <motion.a
        href={link}
        target="_blank"
        className="text-secondary-color text-[13px] flex items-center justify-center gap-x-1 mt-1"
        initial={{ y: 100, scale: 0.5 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.2 }}
      >
        {linkText}
        <FaArrowRightLong />
      </motion.a>
    </div>
  );
};

export default AboutBox;
