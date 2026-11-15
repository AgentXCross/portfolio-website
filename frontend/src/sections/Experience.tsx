/*
Experience.tsx

Section 3: Work Experience
*/

import "./Experience.css"

import { Card, CardItem } from "../components/Card";

import sickKids from "../assets/sickkids.webp";
import watai from "../assets/watai.png";
import utc from "../assets/utc.png";
import western from "../assets/Western.png";

import sickKidsHospital from "../assets/sickkidshospital.webp";
import wataiImage from "../assets/wataiimage.avif";
import utcImage from "../assets/utcimage.webp";
import westernImage from "../assets/western_image.jpg"


interface ExperienceEntry {
  title: string;
  company: string;
  date: string;
  description: string;
  logo: string;
  image: string;
  imageAlt: string;
}

// Add new experiences here. Order is top-to-bottom; sides alternate automatically
// (first entry: card right / image left, second: card left / image right, ...).
const experiences: ExperienceEntry[] = [
  {
    title: "Computer Vision Engineering Intern",
    company: "Western University/Global Meteor Network",
    date: "Jan 2027 - Apr 2027",
    description: "Incoming W27",
    logo: western,
    image: westernImage,
    imageAlt: "Western",
  },
  {
    title: "Machine Learning Research Assistant",
    company: "The Hospital for Sick Children",
    date: "May 2026 - Aug 2026",
    description: "Reaction Generative-Flow Networks & Parallel Synthesis",
    logo: sickKids,
    image: sickKidsHospital,
    imageAlt: "SickKids Hospital",
  },
  {
    title: "Machine Learning Scientist",
    company: "WAT.ai",
    date: "Sept 2025 - Feb 2026",
    description: "Semantic Segmentation of Microaneuryms in Fundus Imaging",
    logo: watai,
    image: wataiImage,
    imageAlt: "WAT.ai",
  },
  {
    title: "Tennis Instructor",
    company: "Unionville Tennis Club",
    date: "Apr 2022 - Aug 2025",
    description: "TPA Certified Instructor | 500+ Hours On-Court",
    logo: utc,
    image: utcImage,
    imageAlt: "Unionville Tennis Club",
  },
];


function TimelineItem({ entry, cardOnLeft }: { entry: ExperienceEntry; cardOnLeft: boolean }) {
  const logo = (
    <CardItem className="experience-card-logo-container">
      <img src={entry.logo} alt={`${entry.company} logo`} className="experience-card-logo" loading="lazy" />
    </CardItem>
  );

  const heading = (
    <div>
      <h3 className="experience-card-title">{entry.title}</h3>
      <p className="experience-card-company">{entry.company}</p>
    </div>
  );

  const card = (
    <div className={`timeline-card ${cardOnLeft ? "timeline-card-left" : "timeline-card-right"}`}>
      <Card
        className="experience-card"
        containerClassName="experience-card-container"
      >
        <CardItem className="experience-card-content">
          <div className={`experience-card-header${cardOnLeft ? " experience-card-header-left" : ""}`}>
            {cardOnLeft ? <>{heading}{logo}</> : <>{logo}{heading}</>}
          </div>

          <p className="experience-card-date">{entry.date}</p>
          <p className="experience-card-description">{entry.description}</p>
        </CardItem>
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


export default function Experience() {
  return (
    <section id="experience" className="fade-in-section experience">
      <h2 className="experience-title">WORK EXPERIENCE</h2>

      <div className="experience-container">

        <div className="timeline-line" /> {/* Vertical dotted line */}

        <div className="timeline-items"> {/* Timeline items */}
          {experiences.map((entry, i) => (
            <TimelineItem key={entry.title + entry.company} entry={entry} cardOnLeft={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
