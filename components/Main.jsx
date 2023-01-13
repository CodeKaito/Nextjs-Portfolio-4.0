import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'

const handleDone = () => {
    console.log(`Done after 5 loops!`)
}

const Main = () => {
  return (
    <div className='w-full h-screen text-center' id='home'>
        <div className='max-w-[1240px] w-full h-full max-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    Let's build something extraordinary together
                </p>
                <h1> Hi, I'm <span className='text-[#b8860b]'> Jerome </span></h1>
                    <p className='uppercase text-sm tracking-widest text-gray-600'> 
                        Life is simple{' '} 
                        <span>
                            <Typewriter
                            words={['<Eat>', 'Sleep', '{ Code }', 'Repeat!']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            />
                        </span>
                    </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
  )
}

export default Main