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


interface ExtracurricularEntry {
  title: string;
  org: string;
  date: string;
  description: string;
  logo: string;
  image: string;
  imageAlt: string;
}

// Add new entries here. Order is top-to-bottom; sides alternate automatically
// (first entry: card left / image right, second: card right / image left, ...).
const extracurriculars: ExtracurricularEntry[] = [
  {
    title: "Varsity XC Athlete",
    org: "University of Waterloo",
    date: "Sept 2025 - Sept 2026",
    description: "Varsity Cross-Country",
    logo: warriorHelm,
    image: xcteam,
    imageAlt: "University of Waterloo cross-country team",
  },
  {
    title: "XC & Track Athlete",
    org: "University of Toronto Track Club",
    date: "July 2022 - August 2025",
    description: "1:22:16 Toronto Half Marathon",
    logo: torontoTrack,
    image: uttcTeam,
    imageAlt: "University of Toronto Track Club team",
  },
  {
    title: "Tennis Athlete",
    org: "Tennis Canada",
    date: "Mar 2018 - June 2022",
    description: "Career Peak Rankings: 48th in Canadian Singles, 25th in Canadian Doubles",
    logo: tennisCanada,
    image: avivaCentre,
    imageAlt: "Aviva Centre",
  },
];


function TimelineItem({ entry, cardOnLeft }: { entry: ExtracurricularEntry; cardOnLeft: boolean }) {
  const logo = (
    <CardItem className="extracurricular-card-logo-container">
      <img src={entry.logo} alt={`${entry.org} logo`} className="extracurricular-card-logo" loading="lazy" />
    </CardItem>
  );

  const heading = (
    <div>
      <h3 className="extracurricular-card-title">{entry.title}</h3>
      <p className="extracurricular-card-org">{entry.org}</p>
    </div>
  );

  const card = (
    <div className={`timeline-card ${cardOnLeft ? "timeline-card-left" : "timeline-card-right"}`}>
      <Card className="extracurricular-card" containerClassName="extracurricular-card-container">
        <div className={`extracurricular-card-header${cardOnLeft ? " extracurricular-card-header-left" : ""}`}>
          {cardOnLeft ? <>{heading}{logo}</> : <>{logo}{heading}</>}
        </div>

        <p className="extracurricular-card-date">{entry.date}</p>
        <p className="extracurricular-card-description">{entry.description}</p>
      </Card>
    </div>
  );

  const image = (
    <div className={`timeline-image ${cardOnLeft ? "timeline-image-right" : "timeline-image-left"}`}>
      <img src={entry.image} alt={entry.imageAlt} className="timeline-image-content" loading="lazy" />
    </div>
  );

  return (
    <div className="timeline-item">
      {cardOnLeft ? card : image}
      <div className="timeline-dot" />
      {cardOnLeft ? image : card}
    </div>
  );
}


export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="fade-in-section extracurriculars">
      <img src={warriorHelm} alt="" className="extracurriculars-background" />

      <h2 className="extracurriculars-title">EXTRACURRICULARS</h2>

      <div className="extracurriculars-container">
        <div className="timeline-line" />

        <div className="timeline-items">
          {extracurriculars.map((entry, i) => (
            <TimelineItem key={entry.title + entry.org} entry={entry} cardOnLeft={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
