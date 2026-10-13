import { useState } from "react";

import "./RecentHighlights.css";

import { Card } from "../components/Card";

import strava50km from "../assets/strava-50km.png";
import strava19th from "../assets/strava-19th.png";

interface Highlight {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

const highlights: Highlight[] = [
  {
    id: "first-50km-run",
    title: "First Ultramarathon",
    date: "September 26, 2026",
    description: "Hit 50km in a single run for the first time around the KW area. New personal distance record!!!",
    image: strava50km,
  },
  {
    id: "19th-birthday",
    title: "19th Birthday",
    date: "October 2, 2026",
    description: "Celebrated my 19th birthday with a 19km run in the shape of a 19!",
    image: strava19th,
  },
];

export default function RecentHighlights() {
  const [index, setIndex] = useState(0);

  function goToPrevious() {
    setIndex((current) => (current - 1 + highlights.length) % highlights.length);
  }

  function goToNext() {
    setIndex((current) => (current + 1) % highlights.length);
  }

  return (
    <section id="recent-highlights" className="fade-in-section recent-highlights">
      <h2 className="recent-highlights-title">RECENT HIGHLIGHTS</h2>

      <div className="highlights-carousel">
        <button
          type="button"
          className="carousel-arrow"
          onClick={goToPrevious}
          aria-label="Previous highlight"
        >
          &#8249;
        </button>

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {highlights.map((highlight) => (
              <div className="carousel-slide" key={highlight.id}>
                <Card className="highlight-card" containerClassName="highlight-card-container">
                  <div className="highlight-content">
                    <div className="highlight-image-container">
                      <img src={highlight.image} alt={highlight.title} className="highlight-image" loading="lazy" />
                    </div>
                    <div className="highlight-text">
                      <h3 className="highlight-title">{highlight.title}</h3>
                      <p className="highlight-date">{highlight.date}</p>
                      <p className="highlight-description">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="carousel-arrow"
          onClick={goToNext}
          aria-label="Next highlight"
        >
          &#8250;
        </button>
      </div>

      <div className="carousel-dots">
        {highlights.map((highlight, dotIndex) => (
          <button
            type="button"
            key={highlight.id}
            className={`carousel-dot ${dotIndex === index ? "active" : ""}`}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to ${highlight.title}`}
            aria-current={dotIndex === index}
          />
        ))}
      </div>
    </section>
  );
}
