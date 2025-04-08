import Image from "next/image";

export default function Project1() {
  return (
    <main className="bento-container">
      <div className="name-title-container">
        <h1 className="name">Terug</h1>
        <span className="portfolio">Project 1</span>
      </div>
      <div className="horizontal-line"></div>

      {/* Full-width single bento box */}
      <div className="bento-grid">
        <div className="bento-box full-box">
          <Image
            src=""
            alt="Full Project Image"
            width={1500}
            height={800}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </main>
  );
}
