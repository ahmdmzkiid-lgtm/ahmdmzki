import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { EnhancedLayout } from './components/enhanced/EnhancedLayout'
import './styles/enhanced.css'

function App() {
  return (
    <EnhancedLayout>
      <div className="bg-black selection:bg-white selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </EnhancedLayout>
  )
}

export default App
