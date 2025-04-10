import Image from "next/image";
import Link from "next/link";

export default function Project1() {
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
        <span className="portfolio">Project 1 - Echoes of Aether</span>
      </div>
      <div className="horizontal-line"></div>

      {/* Full-width single bento box */}
      <div className="bento-grid">
        <div className="bento-box full-box">
          {/* Image Section */}
          <div className="image-wrapper">
            <Image
              src="/project1.png" // Put your image path here
              alt="Full Project Image"
              width={1200} // Adjust the width of the image
              height={675} // Adjust the height to keep the aspect ratio
              className="project-image" // Apply custom class for styling
            />
          </div>

          {/* Text Section */}
          <div className="project-description">
            <h2>Echoes of Aether</h2>
            <p>
              <strong>Echoes of Aether</strong> is an action-adventure RPG set
              in a post-apocalyptic world where ancient ruins and mystical
              forces collide. Players explore vast landscapes, battle corrupted
              creatures, and uncover ancient secrets to prevent the world’s
              collapse.
            </p>
            <p>
              <strong>Role:</strong> Game Designer
            </p>
            <p>
              <strong>Responsibilities:</strong>
            </p>
            <ul>
              <li>
                Designed core gameplay mechanics, including exploration, combat,
                and puzzles.
              </li>
              <li>
                Developed character progression systems and narrative choices.
              </li>
              <li>
                Collaborated with artists to create environment and character
                concepts.
              </li>
            </ul>
            <p>
              <strong>Key Technologies:</strong> Unity 3D (C#), Blender (3D
              Modeling), FMOD (Audio Design)
            </p>
            <p>
              <strong>Outcome:</strong> The project allowed me to refine my
              skills in level design, game mechanics, and storytelling. It
              helped me understand the challenges of building an immersive,
              open-world RPG.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
