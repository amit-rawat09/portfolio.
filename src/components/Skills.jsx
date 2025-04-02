import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa6";


import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { TbBrandSocketIo } from "react-icons/tb";

import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import { IoMdGitBranch } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import { SiVercel } from "react-icons/si";
import { SiRender } from "react-icons/si";



function Skills() {
    return (
        <>
            <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 my-6 md:px-20">
                <h1 className='text-3xl font-bold mb-5 font-Fredoka'>Skills</h1>
                <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
                    <div className="w-full border border-blue-800 hover:bg-blue-100 duration-200 p-4 rounded-lg mx-auto">
                        <h1 className='text-xl text-center my-3 font-bold'>Frontend</h1>
                        <div className="grid grid-cols-2 ">
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><FaHtml5 className='text-orange-400' /></span> <span>HTML</span>
                            </div>

                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><FaCss3Alt className='text-blue-400' /></span> <span>CSS</span>
                            </div>

                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><IoLogoJavascript className='text-yellow-400' /></span> <span>JavaScript</span>
                            </div>

                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><FaReact className='text-blue-600' /></span> <span>React</span>
                            </div>

                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><TbBrandRedux className='text-blue-800' /></span> <span>Redux Toolkit</span>
                            </div>

                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><SiTailwindcss className='text-blue-500' /></span> <span>Tailwind</span>
                            </div>
                            {/* 
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><FaGithub /></span> <span>Git</span>
                            </div> */}

                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><FaWordpress /></span> <span>WordPress</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full border border-blue-800 hover:bg-blue-100 duration-200 p-4 rounded-lg mx-auto">
                        <h1 className='font-bold text-center text-xl my-3'>Backend</h1>
                        <div className="grid grid-cols-2">
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><FaNodeJs className='text-green-500' /></span> <span>Node</span>
                            </div>
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><SiExpress className='text-gray-500' /></span> <span>Express</span>
                            </div>
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><FaPhp className='text-violet-600' /></span> <span>PHP</span>
                            </div>
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><TbBrandSocketIo className='text-black' /></span> <span>Socket.io</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full border border-blue-800 hover:bg-blue-100 duration-200 p-4 rounded-lg mx-auto">
                        <h1 className='font-bold text-center text-xl my-3'>DataBase</h1>
                        <div className="grid grid-cols-2 ">
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><SiMongodb className='text-green-800' /></span> <span>MongoDB</span>
                            </div>
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><SiMysql className='text-orange-700' /></span> <span>MySQL</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full border border-blue-800 hover:bg-blue-100 duration-200 p-4 rounded-lg mx-auto">
                        <h1 className='font-bold text-center text-xl my-3'>Others</h1>
                        <div className="grid grid-cols-2 ">
                            <h2 className='font-semibold text-lg'>Version Control</h2><br />
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><FaGithub className='text-gray-600' /></span> <span>Git</span>
                            </div>
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><IoMdGitBranch className='' /></span> <span>Git Hub</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 ">
                            <h2 className='font-semibold text-lg'>Deployment</h2><br />
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><SiVercel className='' /></span> <span>Vercel</span>
                            </div>
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><SiRender className='' /></span> <span>Render</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Skills