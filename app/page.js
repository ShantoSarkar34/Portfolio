
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Survices from './components/Survices'
import Portfolio from './components/Portfolio'
import Projectinfo from './components/Projectinfo'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    {/* Header section - start */}
    <Header/>
    {/* Header section - end */}

    {/* Hero section - start  */}
    <Hero/>
    {/* Hero section - end */}

    {/* About section - start  */}
    <About/>
    {/* About section - end */}

    {/* Survices section - seart  */}
    <Survices/>
    {/* Survices section - end */}

    {/* Portfolio section - start  */}
    <Portfolio/>
    {/* Portfolio section - end */}

    {/* Projectinfo section - start  */}
    <Projectinfo/>
    {/* Projectinfo section - end */}

    {/* News section - start  */}
    <News/>
    {/* News section - end */}

    {/* Contact section - start  */}
    <Contact/>
    {/* Contact section - end */}

    {/* Footer section - start  */}
    <Footer/>
    {/* Footer section - end */}
    </>
  )
}
