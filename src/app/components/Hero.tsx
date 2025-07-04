"use client"

import React from 'react'
import { Modern_Antiqua } from 'next/font/google'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import LeafLeft from '../assets/images/hero-left-leaf.png'
import RightLeft from '../assets/images/hero-right-leaf.png'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { start } from 'repl'

gsap.registerPlugin(ScrollTrigger)

const modernAnntiqua = Modern_Antiqua({ subsets: ['latin'], weight: "400" })


const Hero = () => {

  useGSAP(()=>{
    const heroSplit = new SplitText('.title', { type: 'chars' });
    const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

    heroSplit.chars.forEach((char)=>char.classList.add('text-gradient'))

    gsap.from(heroSplit.chars,{
      yPercent:100,
      duration:1.8,
      ease:'expo.out',
      stagger:0.06
    })

    gsap.from(paragraphSplit.lines,{
      opacity:0,
      yPercent:100,
      duration:1.8,
      delay:1,
      ease:'expo.out',
      stagger:0.06 
    })

    gsap.timeline({
      scrollTrigger:{
        trigger:'#hero',
        start:'top top',
        end:'bottom top',
        scrub:true
      }
    })
    .to('.right-leaf', { y:50 }, 0 )
    .to('.left-leaf',{ y:-200 } ,0)

  },[])

  return (
    <>
      <section id='hero' className='noisy' >
        <h1 className={` title ${modernAnntiqua.className}`}>Mojito</h1>

        <img 
        className='left-leaf'
        src={LeafLeft.src} 
        alt="left-leaf" />

        <img 
        className='right-leaf'
        src={RightLeft.src} 
        alt="right-leaf" />


        <div className='body'>
          <div className='content md:mt-30 lg:mt-0'>
            <div className=' space-y-5 hidden md:block '>
              <p>Cool. Crisp. Classic.</p>

              <p className='subtitle'>
                Sip the Spirit <br /> of Summer
              </p>
            </div>

              <div className=' view-cocktails '>
                <p className='subtitle'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. </p>

                <Link href={'#cocktails'}>View cocktails</Link>
              </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default Hero