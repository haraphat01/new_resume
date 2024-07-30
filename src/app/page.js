"use client"
import Head from 'next/head';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion'; // Add this import

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <Head>
        <title>Arafat Akata - Frontend Engineer</title>
        <meta name="description" content="Arafat Akata's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar activeSection={activeSection} scrollTo={scrollTo} />

      <AnimatePresence>
        <main className="container mx-auto px-4 pt-20">
          <Homepage scrollTo={scrollTo} />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}