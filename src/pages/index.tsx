import React from 'react'
import Presentation from '../components/Presentation'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Credits from '../components/Credits'
import Menu from '../components/Menu'
import A from '../components/common/A'

const Home = () => (
  <>
    <Presentation />
    <About />
    <Gallery />
    <Testimonials />
    <Credits />
    <Menu>
      <A href="#sobre">Sobre</A>
      <A href="#galeria">Galeria</A>
      <A href="/agenda">Agenda</A>
    </Menu>
  </>
)

export default Home
