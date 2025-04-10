import Image from "next/image";
import Link from "next/link";

export default function Project7() {
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
        <span className="portfolio">Project 7 - Titan's Wrath</span>
      </div>
      <div className="horizontal-line"></div>

      {/* Full-width single bento box */}
      <div className="bento-grid">
        <div className="bento-box full-box">
          {/* Image Section */}
          <div className="image-wrapper">
            <Image
              src="/project5.png" // Put your image path here
              alt="Full Project Image"
              width={1200} // Adjust the width of the image
              height={675} // Adjust the height to keep the aspect ratio
              className="project-image" // Apply custom class for styling
            />
          </div>

          {/* Text Section */}
          <div className="project-description">
            <h2>Titan's Wrath</h2>
            <p>
              <strong>Titan's Wrath</strong> is an intense, third-person action
              game that takes place in a dystopian future where humanity faces
              the wrath of ancient titans awakened from the depths of the Earth.
              Players control a skilled warrior tasked with defending cities
              from these massive, destructive creatures.
            </p>
            <p>
              <strong>Role:</strong> Senior Game Designer
            </p>
            <p>
              <strong>Responsibilities:</strong>
            </p>
            <ul>
              <li>
                Designed dynamic combat systems to enhance the feeling of
                battling colossal titans.
              </li>
              <li>
                Developed a narrative-driven progression system where choices
                affect the outcome of the story.
              </li>
              <li>
                Worked with sound and art teams to create immersive environments
                that emphasize the scale of battles.
              </li>
            </ul>
            <p>
              <strong>Key Technologies:</strong> Unreal Engine 5, Blueprints, 3D
              Modeling (Blender), FMOD
            </p>
            <p>
              <strong>Outcome:</strong> Titan's Wrath pushed my abilities in
              creating larger-than-life gameplay experiences, focusing on player
              immersion and engagement during epic boss battles. The project
              also refined my work on story-driven mechanics and how narrative
              can drive gameplay.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
