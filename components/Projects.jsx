import React from 'react'
import propertyImg from '../public/assets/projects/property.jpg'
import Image from 'next/image'
import Link from 'next/link'
import ProjectItem from './ProjectItem'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'

const Projects = () => {
  return (
    <div className='w-full' id='projects'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='uppercase text-xl tracking-widest text-[#292934]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title='Property Finder' backgroundImg={propertyImg} projectUrl='/property'/>

                    <ProjectItem title='Crypto App' backgroundImg={cryptoImg} projectUrl='/property'/>

                    <ProjectItem title='Netflix copy' backgroundImg={netflixImg} projectUrl='/property'/>

                    <ProjectItem title='Twitch copy' backgroundImg={twitchImg} projectUrl='/property'/>

            </div>
        </div>
    </div>
  )
}

export default Projects