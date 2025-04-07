import Image from "next/image";

export default function Home() {
  return (
    <main className="bento-container">
      <div className="name-title-container">
        <h1 className="name">Marijn Meeuwesen</h1>{" "}
        {/* Replace with your name */}
        <span className="title">UX Designer</span>
        <span className="portfolio">Showcase portfolio</span>
      </div>
      <div className="horizontal-line"></div>
      <div className="bento-grid">
        <div className="bento-box box1">
          <Image src="/QL.png" alt="Packaging Flat" width={500} height={500} />
        </div>
        <div className="bento-box box2">
          <Image
            src="/images/box2.png"
            alt="Stationery"
            width={500}
            height={500}
          />
        </div>
        <div className="bento-box box3">
          <Image
            src="/pacemaker.png"
            alt="Coffee Flat Lay"
            width={500}
            height={500}
          />
        </div>
        <div className="bento-box box4">
          <Image
            src="/images/box4.png"
            alt="AOS Logo"
            width={500}
            height={500}
          />
        </div>
        <div className="bento-box box5">
          <Image
            src="/enorm.png"
            alt="Exhibition Stand"
            width={500}
            height={500}
          />
        </div>
        <div className="bento-box box6">
          <Image
            src="/byron.png"
            alt="Coffee Packaging"
            width={500}
            height={500}
          />
        </div>
        <div className="bento-box box7">
          <Image
            src="/images/box7.png"
            alt="Truck Branding"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
