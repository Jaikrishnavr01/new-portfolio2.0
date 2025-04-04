import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import AboutSection from '../Components/AboutSection'
import Workprocess from '../Components/workprocess'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
       <AboutSection/>
       <Workprocess/> 
    </div>
  )
}
