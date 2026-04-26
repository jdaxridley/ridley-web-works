"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: string;
  category: string;
  image: string;
  href: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "Teaspoon Cupcakes",
    category: "Bakery · Web Design",
    image: "/projects/teaspoon.jpg",
    href: "https://teaspoon-cupcakes.vercel.app",
    description: "A sweet, premium bakery site with custom ordering flow",
  },
  {
    name: "Dr. Tiplea",
    category: "Oral Surgery · Web Design",
    image: "/projects/tiplea.jpg",
    href: "https://tiplea-v2.vercel.app",
    description: "Premium medical practice site with patient-first design",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={cardRef} className="group" style={{ opacity: 0 }}>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card block"
      >
        {/* Placeholder gradient until real screenshots */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-alt to-bg-deep flex items-center justify-center">
          <div className="text-center px-8">
            <div className="w-16 h-16 rounded-xl bg-sage/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-sage"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                />
              </svg>
            </div>
            <p className="text-text-dim text-sm">{project.name}</p>
            <p className="text-text-dim text-xs mt-1">Project Screenshot</p>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="overlay">
          <span className="text-sage text-xs uppercase tracking-widest mb-2">
            {project.category}
          </span>
          <span className="font-display text-2xl text-text-primary mb-2">
            {project.name}
          </span>
          <span className="text-text-muted text-sm max-w-xs">
            {project.description}
          </span>
          <span className="mt-4 text-clay text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
            View Project
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </div>
      </a>
    </div>
  );
}

export function WorkGrid() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="mb-12">
          <h2
            ref={headingRef}
            className="font-display text-3xl md:text-5xl text-text-primary"
            style={{ opacity: 0 }}
          >
            Selected{" "}
            <span className="text-gradient-sage">Work</span>
          </h2>
          <div className="w-12 h-px bg-sage mt-4" />
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
