import { Button } from "@mui/material";
import React from "react";
import { delay, motion } from "framer-motion";

export default function HeroSection() {
  const divVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      duration: 1.8,
    },
  };

  return (
    <motion.div
      variants={divVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3, duration: 1.5 }}
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
        <motion.div>
          <Button
            variant="outlined"
            style={{
              borderRadius: "10px",
              padding: "0.5rem",
              color: "black",
              borderColor: "gray",
              letterSpacing: "2px",
            }}
          >
            Get Started
          </Button>
        </motion.div>
      </div>
      <div style={{ flex: 2, maxWidth: "50vw" }}>
        <img
          style={{ objectFit: "cover", width: "100%", height: "100vh" }}
          src="../../public/popescu-andrei-alexandru-KQjBXXPRsYM-unsplash.jpg"
          alt=""
        />
      </div>
    </motion.div>
  );
}
