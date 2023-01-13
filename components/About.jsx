import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#292934]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>// I am The Developer //</p>
                <p className='py-2 text-gray-600'>
                    I have spent the last couple of years as an IT Support Specialist.
                    I have always had a knack for web developer and programming languages, so recently 
                    I started working with HTML & CSS to make some minor edits on a small business website
                    that i was operating. What I thought was just a few small edits turned into a love for developing. 
                </p>
                <p className='py-2 text-gray-600'>
                    Fascinated with how intricate programming can be I was quickly drawn to learn more.
                    I started learning some Javascript and was evene more enthused with making websites interactive.
                    The in started freelancing for e-commerce companies on the shopify platform.
                    I am now spending my time building projects with React JS, firebase, and learning new technologies.
                </p>
                <p className='py-2 text-gray-600'> Check out my latest <span className='text-decoration-line: underline cursor-pointer'>projects</span></p>
            </div>
            <div className=' rounded-xl w-full h-auto m-auto shadow-xl shadow-gray-400 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img src='/assets/aboutLogo.svg' alt='/' />
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default About