import Image from "next/image";
import Link from "next/link";

export default function Project2() {
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
        <span className="portfolio">Project 2 - Solarion</span>
      </div>
      <div className="horizontal-line"></div>

      {/* Full-width single bento box */}
      <div className="bento-grid">
        <div className="bento-box full-box">
          {/* Image Section */}
          <div className="image-wrapper">
            <Image
              src="/project2.png" // Put your image path here
              alt="Full Project Image"
              width={1200} // Adjust the width of the image
              height={675} // Adjust the height to keep the aspect ratio
              className="project-image" // Apply custom class for styling
            />
          </div>

          {/* Text Section */}
          <div className="project-description">
            <h2>Solarion</h2>
            <p>
              <strong>Solarion</strong> is a sci-fi, strategy-based
              city-building game where players control a colony on a distant
              planet. The game combines resource management, environmental
              challenges, and exploration as players build sustainable cities
              while navigating harsh planetary conditions and uncovering hidden
              alien technologies.
            </p>
            <p>
              <strong>Role:</strong> Lead Game Designer
            </p>
            <p>
              <strong>Responsibilities:</strong>
            </p>
            <ul>
              <li>
                Designed the game’s core loop, including resource management,
                construction, and expansion mechanics.
              </li>
              <li>
                Led the design of dynamic environmental systems (weather,
                disasters, etc.) that affect gameplay.
              </li>
              <li>
                Created the game's narrative framework, including world-building
                and quest design.
              </li>
            </ul>
            <p>
              <strong>Key Technologies:</strong> Unreal Engine 4, Blueprint
              Visual Scripting, Photoshop, Audacity
            </p>
            <p>
              <strong>Outcome:</strong> Through Solarion, I honed my ability to
              balance gameplay complexity and player agency. The project also
              helped me understand the intricacies of balancing narrative-driven
              content with freeform player-driven exploration.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
