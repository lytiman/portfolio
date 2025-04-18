import React, {useState} from 'react'

import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../../assets/portt.png'
import {Link} from 'react-scroll';
function Navbar() {
  const [nav,setNav] = useState(false);
  const handleClick =()=> setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img className="pt-4" src={Logo} alt="Logo" style={{width:'150px'}}/>
      </div>
      {/* menu */}
      <div >
        <ul className="hidden md:flex">
          <li> <Link 
      to="home" 
      smooth={true} 
      duration={500} 
    >
      Home
    </Link></li>
          <li><Link 
      to="about" 
      smooth={true} 
      duration={500} 
     
    >
      About
    </Link></li>
          <li><Link 
      to="skills" 
      smooth={true} 
      duration={500} 
     
    >
      Skill
    </Link></li>
          <li><Link 
      to="work" 
      smooth={true} 
      duration={500} 
    >
      Work
    </Link></li>
          <li><Link 
      to="contact" 
      smooth={true} 
      duration={500} 
    >
      Contact
    </Link></li>
        </ul>
      </div>
       {/* Hamburger */}
       <div onClick={handleClick} className = "md:hidden z-10">
         {!nav ? <FaBars/>:<FaTimes/>}

       </div>
      {/* Mobile Menu */}
      <div  className ={!nav? "hidden": "absolute top-0 left-0 w-full h-screen flex flex-col bg-[#0a192f]  justify-center items-center"}> 
      <ul>
          <li className="py-6 text-4xl"> <Link onClick={handleClick}
      to="home" 
      smooth={true} 
      duration={500} 
    >
      Home
    </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick}
      to="about" 
      smooth={true} 
      duration={500} 
     
    >
      About
    </Link></li>
          <li className="py-6 text-4xl"><Link 
      to="skills" onClick={handleClick}
      smooth={true} 
      duration={500} 
     
    >
      Skill
    </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} 
      to="work" 
      smooth={true} 
      duration={500} 
    >
      Work
    </Link></li>
          <li className="py-6 text-4xl"><Link 
          onClick={handleClick}
      to="contact" 
      smooth={true} 
      duration={500} 
    >
      Contact
    </Link></li>
        </ul>
      </div>
      {/* Social Icon */}
      <div  className = "hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className=' w-[160px] h-[60px] flex justify-between items-center'><a href="https://www.linkedin.com/in/letera-mengistu-9a3ab3297"   rel="noopener noreferrer"  target="_blank"   className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] bg-blue-600'>Linkedin<FaLinkedin size={30}/></a></li>
          <li className=' w-[160px] h-[60px] flex justify-between items-center'><a href="https://github.com/lytiman"  target="_blank"  rel="noopener noreferrer"  className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] bg-[#3333]'>Github<FaGithub size={30}/></a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center'>
  <a 
    href="mailto:latomaalfa2020@gmail.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] bg-[#6fc2b0]'>
    Email
    <HiOutlineMail size={30}/>
  </a>
</li>

          <li className=' w-[160px] h-[60px] flex justify-between items-center'><a href="/" className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] bg-[#565f69]'>Resume<BsFillPersonLinesFill size={30}/></a></li>
        </ul>
      </div>
      
      
    </div>
  )
}

export default Navbar
