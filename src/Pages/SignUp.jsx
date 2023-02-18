import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [other, setOther] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState({});
  const handleClick = () => {
    setForm({ email, password, fullName, other, username });
  };

  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    });

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: headers,
      body: {
        full_name: fullName,
        username: username,
        password: password,
        email: email,
      },
    });
  }, [form]);

  return (
    <div>
      <div className="flex h-screen w-screen bg-[#151712] font-body text-white">
        <div className="mx-auto flex max-w-4xl flex-col justify-center gap-24 align-middle max-[665px]:my-auto">
          <h1 className="text-center text-3xl font-bold text-[#669542] underline stroke-white outline-2 font-display">
            Signup your account
          </h1>

          <div className="mx-auto flex flex-col gap-4">
            <input
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="Full Name"
              className="bg-[#7489A0]/30 w-full px-3 py-3 rounded-lg text-xs font-medium"
            />

            {/* <input
              type="file"
              name=""
              id=""
              placeholder="Avatar"
              className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium file:rounded-md file:bg-[#669542] file:text-xm file:font-semibold file:text-white hover:file:bg-[#669542]/40"
            /> */}

            <div className="flex gap-4">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="Username"
                className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium"
              />

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="Email"
                className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium"
              />
            </div>

            <div className="flex gap-4">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name=""
                id=""
                placeholder="Password"
                className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium"
              />

              <input
                onChange={(e) => setOther(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="Other"
                className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium"
              />
            </div>

            <button
              onClick={handleClick}
              className="bg-[#669542]/80 py-2 rounded-lg font-medium text-white"
            >
              Confirm
            </button>
          </div>

          <p className="text-center text-gray-300 text-xs font-medium">
            If you have not an account please create an <br />
            account click{" "}
            <Link
              to="/login"
              className="text-[#669542] font-semibold cursor-pointer"
            >
              Login{" "}
            </Link>
            or go back{" "}
            <Link
              to="/"
              className="text-[#669542] font-semibold cursor-pointer"
            >
              Home{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
