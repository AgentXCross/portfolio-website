/* 
Hero.tsx

Section 1: Hero Section
*/

import { HoleBackground } from "../components/WormholeBackground";

import profileImg from "../assets/casual_profile.jpg";
import wingLeft from "../assets/wing_left.webp";
import wingRight from "../assets/wing_right.webp";


export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-start px-16 pt-24 pb-16 relative overflow-hidden">
      <HoleBackground className="absolute inset-0" />
      <h1
        className="relative z-20 leading-none"
        style={{
          fontFamily: "'Anton', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.03em"
        }}
      >
        MICHAEL L.
      </h1>
      <p
        className="relative z-20 text-white/80 text-2xl mt-4 text-center"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        Computer Science + Digital Hardware @ UWaterloo
      </p>


      <div className="relative z-10 mt-4 flex items-center justify-center">
        <img
          src={wingLeft}
          alt=""
          className="absolute object-contain mix-blend-screen"
          style={{ height: '475px', maxWidth: 'none', maxHeight: 'none', right: '-50%', top: '28%', transform: 'translateY(-50%) translateX(20%)' }}
        />
        <img src={profileImg} alt="Michael L." className="h-80 rounded-full relative z-10" />
        <img
          src={wingRight}
          alt=""
          className="absolute object-contain mix-blend-screen"
          style={{ height: '475px', maxWidth: 'none', maxHeight: 'none', left: '-50%', top: '28%', transform: 'translateY(-50%) translateX(-20%)' }}
        />
      </div>
    </section>
  );
}
