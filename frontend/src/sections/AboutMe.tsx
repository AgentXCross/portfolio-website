/*
AboutMe.tsx

Section 2: About Me 
*/

import "./AboutMe.css"

import { Card, CardItem } from "../components/Card";

import bibsImg from "../assets/bibs.webp";


export default function AboutMe() {
  return (
    <section id="about" className="fade-in-section about-me">
      <Card className="about-card-inner" containerClassName="about-card-outer">

        <CardItem className="about-title-container">
          <h2 className="about-title">ABOUT ME</h2>
        </CardItem>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I’m Michael! I'm currently a 2A BCS Computer Science + Digital Hardware student at the University of Waterloo.
              My primary interests are in Embedded Systems, Machine Learning, and Computer Vision.
              Outside of academics, I have over four years of experience coaching tennis at Unionville Tennis
              Club and I compete as a Varsity Cross-Country athlete for the University of Waterloo.
            </p>
          </div>
          <CardItem className="about-image-container">
            <img src={bibsImg} alt="" className="about-image" loading="lazy" />
          </CardItem>
        </div>

      </Card>
    </section>
  );
}