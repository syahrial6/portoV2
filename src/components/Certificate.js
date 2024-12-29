import React from 'react'

const Certificate = () => {
    const data = [
        {
            id:1,
            name:"Belajar Dasar Pembuatan Aplikasi Web React JS",
            path:"/images/sertif1.png"
        },
        {
            id:2,
            name:"Belajar Fundamental Aplikasi Web React JS",
            path:"/images/sertif2.png"
        },
        {
            id:3,
            name:"Belajar Fundamental Front-End Web Developer",
            path:"/images/sertif3.png"
        },
        {
            id:4,
            name:"Belajar Pemograman Javascript",
            path:"/images/sertif4.png"
        },
        {
            id:5,
            name:"Belajar CSS Dan Framework CSS",
            path:"/images/sertif5.png"
        },
    ]
  return (
    <div>
    <div>
      <h1 className='text-white text-center text-6xl font-bold mb-12'>Certificate</h1>
    </div>
    <div className='container grid lg:grid-cols-3 grid-cols-1 gap-4'>
        {data.map((item)=>(
            <div key={item.id} className="border border-blue-700 rounded-2xl py-4">
          <p className="text text-white text-xl font-bold text-center">
            {item.name}
          </p>

          <div className="container lg:w-[75%] w-full m-auto border border-blue-700 rounded-2xl">
            <img
              src={item.path}
              alt="portofolio"
              className="w-full object-cover flex justify-center items-center m-auto rounded-xl lg:hover:scale-125 transition-all duration-500 cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer"
            />
          </div>
        </div>
        ))}
    

    </div>
    </div>
  )
}

export default Certificate
