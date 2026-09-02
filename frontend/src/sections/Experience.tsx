/*
Experience.tsx

Section 3: Work Experience
*/

import "./Experience.css"

import { Card, CardItem } from "../components/Card";

import sickKids from "../assets/sickkids.webp";
import watai from "../assets/watai.png";
import utc from "../assets/utc.png";

import sickKidsHospital from "../assets/sickkidshospital.webp";
import wataiImage from "../assets/wataiimage.avif";
import utcImage from "../assets/utcimage.webp";


export default function Experience() {
  return (
    <section id="experience" className="fade-in-section experience">
      <h2 className="experience-title">WORK EXPERIENCE</h2>

      <div className="experience-container">

        <div className="timeline-line" /> {/* Vertical dotted line */}

        <div className="timeline-items"> {/* Timeline items */}

          {/* Item 1: Card Left, Image Right */}
          <div className="timeline-item">
            <div className="timeline-card timeline-card-left">
              <Card 
                className="experience-card" 
                containerClassName="experience-card-container"
              >
                <CardItem className="experience-card-content">
                  <div className="experience-card-header experience-card-header-left">
                    <div>
                      <h3 className="experience-card-title">Machine Learning Research Assistant</h3>
                      <p className="experience-card-company">The Hospital for Sick Children</p>
                    </div>

                    <CardItem className="experience-card-logo-container">
                      <img src={sickKids} alt="sick-kids" className="experience-card-logo" loading="lazy" />
                    </CardItem>
                  </div>

                  <p className="experience-card-date">May 2026 - Aug 2026</p>
                  <p className="experience-card-description">Reaction Generative-Flow Networks & Parallel Synthesis</p>
                </CardItem>
              </Card>
            </div>

            <div className="timeline-dot" />

            <div className="timeline-image timeline-image-right">
              <img src={sickKidsHospital} alt="SickKids Hospital" className="timeline-image-content" loading="lazy" />
            </div>
          </div>

          {/* Item 2: Card Right, Image Left */}
          <div className="timeline-item">
            <div className="timeline-image timeline-image-left">
              <img src={wataiImage} alt="WAT.ai" className="timeline-image-content" loading="lazy" />
            </div>

            <div className="timeline-dot" />

            <div className="timeline-card timeline-card-right">
              <Card
                className="experience-card"
                containerClassName="experience-card-container"
              >
                <CardItem className="experience-card-content">
                  <div className="experience-card-header">
                    <CardItem className="experience-card-logo-container">
                      <img src={watai} alt="logo" className="experience-card-logo" loading="lazy" />
                    </CardItem>

                    <div>
                      <h3 className="experience-card-title">Machine Learning Scientist</h3>
                      <p className="experience-card-company">WAT.ai</p>
                    </div>
                  </div>

                  <p className="experience-card-date">Sept 2025 - Feb 2026</p>
                  <p className="experience-card-description">Semantic Segmentation of Microaneuryms in Fundus Imaging</p>
                </CardItem>
              </Card>
            </div>
          </div>

          {/* Item 3: Card Left, Image Right */}
          <div className="timeline-item">
            <div className="timeline-card timeline-card-left">
              <Card
                className="experience-card"
                containerClassName="experience-card-container"
              >
                <CardItem className="experience-card-content">
                  <div className="experience-card-header experience-card-header-left">
                    <div>
                      <h3 className="experience-card-title">Tennis Instructor</h3>
                      <p className="experience-card-company">Unionville Tennis Club</p>
                    </div>

                    <CardItem className="experience-card-logo-container">
                      <img src={utc} alt="logo" className="experience-card-logo" loading="lazy" />
                    </CardItem>
                  </div>

                  <p className="experience-card-date">Apr 2022 - Aug 2025</p>
                  <p className="experience-card-description">TPA Certified Instructor | 500+ Hours On-Court</p>
                </CardItem>
              </Card>
            </div>

            <div className="timeline-dot" />

            <div className="timeline-image timeline-image-right">
              <img src={utcImage} alt="Unionville Tennis Club" className="timeline-image-content" loading="lazy" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}