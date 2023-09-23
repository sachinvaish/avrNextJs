
import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import Slider from './components/Slider'
import About from './components/About'
import Numbers from './components/Numbers'
import Services from './components/Services'
import Presence2 from './components/Presence2'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
        <Header /> 
        <Slider />
        <About />
        {/* <Counter /> */}
        <Numbers/>
        <Services />
        {/* <OurPresence/> */}
        <Presence2/>
        <Contact/>
        <Footer />
        <a className="scroll-top-arrow" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>
  )
}
