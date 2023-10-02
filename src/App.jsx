import './App.css'
import Nbar from './component/Nbar'
import About from './component/About'
import Projects from './component/Projects'
import Skill from './component/Skill'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <header>
        <Nbar />
      </header>
      <main>
        <section id='about'>
          <About />
        </section>
        <section id='project'>
          <Projects />
        </section>
        <section id='skill'>
          <Skill />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
