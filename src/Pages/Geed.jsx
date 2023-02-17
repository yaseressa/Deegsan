import React from 'react';
import Chart from '../Assets/Chart.png';
import Logout from '../Assets/logOutIcon.svg';
import Option from '../Assets/optionIcon.svg';
import Info from '../Assets/infoIcon.svg';

const SideBar = () => {
  return (
    <div className="">
      <div>
        <div className="bg-[#151712] flex flex-col gap-2 h-screen w-[335px] px-4 py-5">
          <div className="flex flex-col gap-3">
            <select
              name=""
              id=""
              placeholder="Location Lock"
              className="w-full px-3 py-3 text-white  bg-[#BBD6A7]/30 rounded-lg text-sm font-medium"
            >
              <option
                value="Orange"
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Hargeisa
              </option>

              <option
                value="apple"
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Buroa
              </option>

              <option
                value="mango"
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Erigavo
              </option>
            </select>

            <select
              name=""
              id=""
              placeholder="Select Tree"
              className="w-full px-3 py-3 text-white  bg-[#BBD6A7]/30 rounded-lg text-sm font-medium"
            >
              <option
                value="Orange"
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Orange
              </option>

              <option
                value="apple"
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Apple
              </option>

              <option
                value="mango"
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Mango
              </option>
            </select>

            <input
              type="text"
              placeholder="# Number"
              className="w-full px-3 text-white py-3 bg-[#BBD6A7]/30 rounded-lg text-sm font-medium"
            />

            <button className="bg-[#669542] py-3 rounded-lg font-semibold text-sm mt-4">
              Confirm
            </button>
          </div>

          <div className="mt-8 text-gray-100">
            <div className="flex justify-between text-sm font-medium mt-9">
              <p>Completed</p>
              <p>
                <span className="text-[#669542]">230</span> / 550
              </p>
            </div>

            <div className="mt-5 relative">
              <div className="bg-[#777] h-2 w-full rounded-xl"></div>
              <div className="bg-[#669542] h-2 w-32 rounded-xl absolute bottom-0"></div>
            </div>
          </div>

          <div className="flex items-center gap-7 mt-14 text-gray-100">
            <div>
              <img
                src={Chart}
                alt="chart"
                className=""
                width="135px"
                height="auto"
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="w-3 h-3 bg-orange-500"></div>
                <p>Orange</p>
              </div>

              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="w-3 h-3 bg-indigo-600 "></div>
                <p>Apple</p>
              </div>

              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="w-3 h-3 rounded-xs bg-green-600 "></div>
                <p>Mango</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-16 cursor-pointer text-gray-100">
            <div className="flex gap-2 font-medium underline text-sm">
              <img src={Logout} alt="logout" width="16" height="auto" />
              <p>Logout</p>
            </div>

            <div className="flex gap-2 font-medium underline text-sm">
              <img src={Option} alt="option" width="16" height="auto" />
              <p>Option</p>
            </div>

            <div className="flex gap-2 font-medium underline text-sm">
              <img src={Info} alt="info" width="16" height="auto" />
              <p>Info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Map = () => {
  return (
    <div className="bg-gray-700 w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62952.5909522311!2d44.02933454355361!3d9.548898149226293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1628bf87108c7219%3A0x61638d9da9bd62d2!2sHargeisa!5e0!3m2!1sen!2sso!4v1676641480898!5m2!1sen!2sso"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

const Geed = () => {
  return (
    <div className="flex max-[500px]:justify-center mx-auto max-[500px]:flex-wrap h-screen w-screen bg-[#151712] font-body">
      <SideBar />
      <Map />
    </div>
  );
};

export default Geed;
