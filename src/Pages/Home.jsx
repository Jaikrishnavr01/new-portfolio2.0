import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import AboutSection from '../Components/AboutSection'
import Workprocess from '../Components/workprocess'
import Portfolio from '../Components/Portfolio'
import Disuss from '../Components/Disuss'
import WhatIDo from '../Components/WhatIDo'
import Testimonials from '../Components/Testimonials'

export default function Home() {
  return (
    <div>
      <div>
      <Navbar/>
      <Herosection/>
       <AboutSection/>
       <Workprocess/> 
      <Portfolio/>
      <Disuss/>
      <WhatIDo/>
      <Testimonials/>
      </div>
    </div>
  )
}
