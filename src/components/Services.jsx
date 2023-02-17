import React from 'react';
import tree from '../Assets/treeIcon.svg';
import recycle from '../Assets/recycleIcon.svg';

const Services = () => {
  return (
    <div className="">
      <h1 className="font-extrabold text-5xl font-display text-white text-center my-32">
        Our Services
      </h1>
      <div className="md:flex m-auto font-medium font-body text-sm leading-6 items-center justify-center md:gap-32 md:mx-32 mx-10">
        <div className="flex items-center gap-5 mb-10">
          <img src={tree} alt="" className="" width="82px" height="auto" />
          <p className="text-[#656667]">
            There are many variations of passages of <br /> Lorem Ipsum
            available, but majority have <br /> suffered alteration in some
            form,
          </p>
        </div>

        <div className="flex items-center gap-5 mb-10">
          <img src={recycle} alt="" className="" width="82px" height="auto" />
          <p className="text-[#656667]">
            There are many variations of passages of <br /> Lorem Ipsum
            available, but majority have <br /> suffered alteration in some
            form,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
