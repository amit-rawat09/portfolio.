import React from 'react'

import logo from '../assets/main.jpeg'

import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-10 md:mt-20 space-y-3 order-2 md:order-1">
            <span className='text-xl'>Welcome to my Portfolio</span>
            <div className="flex text-md md:text-4xl ">
              <h1>Hello, I'm a&nbsp;</h1>
              <ReactTyped
                className='text-blue-500 font-bold'
                strings={["MERN Stack Developer"]} typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className='text-sm md:font-medium text-justify'> Motivated and highly adaptable MERN Stack Developer with a strong foundation in JavaScript, React.js, Node.js,
              Express.js, and MongoDB. Last year of Bachelor of Computer Applications (BCA) and eager to apply technical
              skills to build dynamic and efficient web applications. Passionate about developing scalable solutions, writing
              clean code, and continuously learning emerging technologies. Strong problem-solving abilities and a keen
              interest in full-stack development, with a focus on delivering user-friendly applications. Looking for an
              opportunity to contribute and grow in a collaborative environment.</p>
            <br />
            <div className="">
              <button className='bg-blue-400 hover:bg-blue-500 duration-150'><a href="">View Resume</a></button>
            </div>
            {/* social media items */}
            <div className="flex justify-between md:flex-row flex-col items-center gap-6">
              <div className="flex flex-col gap-2">
                <h1 className='font-bold'>Available on</h1>
                <ul className='flex gap-4'>
                  <li>
                    <a href="https://www.linkedin.com/in/amit-rawat-a2225a26b/" target='_blank'>
                      <FaLinkedin className='cursor-pointer text-2xl' />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/amit-rawat09" target='_blank'><FaGithub className='cursor-pointer text-2xl' />
                    </a>
                  </li>
                  <li>
                    <a href="9780amit@gmail.com" target='_blank'><MdEmail className='cursor-pointer text-2xl' />
                    </a>
                  </li>
                  <li>
                    <a href="" target='_blank'><FaTelegram className='cursor-pointer text-2xl' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className='font-bold'>Currently Working On</h1>
                <ul className='flex gap-4'>
                  <li><SiMongodb className='hover:scale-105 duration-0.1 text-2xl' /></li>
                  <li><SiExpress className='hover:scale-105 duration-0.1 text-2xl' /></li>
                  <li><FaNodeJs className='hover:scale-105 duration-0.1 text-2xl' /></li>
                  <li><FaReact className='hover:scale-105 duration-0.1 text-2xl' /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center md:mt-10 mt-10 md:order-2 order-1 mx-auto w-[30vh]">
            <img src={logo} alt="" className='rounded-full shadow-md shadow-gray-600 object-center md:w-[400px] md:h-[400px]' />
          </div>
        </div>
        <br />
      </div>
      <hr />
    </>
  )
}

export default Home