import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import AboutSection from '../Components/AboutSection'
import Workprocess from '../Components/workprocess'
import Portfolio from '../Components/Portfolio'

export default function Home() {
  return (
    <div>
      <div>
      <Navbar/>
      <Herosection/>
       <AboutSection/>
       <Workprocess/> 
      <Portfolio/>
      </div>
    </div>
  )
}
