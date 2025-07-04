import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='h-[100vh]'></div>
    </div>
  )
}

export default page