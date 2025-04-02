import React from 'react'
import { Link } from 'react-scroll'

function About() {
    return (
        <>
            <div name="About" className="max-w-screen-2xl container mx-auto px-4 my-4 md:px-20">
                <h1 className='text-3xl font-bold mb-5 font-Fredoka text-blue-600'>About</h1>
                <div className="flex flex-col gap-5">
                    <div className="">
                        <h1 className='text-blue-500 font-semibold text-xl'>Education and Traning</h1>
                        <ul>
                            <li className='border-2 px-4 py-2 my-2 rounded-lg md:items-center md:flex md:justify-between md:flex-row flex-col text-center'>
                                <div className='uppercase text-md'>Bachelor's of Computer Application</div>
                                <div className='uppercase text-md'>Panjab University ( 2022 - 2025 )</div>
                            </li>
                            <li className='border-2 px-4 py-2 my-2 rounded-lg md:items-center md:flex md:justify-between md:flex-row flex-col text-center'>
                                <div className='text-md'>12 <sup>TH</sup> ( INFORMATION TECHNOLOGY )</div>
                                <div className='text-md'>GOVT. MODEL. SR. SEC. SCHOOL SECTOR 32 CHANDIGARH ( 2020 - 2022 )</div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[100%]">
                        <h1 className='text-blue-500 font-semibold text-xl '>Experiences and Intern</h1>
                        <div className='border-2 px-4 py-2 my-2 rounded-lg  text-justify'>Currently Working with Softgear Technology as <b>React js</b> developer Intern </div>
                    </div>
                    <div className="">
                        <h1 className='text-blue-500 font-semibold text-xl'>Certification Course</h1>
                        <ul>
                            <li className='border-2 px-4 py-2 my-2 rounded-lg flex md:flex-row flex-col md:justify-between md:items-center text-center'>
                                <span className='text-md'>HTML , CSS , JavaScript , React JS by - Udemy</span>
                                <span>
                                    <button className='bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-full'><Link to='' target='_blank'>View Certificate</Link></button>
                                </span>
                            </li>
                            <li className='border-2 px-4 py-2 my-2 rounded-lg flex md:flex-row flex-col md:justify-between md:items-center text-center'>
                                <span className='text-md'>PHP Developer by - Udemy</span>
                                <span>
                                    <button className='bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-full'><a href='https://www.udemy.com/certificate/UC-bdf49d31-0d2e-48c0-baac-8bd0f6df9f2b/' target='_blank'>View Certificate</a></button>
                                </span>
                            </li>
                            <li className='border-2 px-4 py-2 my-2 rounded-lg flex md:flex-row flex-col md:justify-between md:items-center text-center'>
                                <span className='text-md'>Graphic Design with canva by - Udemy</span>
                                <span>
                                    <button className='bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-full'><a href=' https://www.udemy.com/certificate/UC-dccbbcc6-bbe4-42e1-89f8-4b8a93aceabc/' target='_blank'>View Certificate</a></button>
                                </span>
                            </li>
                            <li className='border-2 px-4 py-2 my-2 rounded-lg flex md:flex-row flex-col md:justify-between md:items-center text-center'>
                                <span className='text-md'>WordPress Website Developer by - Udemy</span>
                                <span>
                                    <button className='bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-full'><a href='https://www.udemy.com/certificate/UC-277dc337-7606-47ab-bb25-d5b2a99f6cbd/' target='_blank'>View Certificate</a></button>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className='text-blue-500 font-semibold text-xl'>Extra Circulars</h1>
                        <ul>
                            <li className='border-2 px-4 py-2 my-2 rounded-lg items-center flex justify-between'>NCC AirWing cadet in College</li>
                            <li className='border-2 px-4 py-2 my-2 rounded-lg items-center flex justify-between'>NSS volunteer in School</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default About