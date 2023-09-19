import React from "react";

export default function HeroSection() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        borderBottom: "1px solid #151c5214",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1>Travleres Blog!</h1>

        <h4>
          Explore the World with Us, Share Your Journeys, and Find Hidden Gems
        </h4>
        <p>
          Discover amazing travel stories, tips, and destination guides to fuel
          your wanderlust and make your next adventure unforgettable
        </p>
      </div>
      <div style={{ flex: 2, maxWidth: "50vw" }}>
        <img
          style={{ objectFit: "cover", width: "100%", height: "100vh" }}
          src="../../public/popescu-andrei-alexandru-KQjBXXPRsYM-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
