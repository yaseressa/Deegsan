import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  const handleClick = () => {
    console.log(email, password);
  };

  return (
    <div>
      <div className="flex h-screen w-screen bg-[#151712] font-body text-white">
        <div className="mx-auto flex max-w-4xl flex-col justify-center gap-24 align-middle max-[665px]:my-auto">
          <h1 className="text-center text-3xl font-bold text-[#669542] underline stroke-white outline-2 font-display">
            Login your account
          </h1>

          <div className="mx-auto flex flex-col gap-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="Email / username"
              className="bg-[#7489A0]/30 w-72 px-3 py-3 rounded-lg text-xs font-medium"
            />

            <input
              onChange={(e) => setPassowrd(e.target.value)}
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="bg-[#7489A0]/30 w-72 px-3 py-3 rounded-lg text-xs font-medium"
            />

            <button
              onClick={handleClick}
              className="bg-[#669542]/80 py-2 rounded-lg font-medium text-white"
            >
              Confirm
            </button>
          </div>

          <p className="text-center text-gray-300 text-xs font-medium">
            If you have not an account please create an <br />
            account click{' '}
            <Link
              to="/signup"
              className="text-[#669542] font-semibold cursor-pointer"
            >
              Signup{' '}
            </Link>
            or go back{' '}
            <Link
              to="/"
              className="text-[#669542] font-semibold cursor-pointer"
            >
              Home{' '}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
