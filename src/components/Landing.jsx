import React from 'react';
import centIcon from '../Assets/centerIcon.svg';

const Landing = () => {
  return (
    <div class="bg-[url('./Assets/landingBG.jpg')] w-full bg-blend-overlay bg-cover h-fit pb-10 md:h-screen">
      <div className="md:flex w-9/12 items-center gap-60 p-20">
        <div className="mt-28">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 font-display">
            Ku Tabaruc Geed
          </h1>
          <h3 className="md:font-medium text-4xl text-white">
            Ama Dib u Warshadayn Samee
          </h3>
        </div>
        {/* <div className="w-32 h-32 mt-8"> */}
        {/* <img src={centIcon} alt="" /> */}
        {/* </div> */}
      </div>
      <div className="mx-20 w-9/12 max-[676px]:flex-wrap max-[676px]:gap-y-10 max-[676px]:mx-auto mt-24 flex gap-x-24 text-[#656667] font-medium">
        <p>
          There are many variations of passages of Lorem Ipsum <br /> available,
          but majority have suffered alteration in some <br /> form, by injected
          humour, or randomised.......
        </p>

        <p>
          There are many variations of passages of Lorem Ipsum <br /> available,
          but majority have suffered alteration in some <br /> form, by injected
          humour, or randomised.......
        </p>
      </div>
    </div>
  );
};

export default Landing;
