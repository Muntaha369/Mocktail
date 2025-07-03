"use client"

import React, { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { navLinks } from '../constants'
import { Modern_Antiqua } from 'next/font/google'
import Logo from '../assets/images/logo.png'

gsap.registerPlugin(ScrollTrigger)

const modernAnntiqua = Modern_Antiqua({ subsets: ['latin'], weight: "400" })

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current,
        start: "bottom top",
        // markers: true,
        scrub:1
      }
    })

    navTween.fromTo(
      navRef.current,
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#000000",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: 'power1.inOut'
      }
    )
  }, [])

  return (
    <nav ref={navRef}>
      <div className='w-[95%]'>
        <Link className='flex items-center gap-2' href="#home">
          <img src={Logo.src} alt="Logo" />
          <p className={modernAnntiqua.className}>Velvet Pour</p>
        </Link>

        <ul>
          {
            navLinks.map((link) => (
              <li key={link.id}>
                <Link href={`#${link.id}`}>{link.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

      