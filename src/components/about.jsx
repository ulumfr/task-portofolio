import React from "react";
import FotoAbout from "../assets/img/foto/foto_about.png";
import AboutBox from "../components/box/aboutbox";
import { motion } from "framer-motion";
import { academic } from "../data/aboutdata";

const AboutSection = () => {
  return (
    <section className="bg-primary-color text-secondary-color" id="about">
      <div className="mx-auto max-w-7xl px-10 sm:px-28 lg:px-8 py-16">
        <h2
          className="text-center text-3xl font-semibold mb-3"
          data-aos="zoom-in"
        >
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <div className="columns">
              <motion.div
                className="flex justify-center items-center mb-[-15px]"
                data-aos="zoom-in"
                data-aos-duration="1000"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={FotoAbout}
                  alt="foto-ulum-about"
                  draggable={false}
                  className="mx-auto md:mx-0 sm:max-w-xs md:max-w-sm h-auto md:max-h-full"
                />
              </motion.div>
              <motion.div
                className="bg-primary-color-alt text-secondary-color-alt p-[17px] rounded-[25px] mx-4"
                data-aos="fade-right"
                data-aos-duration="1100"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <p className="text-justify text-sm">
                  I am currently pursuing a Bachelor's degree in Informatics
                  Engineering at the University of Muhammadiyah Malang. I have a
                  strong interest in web development and previous experience
                  collaborating with teams. Committed to fulfilling
                  responsibilities with great diligence and a focus on
                  excellence. I am self-motivated, constantly seeking
                  opportunities to enhance my skills and acquire new knowledge.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="grid gap-4 justify-center md:grid-cols-1 my-auto">
            <h2
              className="text-center text-[24px] font-semibold mt-5"
              data-aos="fade-up"
            >
              Academic History
            </h2>
            {academic.map((history, index) => (
              <div key={index} data-aos="fade-down">
                <AboutBox
                  title={history.title}
                  subTitle={history.subTitle}
                  link={history.link}
                  linkText={history.linkText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
