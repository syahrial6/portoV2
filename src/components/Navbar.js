import React from "react";

const Navbar = () => {
  return (
    <div>
    <div className="navbar flex mx-auto lg:justify-around text-white items-center w-[100%] h-[10%] my-3 absolute z-20 bg-transparent">
      <div className="logo hidden lg:flex">
        <p>Zenpay</p>
      </div>
      <div className="">
        <ul className="menu flex gap-8 hidden lg:flex">
          <li>Home</li>
          <li>Portofolio</li>
          <li>Testimonial</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="auth hidden lg:flex gap-4 items-center justify-center">
        <p>Sign In</p>
        <p className="btn p-2 rounded-lg bg-white text-black">Sign Up</p>
      </div>
    </div>
    <div className="responsive container m-auto lg:hidden mx-auto grid grid-cols-2 text-white w-[100%] h-[10%] my-3 absolute z-20 bg-transparent">
      <div className="logo ml-4 mt-2">
        <p className="text text-xl">Zenpay</p>
      </div>
      <div className="menu-icon flex justify-end mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
