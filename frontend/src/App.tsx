/*
App.tsx

Main application component.
*/

import "@fontsource/jetbrains-mono/latin-400.css";
import "@fontsource/jetbrains-mono/latin-500.css";
import "@fontsource/jetbrains-mono/latin-800.css";

import { useEffect } from "react";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe"
import Experience from "./sections/Experience"
import Stack from "./sections/Stack"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Extracurriculars from "./sections/Extracurriculars"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

import { Analytics } from "@vercel/analytics/react";


export default function App() {
  /*
  Scrolling fade-in. Adding fade-in-section to an element causes it to
  fade-in when it enters the viewport. Occurs once after the component first renders.
  */
  useEffect(function setupFadeIn() {
    const sections = document.querySelectorAll(".fade-in-section");

    function handleEntry(entry: IntersectionObserverEntry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }

    function handleIntersections(entries: IntersectionObserverEntry[]) {
      for (const entry of entries) {
        handleEntry(entry);
      }
    }

    function observeSection(section: Element) {
      observer.observe(section);
    }

    // Watch sections and fade-in when each section is 10% visible
    const observer = new IntersectionObserver(
      handleIntersections,
      { threshold: 0.1 }
    );

    for (const section of sections) {
      observeSection(section);
    }

    function cleanup() {
      observer.disconnect();
    }

    return cleanup;
  }, []);

  return (
    <div style={{ backgroundColor: '#000000' }}>
      <NavBar />
      <Hero />
      <AboutMe />
      <Experience />
      <Stack />
      <Projects />
      <Education />
      <Extracurriculars />
      <Contact />
      <Footer />

      <Analytics />
    </div>
  );
}
