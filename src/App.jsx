import { useState } from 'react'
import './App.css'
import Skill from './components/main/skill'
import Nv from './components/Navbar'
import Project from './components/main/project'
import About from './components/main/about'
function App() {
  return (
    <>
          <Nv />
          {/* <About /> */}
          <Project />
          {/* <Skill /> */}
    </>
  )
}

export default App
