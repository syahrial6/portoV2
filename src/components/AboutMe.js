import React from "react";
import * as motion from "motion/react-client";

const AboutMe = () => {
  const skill =[
    {
    name: 'Laravel',
    path: './laravel.svg',
    },
    {
    name: 'React',
    path: './react.svg',
    },
    {
    name: 'Tailwind',
    path: './tailwindcss.svg',
    },
    {
    name: 'MySQL',
    path: "./mysql.svg",
    },
    {
      name:'HTML',
      path: './html.svg'
    },
    {
      name:'Express.JS',
      path: './express.svg'
    },
    {
      name:'Github',
      path: './github.svg'
    },
    {
      name:'Next JS',
      path: './nextjs.svg'
    },
    {
      name:'Wordpress',
      path: './wordpress.svg'
    }

  ]


  return (
    <div className="container py-36">
      <div>
        <p className="text text-5xl font-bold text-center text-white mt-24 my-12">
          My Skill
        </p>
      </div>
      <div className="container grid grid-cols-6 gap-4">
        {skill.map((item)=>(
          <div key={item.name} className="container border rounded-2xl border-[#006cad] p-4 justify-center items-center flex gap-2">
          <img src={item.path} alt="html" className="h-12" />
          <p className="text text-white">{item.name}</p>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default AboutMe;
