/*
Experience.tsx

Section 3: Work Experience
*/

import "./Experience.css"

import { Card, CardItem } from "../components/Card";

import sickKids from "./assets/sickkids.webp";
import watai from "./assets/watai.png";
import utc from "./assets/utc.png";

import sickKidsHospital from "./assets/sickkidshospital.webp";
import wataiImage from "./assets/wataiimage.avif";
import utcImage from "./assets/utcimage.webp";


export default function Experience() {
  return (
    <section id="experience" className="fade-in-section experience">
      <h2 className="experience-title">WORK EXPERIENCE</h2>

      <div className="experience-container">

        <div className="timeline-line" /> {/* Vertical dotted line */}

        <div className="timeline-items"> {/* Timeline items */}

          {/* Item 1 - Left */}
          <div className="timeline-item">
            <div className="timeline-card timeline-card-left">
              <Card className="w-full" containerClassName="py-0 w-full">
                  <CardItem translateZ={50} className="w-full bg-[rgb(33,33,33)] border-2 border-white/10 rounded-2xl card-corner-glow p-6">
                    <div className="flex items-center gap-3 justify-end">
                      <div>
                        <h3 className="text-3xl" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800 }}>Machine Learning Research Assistant</h3>
                        <p className="text-white/60 text-base mt-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>The Hospital for Sick Children</p>
                      </div>
                      <CardItem translateZ={80} className="flex-shrink-0">
                        <img src={sickKids} alt="sick-kids" className="w-22 h-22 rounded-lg object-contain bg-white/10 p-1" loading="lazy" />
                      </CardItem>
                    </div>
                    <p className="text-white/40 text-sm mt-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>May 2026 - Aug 2026</p>
                    <p className="text-white/80 text-base mt-3 leading-relaxed" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      Reaction Generative-Flow Networks & Parallel Synthesis
                    </p>
                  </CardItem>
              </Card>
            </div>
            {/* Dot */}
            <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#daff0f] z-10" />
            <div className="timeline-img w-1/2 pl-12">
              <img src={sickKidsHospital} alt="SickKids Hospital" className="w-full rounded-2xl object-cover h-48" loading="lazy" />
            </div>
          </div>

          {/* Item 2 - Right */}
          <div className="timeline-item relative flex items-center">
            <div className="timeline-img w-1/2 pr-12">
              <img src={wataiImage} alt="WAT.ai" className="w-full rounded-2xl object-cover h-48" loading="lazy" />
            </div>
            {/* Dot */}
            <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#daff0f] z-10" />
            <div className="timeline-card timeline-card-right w-1/2 pl-12">
              <Card className="w-full" containerClassName="py-0 w-full">
                  <CardItem translateZ={50} className="w-full bg-[rgb(33,33,33)] border-2 border-white/10 rounded-2xl card-corner-glow p-6">
                    <div className="flex items-center gap-3">
                      <CardItem translateZ={80} className="flex-shrink-0">
                        <img src={watai} alt="logo" className="w-22 h-22 rounded-lg object-contain bg-white/10 p-1" loading="lazy" />
                      </CardItem>
                      <div>
                        <h3 className="text-3xl" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800 }}>Machine Learning Scientist</h3>
                        <p className="text-white/60 text-base mt-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>WAT.ai</p>
                      </div>
                    </div>
                    <p className="text-white/40 text-sm mt-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Sept 2025 - Feb 2026</p>
                    <p className="text-white/80 text-base mt-3 leading-relaxed" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      Semantic Segmentation of Microaneuryms in Fundus Imaging
                    </p>
                  </CardItem>
              </Card>
            </div>
          </div>

          {/* Item 3 - Left */}
          <div className="timeline-item relative flex items-center">
            <div className="timeline-card w-1/2 pr-12 text-right">
              <Card className="w-full" containerClassName="py-0 w-full">
                  <CardItem translateZ={50} className="w-full bg-[rgb(33,33,33)] border-2 border-white/10 rounded-2xl card-corner-glow p-6">
                    <div className="flex items-center gap-3 justify-end">
                      <div>
                        <h3 className="text-3xl" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800 }}>Tennis Instructor</h3>
                        <p className="text-white/60 text-base mt-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Unionville Tennis Club</p>
                      </div>
                      <CardItem translateZ={80} className="flex-shrink-0">
                        <img src={utc} alt="logo" className="w-22 h-22 rounded-lg object-contain bg-white/10 p-1" loading="lazy" />
                      </CardItem>
                    </div>
                    <p className="text-white/40 text-sm mt-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Apr 2022 - Aug 2025</p>
                    <p className="text-white/80 text-base mt-3 leading-relaxed" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      TPA Certified Instructor | 500+ Hours On-Court
                    </p>
                  </CardItem>
              </Card>
            </div>
            {/* Dot */}
            <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#daff0f] z-10" />
            <div className="timeline-img w-1/2 pl-12">
              <img src={utcImage} alt="Unionville Tennis Club" className="w-full rounded-2xl object-cover h-48" loading="lazy" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}