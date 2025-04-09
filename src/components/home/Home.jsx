import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll';
import './home.css'

function Home() {
  return (
    <div name='home' className="w-full h-screen bg-[#0a192f] ">
      {/* container */}
      <div className = "max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      <p className='text-pink-600'>Hi, my name is</p>
      <h1 className='first-ad text-4xl sm:text-7xl  font-bold text-[#ccd6f6] '>Letera Mengistu</h1>
      <h1 className='second-ad text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm Fullstack web Developer</h1>
      <p className='third text-[#8892b0] max-w-[700px]'>I am a software engineering student at Jimma University, dedicated to honing my skills and expanding my knowledge in the dynamic field of technology. With a passion for innovation and a commitment to excellence, I am eager to embark on a journey of continuous learning and growth."
      </p>
      <button className='mt-4 text-white group border-2 px-6 py-3 my-2 w-[200px] flex items-center hover:bg-pink-600 hover:border-pink-600'>
      <Link 
      to="work" 
      smooth={true} 
      duration={500}  
    >
      View Work
    </Link>

       <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight size={20} className='ml-3'/></span></button>
      </div>
    </div>
  )
}

export default Home
