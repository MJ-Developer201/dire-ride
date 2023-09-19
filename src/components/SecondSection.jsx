import React from "react";

export default function BelowTheFold() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #151c5214",
        }}
      >
        <div style={{ flex: 1, order: 2 }}>
          <h1>Travleres Blog!</h1>

          <h4>
            Explore the World with Us, Share Your Journeys, and Find Hidden Gems
          </h4>
          <p>
            Discover amazing travel stories, tips, and destination guides to
            fuel your wanderlust and make your next adventure unforgettable
          </p>
        </div>
        <div style={{ flex: 2, maxWidth: "40%" }}>
          <img
            style={{
              objectFit: "contain",
              maxHeight: "100%",
              maxWidth: "100%",
            }}
            src="../../public/william-daigneault-xm8S8wnCcC0-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
