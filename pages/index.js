import Main from '../components/Main'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaito | Front-End Developer</title>
      </Head>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
    </>
  )
}
