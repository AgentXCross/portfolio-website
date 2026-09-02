/*
Education.tsx

Section 6: Education
*/

import "./Education.css";

import { Card, CardItem } from "../components/Card";

import waterlooSeal from "../assets/uwaterloo_seel.svg";
import waterlooimage from "../assets/waterlooimage.avif";
import bcss from "../assets/bcss.png";
import bcssImage from "../assets/bcssimage.avif";


export default function Education() {
  return (
    <section id="education" className="fade-in-section education">
      <img src={waterlooSeal} alt="" className="education-seal" />

      <h2 className="education-title">EDUCATION</h2>

      <div className="education-container">
        <div className="timeline-line" />

        <div className="timeline-items">
          {/* Item 1: Card Left, Image Right */}
          <div className="timeline-item">
            <div className="timeline-card timeline-card-left">
              <Card className="education-card" containerClassName="education-card-container">
                <div className="education-card-header education-card-header-left">
                  <div>
                    <h3 className="education-card-title">University of Waterloo</h3>
                    <p className="education-card-company">Bachelor of Computer Science - BCS, Computer Science with Digital Hardware Specialization</p>
                  </div>

                  <CardItem className="education-card-logo-container">
                    <img src={waterlooSeal} alt="waterloo" className="education-card-logo" loading="lazy" />
                  </CardItem>
                </div>

                <p className="education-card-date">Sept 2025 - Current</p>
                <ul className="education-card-list">
                  <li>Major Average: 93.1% | Cumulative Average: 92.7% | GPA: 3.98/4.00</li>
                  <li>Hershel and Mary Anne Harris Scholarship, President's Scholarship of Distinction</li>
                  <li>Coursework: Linear Algebra, Functional Programming, Imperative Programming & Data Structures, Calculus, Probability & Statistics</li>
                  <li>Varsity XC, WAT.ai Design Team</li>
                </ul>
              </Card>
            </div>

            <div className="timeline-dot" />

            <div className="timeline-image timeline-image-right">
              <img src={waterlooimage} alt="waterloo" className="timeline-image-content" loading="lazy" />
            </div>
          </div>

          {/* Item 2: Card Right, Image Left */}
          <div className="timeline-item">
            <div className="timeline-image timeline-image-left">
              <img src={bcssImage} alt="bcss" className="timeline-image-content" loading="lazy" />
            </div>

            <div className="timeline-dot" />

            <div className="timeline-card timeline-card-right">
              <Card className="education-card" containerClassName="education-card-container">
                <div className="education-card-header">
                  <CardItem className="education-card-logo-container">
                    <img src={bcss} alt="waterloo" className="education-card-logo" loading="lazy" />
                  </CardItem>

                  <div>
                    <h3 className="education-card-title">Bill Crothers Secondary School</h3>
                    <p className="education-card-company">Ontario Secondary School Diploma</p>
                  </div>
                </div>

                <p className="education-card-date">Aug 2021 - Jun 2025</p>
                <ul className="education-card-list">
                  <li>Graduated 2nd in the Class of 2025 with 99.167% Top 6 Gr 12 Average</li>
                  <li>Academic Accomplishment Award, Excellence in Mathematics Award, Ontario Scholar, Honour Roll</li>
                  <li>8x UWaterloo Math Contest School Champion + Certificate of Distinction</li>
                  <li>4x OFSAA Track/XC</li>
                  <li>Subject Awards: Calculus & Vectors, Advanced Functions, English, Gym Leadership, Chemistry, Physics</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
