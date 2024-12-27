import Link from 'next/link'
import React from 'react'

const Hubungi = () => {
  return (
    <div>
      <p className='text text-5xl text-orange-400 py-4 font-bold text-center'>Get In Touch</p>
      <p className='container text-white w-[50%] text-center m-auto'>Currently Looking For Freelance Opportunities, my inbox is always open. whether for a potential project or just to say hi</p>
    <div className='container flex justify-center items-center'>
        <a href='https://www.linkedin.com/in/muhammad-syahrial-a97966221/' target='_blank'>
        <button className=' text-white py-2 px-4 rounded-lg mt-4'><img src="./linkedin.svg" className='w-10' alt="Logo"/></button>
        </a>
        <a href='https://www.instagram.com/syhrialm_/' target='_blank'>
        <button className=' text-white py-2 px-4 rounded-lg mt-4'><img src="./instagram.svg" className='w-10' alt="Logo"/></button>
         </a>
        <a href='mailto:syr06rial@gmail.com' target='_blank'>
        <button className=' text-white py-2 px-4 rounded-lg mt-4'><img src="./email.svg" className='w-10' alt="Logo"/></button>
        </a>
    </div>
    </div>
  )
}

export default Hubungi
