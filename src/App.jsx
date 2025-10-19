
import React, { useState } from "react";

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import SkillsProgress from './Components/SkillsProgress'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <div>
      <Navbar onThemeChange={setTheme} />
      <Hero theme={theme} />
      <About theme={theme} />

      <Skills theme={theme}/>
      <SkillsProgress theme={theme}/>
      <Projects theme={theme}/>
      <Experience theme={theme}/>
      <Education theme={theme}/>
      <Testimonials theme={theme}/>
      <Contact theme={theme}/>
      <Footer theme={theme} />

    </div>
  )
}

export default App