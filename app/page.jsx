"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [fadeProjects, setFadeProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.querySelector(".about-me");
      if (aboutMeSection) {
        const aboutTop = aboutMeSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.6;

        setFadeProjects(aboutTop < triggerPoint);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bento-container homepage">
      <div className="name-title-container animate-slide-down">
        <h1 className="name">Marijn Meeuwesen</h1>
        <span className="portfolio">Showcase portfolio - Game design</span>
      </div>

      <div className="horizontal-line"></div>

      <div
        className={`bento-grid ${
          fadeProjects ? "fade-out" : ""
        } animate-slide-up`}
      >
        {/* Project 1 */}
        <Link href="/project1" passHref legacyBehavior>
          <a className="bento-box box1" style={{ display: "block" }}>
            <div className="image-wrapper">
              <Image
                src="/project1.png"
                alt="Packaging Flat"
                width={500}
                height={500}
              />
              <div className="project-label">Project 1 - Echoes of Aether</div>
            </div>
          </a>
        </Link>

        {/* Project 2 */}
        <Link href="/project2" passHref legacyBehavior>
          <a className="bento-box box2" style={{ display: "block" }}>
            <div className="image-wrapper">
              <Image
                src="/project2.png"
                alt="Stationery"
                width={500}
                height={500}
              />
              <div className="project-label">Project 2 - Solarion</div>
            </div>
          </a>
        </Link>

        {/* Project 3 */}
        <Link href="/project3" className="bento-box box3">
          <div className="image-wrapper">
            <Image
              src="/project6.png"
              alt="Coffee Flat Lay"
              width={500}
              height={500}
            />
            <div className="project-label">Project 3 - Nebula Chronicles</div>
          </div>
        </Link>

        {/* Project 4 */}
        <Link href="/project4" passHref legacyBehavior>
          <a className="bento-box box4" style={{ display: "block" }}>
            <div className="image-wrapper">
              <Image
                src="/project3.png"
                alt="AOS Logo"
                width={500}
                height={500}
              />
              <div className="project-label">Project 4 - Lumina</div>
            </div>
          </a>
        </Link>

        {/* Project 5 */}
        <Link href="/project5" passHref legacyBehavior>
          <a className="bento-box box7" style={{ display: "block" }}>
            <div className="image-wrapper">
              <Image
                src="/project7.png"
                alt="Truck Branding"
                width={500}
                height={500}
              />
              <div className="project-label">Project 5 - Echo Drift</div>
            </div>
          </a>
        </Link>

        {/* Project 6 */}
        <Link href="/project6" passHref legacyBehavior>
          <a className="bento-box box6" style={{ display: "block" }}>
            <div className="image-wrapper">
              <Image
                src="/project4.png"
                alt="Coffee Packaging"
                width={500}
                height={500}
              />
              <div className="project-label">Project 6 - Nexus Frontier</div>
            </div>
          </a>
        </Link>

        {/* Project 7 */}
        <Link href="/project7" passHref legacyBehavior>
          <a className="bento-box box5" style={{ display: "block" }}>
            <div className="image-wrapper">
              <Image
                src="/project5.png"
                alt="Exhibition Stand"
                width={500}
                height={500}
              />
              <div className="project-label">Project 7 - Titan's Wrath</div>
            </div>
          </a>
        </Link>
      </div>

      {/* About Me Section */}
      <section className="about-me">
        <div className="about-me-container">
          <div className="about-me-image">
            <Image
              src="/profiel_foto.png"
              alt="Marijn Meeuwesen"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="about-me-text">
            <h2>Over mij</h2>
            <p>
              Ik ben Marijn Meeuwesen, een gepassioneerde Game Designer met een
              focus op gameplay, storytelling en gebruikerservaring. Ik geloof
              dat games meer zijn dan entertainment — ze zijn een krachtig
              middel om verhalen te vertellen en emoties over te brengen.
            </p>
            <p>
              Met ervaring in leveldesign, mechanics en visueel ontwerp werk ik
              graag aan projecten waarin creativiteit en gebruiksvriendelijkheid
              samenkomen. Mijn doel is om spelervaringen te maken die mensen
              raken en bijblijven.
            </p>

            <div className="social-links mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/in/marijnmeeuwesen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0a66c2] hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/marijnmeeuwesen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#171717] hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/marijnmeeuwesen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:underline"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
