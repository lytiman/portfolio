import React from 'react'
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import JS from '../../assets/javascript.png'
import ReactImg from '../../assets/react.png'
import Node from '../../assets/node.png'
import FireBase from '../../assets/firebase.png'
import AWS from '../../assets/aws.png'
import Github from '../../assets/github.png'
import Tailwind from '../../assets/tailwind.png'
import Mongo from '../../assets/mongo.png'
import PostgreSQL from '../../assets/postgresql.png'  // Add the PostgreSQL logo
import Docker from '../../assets/docker.png'  // Add the Docker logo

function Skills() {
  return (
    <div name="skills" className=" w-full h-screen bg-[#0a192f] text-gray-300 ">
      {/* container */}
      <div  className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 py-4 ">Skills</p>
          <p className='py-8'>These are technologies I've Worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={HTML} alt="html icon"/>
            <p className="my-4">HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={CSS} alt="css icon"/>
            <p className="my-4">CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={JS} alt="javascript icon"/>
            <p className="my-4">JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon"/>
            <p className="my-4">React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Github} alt="Github icon"/>
            <p className="my-4">Github</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon"/>
            <p className="my-4">Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon"/>
            <p className="my-4">MongoDB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Node} alt="Node  icon"/>
            <p className="my-4">Node.js</p>
          </div>
          {/* Adding PostgreSQL */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={PostgreSQL} alt="PostgreSQL icon"/>
            <p className="my-4">PostgreSQL</p>
          </div>
          {/* Adding Docker */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Docker} alt="Docker icon"/>
            <p className="my-4">Docker</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
