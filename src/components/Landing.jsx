import React from "react";
import centIcon from "../Assets/centerIcon.svg";
import { delay, motion } from "framer-motion";
const Landing = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
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
    <div class="bg-[url('./Assets/landingBG.jpg')] -translate-y-6 w-full bg-blend-overlay bg-cover h-fit pb-5 md:h-screen">
      <div className="flex justify-center md:flex-row flex-col items-center md:gap-60 p-20 pb-5">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="md:mt-40 mt-11 md:order-1 order-2 md:block flex justify-center items-center flex-col"
        >
          <motion.h1
            variants={item}
            className="text-3xl whitespace-nowrap md:text-6xl font-extrabold text-white mb-5 font-display"
          >
            Ku Tabaruc Geed
          </motion.h1>
          <motion.h3
            variants={item}
            className="md:font-medium md:text-4xl font-poppins text-lg text-white"
          >
            Ama Dib u Warshadayn Samee
          </motion.h3>
        </motion.div>
        <div className=" order-1 md:order-2">
          <motion.img
            initial={{ translateY: "-7%" }}
            animate={{ translateY: "0" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            src={centIcon}
            alt=""
            className="md:h-44 h-36 md:mt-36 mt-24"
          />
        </div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 2 }}
        className="mx-20 w-9/12 justify-evenly max-[676px]:flex-wrap max-[676px]:gap-y-10 max-[676px]:mx-auto mt-24 flex gap-x-24  text-[#656667] font-medium"
      >
        <motion.p variants={item}>
          There are many variations of passages of Lorem Ipsum <br /> available,
          but majority have suffered alteration in some <br /> form, by injected
          humour, or randomised.......
        </motion.p>

        <motion.p variants={item}>
          There are many variations of passages of Lorem Ipsum <br /> available,
          but majority have suffered alteration in some <br /> form, by injected
          humour, or randomised.......
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Landing;
