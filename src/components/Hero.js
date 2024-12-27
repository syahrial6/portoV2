import React from "react";
import * as motion from "motion/react-client";
import {animate,  stagger } from "motion"

const Hero = () => {
  return (
    <div className="container relative">
      {/* Lingkaran di belakang */}
      <div className="absolute lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] bg-radial-gradient from-blue-500 via-green-400 to-purple-500 rounded-full lg:top-48 top-[500px] left-1/2 transform -translate-x-1/2 z-10"></div>

      {/* Konten utama */}
      <div
      
        className="lg:grid block grid-cols-2 h-[100vh] z-20 absolute w-full lg:mt-0 mt-24"
      >
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }} // Animasi aktif ketika 60% elemen terlihat
        variants={{
          hidden: { opacity: 0, y: 50 }, // Mulai dengan opacity 0 dan posisi lebih rendah
          visible: { opacity: 1, y: 0 }, // Berakhir dengan opacity 1 dan posisi normal
        }}
        transition={{
          duration: 1.0, // Durasi animasi dalam detik
          ease: "easeOut", // Gaya transisi
        }}
      
        
        className="container my-auto">
          <p className="text text-6xl text-slate-500">I&apos;m</p>
          <p className="text text-7xl font-bold text-white">Brahim Diaz</p>
          <div className="my-8 h-[5px] w-[300px] bg-orange-400"></div>
          <p className="container w-[300px] text-slate-300">
            A Junior Front End Developer Provide Digital Proggraming And Design
            Website Needs For All Business More Than 1 Years
          </p>
        </motion.div>
        <div className="container my-auto lg:flex hidden justify-end">
          <div className="container w-[300px]">
            <p className="text-slate-300 text-2xl my-4">Services</p>
            <p className="text-slate-300 font-bold text-xl">
              Let&apos;s build quality product in proggraming and design with my
              services
            </p>
            <div className="my-4">
              <p className="text font-bold text-orange-400">show more</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gambar */}
      <div className="container p-0 flex justify-center lg:top-20 top-[500px] z-30 relative w-full">
        <img
          src="/images/hero.png"
          alt="hero"
          className="object-cover w-full  lg:w-[70%] lg:h-[70%] h-[300px]"
        />
      </div>
    </div>
  );
};

export default Hero;
