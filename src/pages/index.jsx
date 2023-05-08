import Head from 'next/head'

// components
import About from '../components/About'
import Projects from '../components/Projects'
import Homepage from '../components/Homepage'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Guilherme Marins - Dev Front-End</title>
      </Head>
      <Homepage />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
