import React from 'react';

function Footer() {
  return (
    <div className="w-[100%] bg-[#547A37] mt-44 font-body text-sm ">
      <div className="w-[100%] py-9 gap-y-6 flex md:flex-row flex-col justify-evenly items-center px-10 text-white underline  text-sm">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h2 className="p-1">random@email.com</h2>
          <h2 className="p-1">random@email.com</h2>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <h2 className="p-1">
            252 63 009 098 90 <br /> 252 65 889 910 80
          </h2>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <h2 className="p-1">
            Jigjiga-yar, Koodbuur
            <br /> Hargeisa | Somaliland
          </h2>
          <h2 className="p-1"></h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
