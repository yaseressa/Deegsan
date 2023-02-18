import React from "react";
import aboutimg from "../Assets/aboutImage.png";
// import about from "../Assets/About.png";
import eye from "../Assets/eye.svg";
import charity from "../Assets/charity.svg";
import { motion } from "framer-motion";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.7,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div className="">
      <div className="md:flex items-center font-body md:items-center md:justify-center md:gap-32 mt-36 space-y-10 p-10">
        <div className="md:block flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, translateY: "-7%" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            transition={{
              duration: 2,
            }}
            src={aboutimg}
            alt=""
            srcset=""
            className="md:w-96 w-60 "
          />
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-y-2"
        >
          <motion.h1
            variants={item}
            className="font-extrabold md:text-5xl text-3xl text-white font-display text-center"
          >
            About Us
          </motion.h1>
          <motion.p
            variants={item}
            className="text-[#656667] my-5 font-body text-sm font-medium leading-6"
          >
            There are many variations of passages of Lorem Ipsum majority have
            suffered <br />
            alteration in some form, by injected humor, or randomized. There are
            many <br /> variations of passages of Lorem Ipsum available, but
            majority have <br />
            suffered alteration in some form, by injected humor, or randomized.
          </motion.p>
          <motion.div variants={item}>
            <div className="flex  items-center text-sm gap-5 mb-5">
              <img src={eye} alt="eye icon" width="54px" height="auto" />
              <p className="text-[#656667]">
                There are many variations of passages of Lorem Ipsum <br />
                available, but majority have suffered alteration in some form,
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={item}
            className="flex items-center text-sm gap-5"
          >
            <img src={charity} alt="eye icon" width="54px" height="auto" />
            <p className="text-[#656667]">
              There are many variations of passages of Lorem Ipsum <br />
              available, but majority have suffered alteration in some form,
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
