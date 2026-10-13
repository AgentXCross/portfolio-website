/*
AboutMe.tsx

Section 2: About Me
*/

import "./AboutMe.css"

import bibsImg from "../assets/bibs.webp";


export default function AboutMe() {
  return (
    <section id="about" className="fade-in-section about-me">
      <h2 className="about-title">ABOUT ME</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I’m Michael! I'm currently a 2A BCS Computer Science student at the University of Waterloo.
            My primary interests are in Machine Learning, Computer Vision, and Systems Programming.
            <br /><br />
            I'm currently working on two personal projects for fun: a C++17 machine learning library built
            from scratch using the C++ Standard Library and CourtHawk, a full-stack Tennis computer vision system.
            <br /><br />
            Outside of academics, I have over four years of experience coaching tennis at Unionville Tennis
            Club and I previously competed as a Varsity Cross-Country athlete for the University of Waterloo.
          </p>
        </div>
        <div className="about-image-container">
          <img src={bibsImg} alt="" className="about-image" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
