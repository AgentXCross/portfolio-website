/*
Stack.tsx

Section 4: Tech Stack
*/

import "./Stack.css"

import SkillDock from "../components/StackDock";
import { MatrixBackground } from "../components/MatrixBackground";


export default function Stack() {
  return (
    <section id="skills" className="fade-in-section stack">
      <div className="stack-background">
        <MatrixBackground color="#007213" fontSize={14} />
      </div>

      <h2 className="stack-title">
        TECH STACK
      </h2>

      <div className="stack-content">
        <SkillDock />
      </div>
    </section>
  );
}