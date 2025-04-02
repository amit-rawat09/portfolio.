import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-scroll'
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

function Navbar() {
    const [menu, setMenu] = useState(false)

    const navitems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 4,
            text: "Skills"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 5,
            text: "Contacts"
        },
    ]
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed order-50 top-0 left-0 right-0 bg-white ">
                <div className="flex justify-between items-center ">
                    <div className="flex space-x-2 items-center">
                        <img src={logo} className='h-12 w-12 mt-2 rounded-full' alt="" srcset="" />
                        <h1 className='font-semibold text-xl cursor-pointer'>Ami<span className='text-blue-500 '>t</span> Rawa<span className='text-blue-500'>t</span>
                            <p className='text-sm'> MERN Stack Developer</p>
                        </h1>
                    </div>
                    {/* desktop navbar */}
                    <div className="">
                        <ul className='hidden md:flex gap-8'>
                            {
                                navitems.map(({ id, text }) => {
                                    return <li className='hover:scale-105 duration-200 cursor-pointer ' key={id}>
                                        <Link to={text}
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            activeClass="active"
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                })
                            }
                        </ul>
                        <div className='md:hidden' onClick={() => setMenu(!menu)}>{menu ? <IoClose size={24} /> : <AiOutlineMenu size={24} />}</div>
                    </div>
                </div>
                {/* mobile navbar */}
                {
                    menu && (
                        <div className="bg-white">
                            <ul className='md:hidden flex flex-col h-72 items-center justify-center space-y-3'>
                                {
                                    navitems.map(({ id, text }) => {
                                        return <li className='hover:scale-105 duration-200 cursor-pointer text-xl' key={id}>
                                            <Link to={text}
                                                onClick={() => setMenu(!menu)}
                                                smooth={true}
                                                duration={500}
                                                offset={-60}
                                                activeClass="active"
                                            >
                                                {text}
                                            </Link>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Navbar