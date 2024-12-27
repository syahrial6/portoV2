import React from "react";

const Portofolio = () => {
  return (
    <div>
      <div className="text lg:text-6xl text-3xl font-bold text-white py-6">
        My Selected Portofolio
      </div>
      <div className="container grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="border border-blue-700 rounded-2xl">
          <p className="text text-white text-2xl font-bold py-4 text-center">
            UNTAN SPORT CENTER
          </p>

          <div className="container lg:w-[75%] w-full m-auto border border-blue-700 rounded-2xl">
            <img
              src="/images/home.png"
              alt="portofolio"
              className="w-full object-cover flex justify-center items-center m-auto rounded-xl hover:scale-125 transition-all duration-500 cursor-pointer"
            />
          </div>
          <div className="tech grid grid-cols-2 justify-center items-center my-4">
            <div className="container border border-blue-700 rounded-2xl w-36 m-auto ">
              <p className="text text-white text-center">React JS</p>
            </div>
            <div className="container border border-blue-700 rounded-2xl w-36 m-auto ">
              <p className="text text-white text-center">Chakra UI</p>
            </div>
          </div>
        </div>
        <div className="border border-blue-700 rounded-2xl">
          <p className="text text-white text-2xl font-bold py-4 text-center">
            To Do List Harian
          </p>

          <div className="container lg:w-[75%] w-full m-auto  border border-blue-700 rounded-2xl">
            <img
              src="/images/todo.png"
              alt="portofolio"
              className="w-full object-cover flex justify-center items-center m-auto rounded-xl hover:scale-125 transition-all duration-500 cursor-pointer"
            />
          </div>
          <div className="tech grid grid-cols-2 justify-center items-center my-4">
            <div className="container border border-blue-700 rounded-2xl w-36 m-auto ">
              <p className="text text-white text-center">React JS</p>
            </div>
            <div className="container border border-blue-700 rounded-2xl w-36 m-auto ">
              <p className="text text-white text-center">Tailwind CSS</p>
            </div>
          </div>
        </div>
        <div className="border border-blue-700 rounded-2xl">
          <p className="text text-white text-2xl font-bold py-4 text-center">
            Slicing Portofolio
          </p>

          <div className="container lg:w-[75%] w-full m-auto border border-blue-700 rounded-2xl">
            <img
              src="/images/porto.png"
              alt="portofolio"
              className="w-full object-cover flex justify-center items-center m-auto rounded-xl hover:scale-125 transition-all duration-500 cursor-pointer"
            />
          </div>
          <div className="tech grid grid-cols-2 justify-center items-center my-4">
            <div className="container border border-blue-700 rounded-2xl w-36 m-auto ">
              <p className="text text-white text-center">Next JS</p>
            </div>
            <div className="container border border-blue-700 rounded-2xl w-36 m-auto ">
              <p className="text text-white text-center">TailwindCSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
