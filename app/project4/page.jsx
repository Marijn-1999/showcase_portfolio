import Image from "next/image";
import Link from "next/link";

export default function Project4() {
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
        <span className="portfolio">Project 4 - Lumina</span>
      </div>
      <div className="horizontal-line"></div>

      {/* Full-width single bento box */}
      <div className="bento-grid">
        <div className="bento-box full-box">
          {/* Image Section */}
          <div className="image-wrapper">
            <Image
              src="/project3.png" // Put your image path here
              alt="Full Project Image"
              width={1200} // Adjust the width of the image
              height={675} // Adjust the height to keep the aspect ratio
              className="project-image" // Apply custom class for styling
            />
          </div>

          {/* Text Section */}
          <div className="project-description">
            <h2>Lumina</h2>
            <p>
              <strong>Lumina</strong> is a first-person puzzle-solving game set
              in a futuristic world. Players must navigate through intricate
              levels using light manipulation mechanics to unlock doors, create
              pathways, and solve puzzles that advance them to the next stage.
            </p>
            <p>
              <strong>Role:</strong> Game Designer
            </p>
            <p>
              <strong>Responsibilities:</strong>
            </p>
            <ul>
              <li>
                Designed and implemented core light-based puzzle mechanics.
              </li>
              <li>
                Developed a level progression system that increases complexity
                as players advance.
              </li>
              <li>
                Worked closely with the art team to ensure that the visual
                design matched the game’s narrative.
              </li>
            </ul>
            <p>
              <strong>Key Technologies:</strong> Unity 3D (C#), Blender,
              Substance Painter, Audacity
            </p>
            <p>
              <strong>Outcome:</strong> Lumina allowed me to explore new
              puzzle-solving mechanics while enhancing my skills in level design
              and environment creation. The project helped refine my ability to
              create interactive, meaningful experiences.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
