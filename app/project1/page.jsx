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
        <span className="portfolio">Project 1</span>
      </div>
      <div className="horizontal-line"></div>

      {/* Full-width bento with image + text */}
      <div className="bento-grid">
        <div className="bento-box full-box project-content">
          <div className="project-image">
            <Image
              src="/project1.png" // Replace with your project image
              alt="Project Example"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", borderRadius: "16px" }}
            />
          </div>
          <div className="project-text">
            <h2>Project Overview</h2>
            <p>
              This project focused on streamlining the onboarding experience for
              a digital product used by healthcare professionals. The primary
              goal was to reduce the time it took for users to reach their
              "aha!" moment and improve the task completion rate.
            </p>
            <p>
              We conducted several usability tests and iterated on feedback to
              refine the UI and improve accessibility. The final outcome was a
              28% increase in user retention in the first month.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
