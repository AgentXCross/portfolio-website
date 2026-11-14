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


interface EducationEntry {
  school: string;
  degree: string;
  date: string;
  bullets: string[];
  logo: string;
  image: string;
  imageAlt: string;
}

// Add new entries here. Order is top-to-bottom; sides alternate automatically
// (first entry: card left / image right, second: card right / image left, ...).
const education: EducationEntry[] = [
  {
    school: "University of Waterloo",
    degree: "Bachelor of Computer Science - BCS, Computer Science",
    date: "Sept 2025 - Apr 2030",
    bullets: [
      "Major Average: 93.1% | Cumulative Average: 92.7% | GPA: 3.98/4.00",
      "Hershel and Mary Anne Harris Scholarship, President's Scholarship of Distinction",
      "Coursework: Object-Oriented Programming, Linear Algebra, Calculus, Functional Programming, Imperative Programming & Data Structures, Probability & Statistics, Compilers and Low-Level Programming",
      "Varsity Cross-Country, WAT.ai Design Team",
    ],
    logo: waterlooSeal,
    image: waterlooimage,
    imageAlt: "University of Waterloo",
  },
  {
    school: "Bill Crothers Secondary School",
    degree: "Ontario Secondary School Diploma",
    date: "Aug 2021 - Jun 2025",
    bullets: [
      "Graduated 2nd in the Class of 2025 with 99.167% Top 6 Gr 12 Average",
      "Academic Accomplishment Award, Excellence in Mathematics Award, Ontario Scholar, Honour Roll",
      "8x UWaterloo Math Contest School Champion + Certificate of Distinction",
      "4x OFSAA Track/XC",
      "Subject Awards: Calculus & Vectors, Advanced Functions, English, Gym Leadership, Chemistry, Physics",
    ],
    logo: bcss,
    image: bcssImage,
    imageAlt: "Bill Crothers Secondary School",
  },
];


function TimelineItem({ entry, cardOnLeft }: { entry: EducationEntry; cardOnLeft: boolean }) {
  const logo = (
    <CardItem className="education-card-logo-container">
      <img src={entry.logo} alt={`${entry.school} logo`} className="education-card-logo" loading="lazy" />
    </CardItem>
  );

  const heading = (
    <div>
      <h3 className="education-card-title">{entry.school}</h3>
      <p className="education-card-company">{entry.degree}</p>
    </div>
  );

  const card = (
    <div className={`timeline-card ${cardOnLeft ? "timeline-card-left" : "timeline-card-right"}`}>
      <Card className="education-card" containerClassName="education-card-container">
        <div className={`education-card-header${cardOnLeft ? " education-card-header-left" : ""}`}>
          {cardOnLeft ? <>{heading}{logo}</> : <>{logo}{heading}</>}
        </div>

        <p className="education-card-date">{entry.date}</p>
        <ul className="education-card-list">
          {entry.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
        </ul>
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


export default function Education() {
  return (
    <section id="education" className="fade-in-section education">
      <img src={waterlooSeal} alt="" className="education-seal" />

      <h2 className="education-title">EDUCATION</h2>

      <div className="education-container">
        <div className="timeline-line" />

        <div className="timeline-items">
          {education.map((entry, i) => (
            <TimelineItem key={entry.school} entry={entry} cardOnLeft={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
