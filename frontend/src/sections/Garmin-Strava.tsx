/*
Garmin-Strava.tsx 

6 cards (2 rows of 3) at a large enough width. 
*/

import { garminStats } from "@/data/garminStats";
import "./Garmin-Strava.css";

import { Card } from "../components/Card";
import {
  Footprints,
  Timer,
  Dumbbell,
  Route,
  Flame,
  Mountain,
  type LucideIcon,
} from "lucide-react";


interface GarminCardData {
  icon: LucideIcon;
  title: string;
  value: number;
  units: string;
}

const garminCards: GarminCardData[] = [
  { icon: Footprints, title: "Total Running Activities", value: garminStats.totalRunningActivities, units: "Activities" },
  { icon: Route, title: "Total Running Distance", value: garminStats.totalRunningDistancekm, units: "km"},
  { icon: Flame, title: "Strava Streak", value: garminStats.stravaStreakweeks, units: "Weeks" },
  { icon: Mountain, title: "Total Running Ascent", value: garminStats.totalAscentm, units: "m" },
  { icon: Dumbbell, title: "Total Gym Time (Since Sept 2026)", value: garminStats.totalGymTimeh, units: "h" },
  { icon: Timer, title: "Total Running Time", value: garminStats.totalRunningTimeh, units: "h" },
];


export default function GarminStrava() {
  return (
    <section id="garmin-strava" className="fade-in-section garmin-strava">
      <h2 className="garmin-strava-title">LIFETIME RUNNING/GYM STATS</h2>
      <h3 className="garmin-strava-subtitle">Since Oct 2021, Last Updated Oct 2026</h3>

      <div className="garmin-grid">
        {garminCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title} className="garmin-card" containerClassName="garmin-card-container">
              <Icon className="garmin-card-icon" size={50} />
              <p className="garmin-card-title">{card.title}</p>
              <div className="garmin-card-value-row">
                <span className="garmin-card-value">{card.value.toLocaleString()}</span>
                <span className="garmin-card-units">{card.units}</span>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
