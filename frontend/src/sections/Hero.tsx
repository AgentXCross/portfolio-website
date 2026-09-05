/* 
Hero.tsx

Section 1: Hero Section
*/

import "./Hero.css"

import { WormholeBackground } from "../components/WormholeBackground";

import profileImg from "../assets/profile-nf.jpg";
import wingLeft from "../assets/wing_left.webp";
import wingRight from "../assets/wing_right.webp";


export default function Hero() {
  return (
    <section id="hero" className="hero">
      <WormholeBackground className="wormhole-background" />

      <h1 className="hero-title">MICHAEL L.</h1>

      <p className="hero-subtitle">Computer Science + Digital Hardware @ UWaterloo</p>

      <div className="hero-graphics">
        <img
          src={wingLeft}
          alt=""
          className="hero-wing hero-wing-left"
        />

        <img src={profileImg} alt="Michael L." className="hero-profile" />
        
        <img
          src={wingRight}
          alt=""
          className="hero-wing hero-wing-right"
        />
      </div>
    </section>
  );
}
