import React from 'react';
import aboutimg from '../Assets/aboutImage.png';
// import about from "../Assets/About.png";
import eye from '../Assets/eye.svg';
import charity from '../Assets/charity.svg';

const About = () => {
  return (
    <div className="">
      <div className="md:flex items-center font-body md:items-center md:justify-center md:gap-32 mt-36 space-y-10 p-10">
        <div className="w-96">
          <img src={aboutimg} alt="" srcset="" />
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="font-extrabold text-5xl text-white font-display">
            About Us
          </h1>
          <p className="text-[#656667] my-5 font-body text-sm font-medium leading-6">
            There are many variations of passages of Lorem Ipsum majority have
            suffered <br />
            alteration in some form, by injected humor, or randomized. There are
            many <br /> variations of passages of Lorem Ipsum available, but
            majority have <br />
            suffered alteration in some form, by injected humor, or randomized.
          </p>
          <div>
            <div className="flex  items-center text-sm gap-5 mb-5">
              <img src={eye} alt="eye icon" width="54px" height="auto" />
              <p className="text-[#656667]">
                There are many variations of passages of Lorem Ipsum <br />
                available, but majority have suffered alteration in some form,
              </p>
            </div>
          </div>
          <div className="flex items-center text-sm gap-5">
            <img src={charity} alt="eye icon" width="54px" height="auto" />
            <p className="text-[#656667]">
              There are many variations of passages of Lorem Ipsum <br />
              available, but majority have suffered alteration in some form,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
