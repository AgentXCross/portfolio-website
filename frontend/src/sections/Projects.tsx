/*
Projects.tsx

Section 5: Projects
*/

import { Fragment, type ReactNode } from "react";

import "./Projects.css";

import { Card, CardItem } from "../components/Card";

import cppProject from "../assets/cpp_project.png";
import courtHawk from "../assets/courthawk.png";
import hydraNet from "../assets/HydraLA-Net.webp";
import arxtract from "../assets/arxtract.webp";
import progressiveOptimizationPaper from "../assets/Progressive_Optimization_of_HydraLA_Net_for_Microaneurysm_Segmentation.pdf";


type LinkType = "github" | "app" | "paper";

interface ProjectLink {
  type: LinkType;
  href: string;
}

interface ProjectEntry {
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  // Use `paragraphs` for prose, `bullets` for a bulleted list (or both).
  paragraphs?: string[];
  bullets?: string[];
  links: ProjectLink[];
}

const LINK_ICONS: Record<LinkType, { label: string; icon: ReactNode }> = {
  github: {
    label: "View on GitHub",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    ),
  },
  app: {
    label: "Visit the App",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    ),
  },
  paper: {
    label: "View Paper",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ),
  },
};

const projects: ProjectEntry[] = [
  {
    title: "C++ Machine Learning Library from Scratch",
    date: "June 2026 - Present",
    image: cppProject,
    imageAlt: "C++ ML Library",
    paragraphs: [
      "A C++17 machine learning library built from scratch using the C++ Standard Library. cpp_ml implements classical machine learning algorithms, neural network components, preprocessing utilities, and core tensor operations.",
      "The library follows a PyTorch-inspired design, where training loops are written explicitly, and the math behind forward passes, gradients, and parameter updates stays visible.",
      "cpp_ml is designed as an educational library for learning machine learning and deep learning fundamentals without hiding their implementations behind high-level abstractions, commonly seen in libraries like scikit-learn. The goal is to provide a simple interface for users while keeping the algorithm implementations readable.",
    ],
    links: [
      { type: "github", href: "https://github.com/AgentXCross/ml-from-scratch-cpp" },
    ],
  },
  {
    title: "CourtHawk: Tennis Computer Vision System",
    date: "April 2026 - Present",
    image: courtHawk,
    imageAlt: "CourtHawk",
    bullets: [
      "Built an end-to-end computer vision system for tennis footage from the standard TV angle using YOLO, CNNs, and MediaPipe to track players/ball, detect court keypoints, and estimate player poses.",
      "Developed methods for shot detection and classification using player/ball trajectories and pose derived features.",
      "Projected player/ball onto a bird’s-eye-view court using homography to compute movement and shot-speed statistics.",
      "Built and deployed a full-stack web app using FastAPI, React, and TypeScript for video upload, processing, and visualization of results",
    ],
    links: [
      { type: "app", href: "https://courthawk.vercel.app/" },
      { type: "github", href: "https://github.com/AgentXCross/Tennis-CV-Analysis" },
    ],
  },
  {
    title: "Progressive Optimization of HydraLA-Net for Microaneurysm Segmentation",
    date: "Sept 2025 - Feb 2026",
    image: hydraNet,
    imageAlt: "HydraLA-Net",
    bullets: [
      "Designed and trained HydraLA-Net (U-Net Variation) models for the semantic segmentation of microaneurysms, hemorrhages, soft, and hard exudates from scratch in PyTorch.",
      "Wrote task-specific loss functions to address class imbalance.",
      "Conducted ablation studies on applications of contrast enhancement preprocessing and loss function selection to improve small-lesion segmentation performance.",
      "Released Research Paper detailing methodology and results.",
    ],
    links: [
      { type: "github", href: "https://github.com/jessicayuan1/fundus-image-segmentation" },
      { type: "paper", href: progressiveOptimizationPaper },
    ],
  },
  {
    title: "ArXtract: AI Search Engine for ML Research",
    date: "Feb 2026",
    image: arxtract,
    imageAlt: "Arxtract",
    bullets: [
      "Full-stack research tool (React + TypeScript frontend, FastAPI backend) for analyzing machine learning papers through user prompts and arXiv inputs.",
      "Built a retrieval-augmented chatbot that answers research questions by ranking paper chunks using embedding similarity and responding using the top-scoring sections.",
      "Engineered structured extraction of key ML fields (task type, problem, contribution, datasets) to standardize paper summaries.",
    ],
    links: [
      { type: "app", href: "https://arxtract-cxc.vercel.app/" },
      { type: "github", href: "https://github.com/AgentXCross/ArXtract_CxC" },
    ],
  },
];


function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <Card className="project-card" containerClassName="project-card-container">
      <CardItem className="project-thumbnail">
        <img src={project.image} alt={project.imageAlt} className="project-thumbnail-img" loading="lazy" />
      </CardItem>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-date">{project.date}</p>

        {project.paragraphs && (
          <p className="project-description">
            {project.paragraphs.map((para, i) => (
              <Fragment key={i}>
                {i > 0 && <><br /><br /></>}
                {para}
              </Fragment>
            ))}
          </p>
        )}

        {project.bullets && (
          <ul className="project-list">
            {project.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
          </ul>
        )}

        <div className="project-links">
          {project.links.map(({ type, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="project-link">
              {LINK_ICONS[type].icon}
              {LINK_ICONS[type].label}
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}


export default function Projects() {
  return (
    <section id="projects" className="fade-in-section projects">
      <h2 className="projects-title">PROJECTS</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
