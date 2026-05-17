import About from './About.jsx'
import Work from './Work.jsx'
import Hero from './Hero.jsx'
import Contact from './Contact.jsx'



const Home = () => {
  return (
    <div>
      <section id='hero'>
        <Hero />
      </section>

      <section id='about'>
        <About />
      </section>
      <section id='work'>
        <Work />
      </section>
      <section id='contact'>  
        <Contact />
      </section>
    </div>
  )
}

export default Home