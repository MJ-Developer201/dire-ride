import React from "react";
import { motion } from "framer-motion";

export default function BelowTheFold() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.7 }}
    >
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #151c5214",
          height: "100vh",
          maxHeight: "300px",
          justifyItems: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            order: 2,
            maxWidth: "600px",
            paddingLeft: "2.5rem",
          }}
        >
          <h2
            style={{
              paddingBlock: "1rem",
              fontWeight: "300",
              paddingTop: "3rem",
            }}
          >
            Travleres Blog!
          </h2>

          <p
            style={{
              marginBlock: "1rem",
              fontWeight: "200",
              lineHeight: "2.1rem",
              maxWidth: " 57ch",
            }}
          >
            Discover amazing travel stories, tips, and destination guides to
            fuel your wanderlust and make your next adventure unforgettable.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad
            voluptatum in deserunt repellat
          </p>
        </div>
        <div style={{ flex: 2, maxWidth: "40%" }}>
          <img
            style={{
              objectFit: "cover",
              height: "300px",
              maxWidth: "100%",
            }}
            src="../../public/william-daigneault-xm8S8wnCcC0-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
}
