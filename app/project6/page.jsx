import Image from "next/image";
import Link from "next/link";

export default function Project6() {
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
        <span className="portfolio">Project 6 - Nexus Frontier</span>
      </div>
      <div className="horizontal-line"></div>

      {/* Full-width single bento box */}
      <div className="bento-grid">
        <div className="bento-box full-box">
          {/* Image Section */}
          <div className="image-wrapper">
            <Image
              src="/project4.png" // Put your image path here
              alt="Full Project Image"
              width={1200} // Adjust the width of the image
              height={675} // Adjust the height to keep the aspect ratio
              className="project-image" // Apply custom class for styling
            />
          </div>

          {/* Text Section */}
          <div className="project-description">
            <h2>Nexus Frontier</h2>
            <p>
              <strong>Nexus Frontier</strong> is a real-time strategy game set
              in a futuristic galaxy. Players lead a faction of intergalactic
              settlers seeking to colonize new planets, gather resources, and
              defend their colonies against hostile alien forces.
            </p>
            <p>
              <strong>Role:</strong> Lead Game Designer
            </p>
            <p>
              <strong>Responsibilities:</strong>
            </p>
            <ul>
              <li>
                Designed core game mechanics, including resource gathering, base
                building, and combat systems.
              </li>
              <li>
                Created the user interface and HUD to ensure a seamless player
                experience during complex strategic decision-making.
              </li>
              <li>
                Worked closely with the art team to ensure that the visual
                design matched the futuristic theme of the game.
              </li>
            </ul>
            <p>
              <strong>Key Technologies:</strong> Unity 3D, C#, Photoshop,
              Audacity
            </p>
            <p>
              <strong>Outcome:</strong> Nexus Frontier challenged me to balance
              strategic depth with player accessibility. It helped me enhance my
              skills in designing complex systems while maintaining a focus on
              player engagement and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
