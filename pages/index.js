import { useRef, useEffect } from 'react'

import Header from '../components/Design1/Header'
import Projects from '../components/Design1/Projects/Projects'
import Skills from '../components/Design1/Skills'
import About from '../components/Design1/About'

export default function Home() {
  const projects = useRef(null)
  const skills = useRef(null)
  const about = useRef(null)

  useEffect(() => {
    // Scroll (instant) top when refresh page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })

    // Change font family
    document.querySelector(':root').style.setProperty('--font-family', "'Poppins', sans-serif")
  }, [])

  return (
    <>
      <main>
        <Header 
          projects={projects}
          skills={skills}
          about={about}
        />
        <Projects projects={projects}/>
        <Skills skills={skills} />
        <About about={about}/>
      </main>

      <footer></footer>{/* do new component */}
    </>
  )
}