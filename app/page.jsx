import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bento-container homepage">
      <div className="name-title-container">
        <h1 className="name">Marijn Meeuwesen</h1>
        <span className="title">Game design</span>
        <span className="portfolio">Showcase portfolio</span>
      </div>
      <div className="horizontal-line"></div>

      <div className="bento-grid">
        <Link href="/project1" passHref legacyBehavior>
          <a className="bento-box box1" style={{ display: "block" }}>
            <div className="image-wrapper">
              <Image
                src="/project1.png"
                alt="Packaging Flat"
                width={500}
                height={500}
              />
              <div className="project-label">Project 1</div>
            </div>
          </a>
        </Link>

        <div className="bento-box box2">
          <div className="image-wrapper">
            <Image
              src="/project2.png"
              alt="Stationery"
              width={500}
              height={500}
            />
            <div className="project-label">Project 2</div>
          </div>
        </div>

        <div className="bento-box box3">
          <div className="image-wrapper">
            <Image
              src="/project6.png"
              alt="Coffee Flat Lay"
              width={500}
              height={500}
            />
            <div className="project-label">Project 3</div>
          </div>
        </div>

        <div className="bento-box box4">
          <div className="image-wrapper">
            <Image
              src="/project3.png"
              alt="AOS Logo"
              width={500}
              height={500}
            />
            <div className="project-label">Project 4</div>
          </div>
        </div>

        <div className="bento-box box7">
          <div className="image-wrapper">
            <Image
              src="/project7.png"
              alt="Truck Branding"
              width={500}
              height={500}
            />
            <div className="project-label">Project 5</div>
          </div>
        </div>

        <div className="bento-box box6">
          <div className="image-wrapper">
            <Image
              src="/project4.png"
              alt="Coffee Packaging"
              width={500}
              height={500}
            />
            <div className="project-label">Project 6</div>
          </div>
        </div>

        <div className="bento-box box5">
          <div className="image-wrapper">
            <Image
              src="/project5.png"
              alt="Exhibition Stand"
              width={500}
              height={500}
            />
            <div className="project-label">Project 7</div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section className="about-me">
        <div className="about-me-container">
          <div className="about-me-image">
            <Image
              src="/globe.svg"
              alt="Marijn Meeuwesen"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="about-me-text">
            <h2>About Me</h2>
            <p>
              Hello, I'm Marijn Meeuwesen, a passionate UX Designer with a love
              for creating intuitive and engaging digital experiences. I
              specialize in user research, interface design, and creating
              seamless user flows. I believe in combining creativity with
              usability to design products that people love to use.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
