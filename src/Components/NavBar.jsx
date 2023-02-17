import React, { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { GiCrossMark } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function NavBar() {
  const [drop, setDrop] = useState(0);
  return (
    <>
      <div className=" bg-primary/20 backdrop-blur-sm pt-4  md:px-32 px-3 flex justify-between items-center text-sm font-poppins font-medium">
        <div className=" text-white underline flex-1 ">
          <p className="font-semibold text-lg text-center md:text-left">
            Dheegsan
          </p>
        </div>

        {!drop ? (
          <div
            className="flex-1 md:hidden flex justify-end translate-x-[-20px] z-40"
            onClick={() => setDrop(1)}
          >
            <HiOutlineMenuAlt2 className="text-secondary" size={30} />
          </div>
        ) : (
          <div
            className="flex-1 md:hidden flex justify-end translate-x-[-20px] z-40"
            onClick={() => setDrop(0)}
          >
            <GiCrossMark className="text-secondary" size={30} />
          </div>
        )}

        <div className="flex-1  hidden md:flex justify-center items-center">
          <ul className="text-white flex gap-x-5 underline">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 hidden md:flex justify-end ">
          <ul className="flex justify-evenly text-white w-[130px] underline">
            <li>
              <Link to="/login">
                {/* <a href="#">Login</a> */}
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
              {/* <a href="#">Signup</a> */}
            </li>
          </ul>
        </div>
      </div>

      {drop && (
        <motion.div
          initial={{ translateY: '-100%' }}
          animate={{ translateY: '45%' }}
          transition={{
            type: 'spring',
            ease: 'easeOut',
            duration: 2,
          }}
          className="bg-secondary font-medium md:hidden text-primary text-lg absolute w-[100%] z-20"
        >
          <ul className="text-white flex flex-col h-[100%] justify-evenly items-center w-[100%] z-10">
            <li className="h-8 p-6">
              <Link to="/">Home</Link>
            </li>
            <li className="h-8 p-6">
              <Link to="/">Service</Link>
            </li>
            <li className="h-8 p-6">
              <Link to="/">About</Link>
            </li>
            <li className="h-8 pt-6">
              <Link to="/login">Login</Link>
            </li>
            <li className="h-[100%] flex pt-6 justify-evenly w-[100%] ">
              <Link to="/signup">Signup</Link>
              {/* <a
                href="#"
                className="bg-primary text-secondary flex-1 text-center p-1"
              >
                Signup
              </a> */}
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
}

export default NavBar;
