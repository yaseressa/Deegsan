import React from "react";
import tree from "../Assets/treeIcon.svg";
import recycle from "../Assets/recycleIcon.svg";
import { motion } from "framer-motion";
const Services = () => {
  const container = {
    hidden: { opacity: 0, x: "-20%" },
    show: {
      opacity: 1,
      x: "0%",
      transition: {
        delayChildren: 0.5,
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div className="">
      <motion.h1
        initial={{ opacity: 0, translateY: "-7%" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        transition={{
          duration: 2,
        }}
        className="font-extrabold text-5xl font-display text-white text-center my-32"
      >
        Our Services
      </motion.h1>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="md:flex m-auto font-medium font-body text-sm leading-6 items-center justify-center md:gap-32 md:mx-32 mx-10"
      >
        <motion.div variants={item} className="flex items-center gap-5 mb-10">
          <img src={tree} alt="" className="" width="82px" height="auto" />
          <p className="text-[#656667]">
            There are many variations of passages of <br /> Lorem Ipsum
            available, but majority have <br /> suffered alteration in some
            form,
          </p>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-5 mb-10">
          <img src={recycle} alt="" className="" width="82px" height="auto" />
          <p className="text-[#656667]">
            There are many variations of passages of <br /> Lorem Ipsum
            available, but majority have <br /> suffered alteration in some
            form,
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
