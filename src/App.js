import React from 'react'
import Header from './components/Header'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievement from './components/Achievement'
import Download from './components/Download'

const App = () => {
  return (
    <>
      <Header />
      <Education />
      <Projects />
      <Skills />
      <Achievement />
      <Download />
      <footer>Build with ❤ using React JS</footer>
    </>
  )
}

export default App