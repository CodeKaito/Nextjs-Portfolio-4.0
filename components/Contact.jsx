import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutLineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen' id='contact'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#292934]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in-out duration-300' src='./assets/contact1.jpg'/>
                        </div>
                        <div>
                            <h2 className='py-2'>Jerome Decinco</h2>
                            <p>Frontend Developer</p>
                            <p className='py-4'>I am available for freelance or full-time positions. Contact me and let's talk..</p>
                        </div>
                        <div>
                        <p className='uppercase pt-8'>Connect With Me</p>
                        <div className='flex items-center justify-between py-4'>
                            <a href='https://www.linkedin.com/in/jerome-de-cinco-4b4904189/' target='_blank' rel='noreferrer'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                            </a>
                            <a href='https://www.instagram.com/carljeromee/' target='_blank' rel='noreferrer'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaInstagram />
                                </div>
                            </a>
                            <a href='https://github.com/CodeKaito' target='_blank' rel='noreferrer'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                            </a>
                            <a href='https://twitter.com/carljeromeoff' target='_blank' rel='noreferrer'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaTwitter />
                                </div>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='name'
                    />
                    </div>
                    <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                        Phone Number
                    </label>
                    <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='phone'
                    />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                    Send Message
                </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Contact