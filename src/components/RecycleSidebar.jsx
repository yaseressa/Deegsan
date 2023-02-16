import React from "react";
import monetization from "../Assets/monetization.svg";
import logout from "../Assets/logout.svg";
import optIcon from "../Assets/optIcon.svg";
import updateIcon from "../Assets/updateIcon.svg";
import Tick from "../Assets/Tick.svg";

const RecycleSidebar = () => {
  return (
    <div className="w-80 h-screen bg-primary">
      <div className="p-10">
        <div class="">
          <select
            type="text"
            id="default-input"
            class="bg-teritary outline-none text-black font-semibold text-sm rounded-lg  block w-full p-3 mb-3"
            placeholder="Goobta kugu dhaw"
          >
            <option>Dooro Goobta</option>
            <option value="">Koodbuur</option>
            <option value="">Gacan libaax</option>
            <option value="">26 June</option>
          </select>
        </div>
        <div class="">
          <input
            type="text"
            id="default-input"
            class="bg-teritary outline-none text-black text-sm rounded-lg  block w-full p-3"
            placeholder="Tirada Misaanka"
          />
        </div>
        <button className="p-2.5 w-full rounded mt-5 bg-secondary text-white">
          Confirm
        </button>
      </div>
      <div className="p-10">
        <div className="flex items-center gap-4 mb-8">
          <img src={monetization} alt="" srcset="" />
          <p className="text-white underline">Monetization</p>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <img src={optIcon} alt="" srcset="" />
          <p className="text-white underline">Option</p>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <img src={monetization} alt="" srcset="" />
          <p className="text-white underline">Money</p>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <img src={Tick} alt="" srcset="" />
          <p className="text-white underline">Info</p>
        </div>
        <div className="flex items-center gap-4 ">
          <img src={logout} alt="" srcset="" />
          <p className="text-white underline">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default RecycleSidebar;
