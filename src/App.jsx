import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Reviews from './components/Reviews'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Team from "./components/Team"

function App() {
  return (
     <div>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Team/>
      <Reviews />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App