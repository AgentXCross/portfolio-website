/*
Projects.tsx

Section 5: Projects
*/

import "./Projects.css";

import { Card, CardItem } from "../components/Card";

import cppProject from "../assets/cpp_project.png";
import courtHawk from "../assets/courthawk.png";
import hydraNet from "../assets/HydraLA-Net.webp";
import arxtract from "../assets/arxtract.webp";
import progressiveOptimizationPaper from "../assets/Progressive_Optimization_of_HydraLA_Net_for_Microaneurysm_Segmentation.pdf";


export default function Projects() {
  return (
    <section id="projects" className="fade-in-section projects">
      <h2 className="projects-title">PROJECTS</h2>

      <div className="projects-grid">
        {/* Project 1 - C++ ML Library */}
        <Card className="project-card" containerClassName="project-card-container">
          <CardItem className="project-thumbnail">
            <img src={cppProject} alt="C++ ML Library" className="project-thumbnail-img" loading="lazy" />
          </CardItem>
          <div className="project-info">
            <h3 className="project-title">C++ Machine Learning Library from Scratch</h3>
            <p className="project-date">June 2026 - Present</p>
            <p className="project-description">
              A small machine learning library built from scratch in C++. Implementing classical ML algorithms alongside deep learning components. Built in a PyTorch-style where training loops are explicit and the math behind forward passes, gradient calculations, and parameter updates stays visible.
            </p>
            <div className="project-links">
              <a href="https://github.com/AgentXCross/ml-from-scratch-cpp" target="_blank" rel="noopener noreferrer" className="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </a>
            </div>
          </div>
        </Card>

        {/* Project 2 - CourtHawk */}
        <Card className="project-card" containerClassName="project-card-container">
          <CardItem className="project-thumbnail">
            <img src={courtHawk} alt="CourtHawk" className="project-thumbnail-img" loading="lazy" />
          </CardItem>
          <div className="project-info">
            <h3 className="project-title">CourtHawk: Tennis Computer Vision System</h3>
            <p className="project-date">April 2026 - Present</p>
            <ul className="project-list">
              <li>Built an end-to-end computer vision system for tennis footage from the standard TV angle using YOLO,
                  CNNs, and MediaPipe to track players/ball, detect court keypoints, and estimate player poses.</li>
              <li>Developed methods for shot detection and classification using player/ball trajectories and pose derived
                  features.</li>
              <li>Projected player/ball onto a bird’s-eye-view court using homography to compute movement and
                  shot-speed statistics.</li>
              <li>Built and deployed a full-stack web app using FastAPI, React, and TypeScript for video upload, processing,
                  and visualization of results</li>
            </ul>
            <div className="project-links">
              <a href="https://courthawk.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Visit the App
              </a>
              <a href="https://github.com/AgentXCross/Tennis-CV-Analysis" target="_blank" rel="noopener noreferrer" className="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </a>
            </div>
          </div>
        </Card>

        {/* Project 3 - HydraLA-Net */}
        <Card className="project-card" containerClassName="project-card-container">
          <CardItem className="project-thumbnail">
            <img src={hydraNet} alt="HydraLA-Net" className="project-thumbnail-img" loading="lazy" />
          </CardItem>
          <div className="project-info">
            <h3 className="project-title">Progressive Optimization of HydraLA-Net for Microaneursym Segmentation</h3>
            <p className="project-date">Sept 2025 - Feb 2026</p>
            <ul className="project-list">
              <li>Designed and trained HydraLA-Net (U-Net Variation) models for the semantic segmentation of
                  microaneurysms, hemorrhages, soft, and hard exudates from scratch in PyTorch.</li>
              <li>Wrote task-specific loss functions to address class imbalance.</li>
              <li>Conducted ablation studies on applications of contrast enchancement preprocessing and loss function
                selection to improve small-lesion segmentation performance.</li>
              <li>Released Research Paper detailing methodology and results.</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/jessicayuan1/fundus-image-segmentation" target="_blank" rel="noopener noreferrer" className="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </a>
              <a href={progressiveOptimizationPaper} target="_blank" rel="noopener noreferrer" className="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                View Paper
              </a>
            </div>
          </div>
        </Card>

        {/* Project 4 - ArXtract */}
        <Card className="project-card" containerClassName="project-card-container">
          <CardItem className="project-thumbnail">
            <img src={arxtract} alt="Arxtract" className="project-thumbnail-img" loading="lazy" />
          </CardItem>
          <div className="project-info">
            <h3 className="project-title">ArXtract: AI Search Engine for ML Research</h3>
            <p className="project-date">Feb 2026</p>
            <ul className="project-list">
              <li>Full-stack research tool (React + TypeScript frontend, FastAPI backend) for analyzing machine
                  learning papers through user prompts and arXiv inputs.</li>
              <li>Built a retrieval-augmented chatbot that answers research questions by ranking paper chunks using embed-
                  ding similarity and responding using the top-scoring sections.</li>
              <li>Engineered structured extraction of key ML fields (task type, problem, contribution, datasets) to standardize
                  paper summaries.</li>
            </ul>
            <div className="project-links">
              <a href="https://arxtract-cxc.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Visit the App
              </a>
              <a href="https://github.com/AgentXCross/ArXtract_CxC" target="_blank" rel="noopener noreferrer" className="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
