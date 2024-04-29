import React from "react";
import FotoUlum from "../assets/img/foto/foto_hero.png";
import CV from "../assets/file/CV.pdf";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleDownloadCV = () => {
    if (CV) {
      window.open(CV, "_blank");
    } else {
      console.error("Error: No resume CV found for the user.");
    }
  };

  return (
    <section
      className="mx-auto max-w-7xl px-10 sm:px-28 lg:px-8 py-28"
      id="home"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="my-auto">
          <motion.span
            className="text-[16px] font-medium"
            initial={{ y: -100, scale: 0.5 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hello, I'm
          </motion.span>
          <motion.h1
            className="text-[36px] font-semibold text-title-color"
            initial={{ x: -300, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Bahrul 'Ulum Fadhlur Rohman
          </motion.h1>
          <motion.h3
            className="text-text-color text-[16px] font-medium"
            initial={{ y: 300, scale: 0.5 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Informatics Engineering University of Muhammadiyah Malang
          </motion.h3>
          <motion.button
            className="bg-primary-color hover:text-title-color text-secondary-color font-normal py-[10px] px-[14px] rounded-[9px] md:mt-5 mt-5"
            initial={{ y: 100, scale: 0.5 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.2 }}
            onClick={handleDownloadCV}
          >
            Resume (CV)
          </motion.button>
        </div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ x: 100, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={FotoUlum}
            alt="foto-ulum"
            draggable={false}
            className="mx-auto sm:max-w-sm md:max-w-md h-auto md:max-h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
