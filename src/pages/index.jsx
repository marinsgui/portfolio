import Head from 'next/head'

// components
import About from '@/components/About'
import Projects from '@/components/Projects'
import Homepage from '@/components/Homepage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Guilherme Marins - Dev Front-End</title>
      </Head>
      <Homepage />
      <About />
      <Projects />
    </>
  )
}
