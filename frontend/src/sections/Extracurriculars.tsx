/*
Extracurriculars.tsx

Section 7: Extracurriculars
*/

import "./Extracurriculars.css";

import { Card, CardItem } from "../components/Card";

import warriorHelm from "../assets/warrior_helm.png";
import xcteam from "../assets/xcteam.webp";
import torontoTrack from "../assets/uoft.png";
import uttcTeam from "../assets/uoftteam.webp";
import tennisCanada from "../assets/tenniscanada.svg";
import avivaCentre from "../assets/avivacentre.webp";


export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="fade-in-section extracurriculars">
      <img src={warriorHelm} alt="" className="extracurriculars-background" />

      <h2 className="extracurriculars-title">EXTRACURRICULARS</h2>

      <div className="extracurriculars-container">
        <div className="timeline-line" />

        <div className="timeline-items">
          {/* Item 1: Card Left, Image Right */}
          <div className="timeline-item">
            <div className="timeline-card timeline-card-left">
              <Card className="extracurricular-card" containerClassName="extracurricular-card-container">
                <div className="extracurricular-card-header extracurricular-card-header-left">
                  <div>
                    <h3 className="extracurricular-card-title">Varsity XC Athlete</h3>
                    <p className="extracurricular-card-org">University of Waterloo</p>
                  </div>

                  <CardItem className="extracurricular-card-logo-container">
                    <img src={warriorHelm} alt="logo" className="extracurricular-card-logo" loading="lazy" />
                  </CardItem>
                </div>

                <p className="extracurricular-card-date">Sept 2025 - Current</p>
                <p className="extracurricular-card-description">Varsity XC</p>
              </Card>
            </div>

            <div className="timeline-dot" />

            <div className="timeline-image timeline-image-right">
              <img src={xcteam} alt="Placeholder" className="timeline-image-content" loading="lazy" />
            </div>
          </div>

          {/* Item 2: Card Right, Image Left */}
          <div className="timeline-item">
            <div className="timeline-image timeline-image-left">
              <img src={uttcTeam} alt="Placeholder" className="timeline-image-content" loading="lazy" />
            </div>

            <div className="timeline-dot" />

            <div className="timeline-card timeline-card-right">
              <Card className="extracurricular-card" containerClassName="extracurricular-card-container">
                <div className="extracurricular-card-header">
                  <CardItem className="extracurricular-card-logo-container">
                    <img src={torontoTrack} alt="logo" className="extracurricular-card-logo" loading="lazy" />
                  </CardItem>

                  <div>
                    <h3 className="extracurricular-card-title">XC & Track Athlete</h3>
                    <p className="extracurricular-card-org">University of Toronto Track Club</p>
                  </div>
                </div>

                <p className="extracurricular-card-date">July 2022 - August 2025</p>
                <p className="extracurricular-card-description">1:22:16 Toronto Half Marathon</p>
              </Card>
            </div>
          </div>

          {/* Item 3: Card Left, Image Right */}
          <div className="timeline-item">
            <div className="timeline-card timeline-card-left">
              <Card className="extracurricular-card" containerClassName="extracurricular-card-container">
                <div className="extracurricular-card-header extracurricular-card-header-left">
                  <div>
                    <h3 className="extracurricular-card-title">Tennis Athlete</h3>
                    <p className="extracurricular-card-org">Tennis Canada</p>
                  </div>

                  <CardItem className="extracurricular-card-logo-container">
                    <img src={tennisCanada} alt="logo" className="extracurricular-card-logo" loading="lazy" />
                  </CardItem>
                </div>

                <p className="extracurricular-card-date">Mar 2018 - June 2022</p>
                <p className="extracurricular-card-description">Career Peek Rankings: 48th in Canadian Singles, 25th in Canadian Doubles</p>
              </Card>
            </div>

            <div className="timeline-dot" />

            <div className="timeline-image timeline-image-right">
              <img src={avivaCentre} alt="Placeholder" className="timeline-image-content" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
