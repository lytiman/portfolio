import React from 'react'
import WorkImg from "../../assets/projects/workImg.jpeg"
import RealState from "../../assets/projects/realestate.jpg"
import Amana from "../../assets/projects/amana.png"  // Added amana.png
import Ecommerce from "../../assets/projects/ecommerce.png"  // Added ecommerce.png

function work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f] ">
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 m-2'>
          {/* gridItem */}
          <div style={{ backgroundImage: `url(${WorkImg})` }} className='shadow-lg shadow-[#040c16] group container rounded:md flex justify-center items-center mx-auto content-div'>
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Js Application
              </span>
              <div className="pt-8 text-center fleex">
                <a href='/'><button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                <a href='/'><button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
              </div>
            </div>
          </div>

          {/* gridItem */}
          <div style={{ backgroundImage: `url(${RealState})` }} className='shadow-lg shadow-[#040c16] group container rounded:md flex justify-center items-center mx-auto content-div'>
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Js Application
              </span>
              <div className="pt-8 text-center fleex">
                <a href='/'><button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                <a href='/'><button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
              </div>
            </div>
          </div>

          {/* Adding amana.png */}
          <div style={{ backgroundImage: `url(${Amana})` }} className='shadow-lg shadow-[#040c16] group container rounded:md flex justify-center items-center mx-auto content-div'>
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider'>
                Amana Project
              </span>
              <div className="pt-8 text-center fleex">
                <a href='/'><button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                <a href='/'><button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
              </div>
            </div>
          </div>

          {/* Adding ecommerce.png */}
          <div style={{ backgroundImage: `url(${Ecommerce})` }} className='shadow-lg shadow-[#040c16] group container rounded:md flex justify-center items-center mx-auto content-div'>
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider'>
                E-commerce Project
              </span>
              <div className="pt-8 text-center fleex">
                <a href='/'><button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                <a href='/'><button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default work
