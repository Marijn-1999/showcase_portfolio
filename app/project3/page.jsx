import Image from "next/image";
import Link from "next/link";

export default function Project3() {
  return (
    <main className="bento-container">
      <div className="name-title-container">
        <Link
          href="/"
          className="name"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Terug
        </Link>
        <span className="portfolio">Project 3 - Nebula Chronicles</span>
      </div>
      <div className="horizontal-line"></div>

      {/* Full-width single bento box */}
      <div className="bento-grid">
        <div className="bento-box full-box">
          {/* Image Section */}
          <div className="image-wrapper">
            <Image
              src="/project6.png" // Put your image path here
              alt="Full Project Image"
              width={1200} // Adjust the width of the image
              height={675} // Adjust the height to keep the aspect ratio
              className="project-image" // Apply custom class for styling
            />
          </div>

          {/* Text Section */}
          <div className="project-description">
            <h2>Nebula Chronicles</h2>
            <p>
              <strong>Nebula Chronicles</strong> is a space exploration game
              where players take on the role of a fleet commander tasked with
              exploring uncharted galaxies, discovering new planets, and
              managing interstellar diplomacy. Players will encounter alien
              species, form alliances, and defend their fleet against hostile
              forces.
            </p>
            <p>
              <strong>Role:</strong> Game Designer
            </p>
            <p>
              <strong>Responsibilities:</strong>
            </p>
            <ul>
              <li>
                Designed space travel mechanics, including navigation,
                exploration, and fleet management.
              </li>
              <li>
                Developed a branching narrative with multiple endings based on
                player decisions.
              </li>
              <li>
                Collaborated with the art team to define the visual style for
                planets, space stations, and alien species.
              </li>
            </ul>
            <p>
              <strong>Key Technologies:</strong> Unity 3D (C#), Blender (3D
              Modeling), FMOD (Audio Design), Adobe Illustrator
            </p>
            <p>
              <strong>Outcome:</strong> Nebula Chronicles allowed me to explore
              the challenges of creating a space exploration game, focusing on
              both narrative design and systems-based gameplay. It helped me
              improve my skills in balancing resource management with
              story-driven elements.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
