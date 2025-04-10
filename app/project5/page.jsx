import Image from "next/image";
import Link from "next/link";

export default function Project5() {
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
        <span className="portfolio">Project 5 - Echo Drift</span>
      </div>
      <div className="horizontal-line"></div>

      {/* Full-width single bento box */}
      <div className="bento-grid">
        <div className="bento-box full-box">
          {/* Image Section */}
          <div className="image-wrapper">
            <Image
              src="/project7.png" // Put your image path here
              alt="Full Project Image"
              width={1200} // Adjust the width of the image
              height={675} // Adjust the height to keep the aspect ratio
              className="project-image" // Apply custom class for styling
            />
          </div>

          {/* Text Section */}
          <div className="project-description">
            <h2>Echo Drift</h2>
            <p>
              <strong>Echo Drift</strong> is a third-person space exploration
              game set in a vast and mysterious galaxy. Players control a crew
              of explorers tasked with charting new star systems, interacting
              with alien species, and uncovering the secrets of an ancient
              cosmic entity.
            </p>
            <p>
              <strong>Role:</strong> Narrative Designer
            </p>
            <p>
              <strong>Responsibilities:</strong>
            </p>
            <ul>
              <li>
                Created the main storyline, including branching narrative paths
                based on player choices.
              </li>
              <li>
                Designed the lore of the game world, including history,
                factions, and alien species.
              </li>
              <li>
                Worked with voice actors to bring the characters and story to
                life through dialogue and cutscenes.
              </li>
            </ul>
            <p>
              <strong>Key Technologies:</strong> Unreal Engine 4, Blueprint
              Visual Scripting, Adobe Audition
            </p>
            <p>
              <strong>Outcome:</strong> Echo Drift helped me improve my
              storytelling skills and my ability to weave complex narrative
              elements into gameplay. The project also allowed me to work
              closely with voice actors and the sound design team to create an
              immersive experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
