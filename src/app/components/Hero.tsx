import React from 'react'
import { Modern_Antiqua } from 'next/font/google'
import { Playwrite_NG_Modern } from 'next/font/google'
import LeafLeft from '../assets/images/cocktail-left-leaf.png'
import RightLeft from '../assets/images/cocktail-right-leaf.png'
import Link from 'next/link'


const modernAnntiqua = Modern_Antiqua({ subsets: ['latin'], weight: "400" })


const Hero = () => {
  return (
    <>
      <section id='hero' className='noisy' >
        <h1 className={`${modernAnntiqua.className}`}>Mojito</h1>

        <img 
        className='left-leaf'
        src={LeafLeft.src} 
        alt="left-leaf" />

        <img 
        className='right-leaf'
        src={RightLeft.src} 
        alt="left-leaf" />

        <div className='body'>
          <div className='content'>
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