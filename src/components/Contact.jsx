import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onsubmit=async ({name,email,mess})=>{
        
        const userInfo={
            name,email,mess
        }

        try {
            axios.post('https://getform.io/f/aroozdkb',userInfo)
            toast.success("Your message has been sent")
        } catch (error) {
            toast.error("Somethig went wrong")           
        }
    }
    return (
        <div name="Contacts" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 ">
            <h1 className='text-3xl font-bold mb-4'>Contact me </h1>
            <span>Please fill out the form below to contact me</span>
            <div className=" flex justify-center items-center mt-5 flex-col p-5">

                <form className='bg-slate-300 md:w-2/6  rounded-xl' onSubmit={handleSubmit(onsubmit)}>
                    <h1 className='text-xl font-semibold my-4 text-center'>Send your Message</h1>
                    <div className="flex flex-col mb-4 mx-10">
                        <label htmlFor="name" className='mb-1'>
                            Full Name
                        </label>
                        <input  {...register("name", { required: true })} className='outline-none rounded-md px-4 py-2 flex justify-center items-center' type="text" name='name' placeholder='Enter Your Name' />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="flex flex-col mb-4 mx-10">
                        <label htmlFor="name" className='mb-1'>
                            Email Address
                        </label>
                        <input {...register("email", { required: true })} className='outline-none rounded-md px-4 py-2 flex justify-center items-center' type="text" name='email' placeholder='Enter Your Email Address' />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="flex flex-col mb-4 mx-10">
                        <label htmlFor="name" className='mb-1'>
                            Message
                        </label>
                        <textarea {...register("mess", { required: true })} className='outline-none rounded-md px-4 py-2 flex justify-center items-center' type="text" name='mess' placeholder='Enter Your Name' />
                        {errors.mess && <span>This field is required</span>}
                    </div>
                    <div className=" mb-4 mx-10 flex justify-center">
                        <button type='submit' className='bg-slate-900 text-white rounded-lg py-3 px-7 hover:scale-105 hover:bg-black duration-150'>Send</button>
                    </div>
                </form>
            </div>
            <hr />
        </div>
    )
}

export default Contact