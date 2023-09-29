import React from "react";
import { motion } from "framer-motion";

export default function EighthSection() {
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
    >
      <div id="about" style={{ maxWidth: "1100px", padding: "3rem" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Your Car Deserves the Best
        </h1>
        <p style={{ lineHeight: "2rem", fontSize: "1.2rem" }}>
          At Dire Ride, we're passionate about providing top-notch car detailing
          services. We offer a wide range of services to ensure your vehicle
          looks its best, from exterior shine to interior cleanliness. Our team
          of skilled detailers takes pride in their work and uses the latest
          techniques and products to exceed your expectations.
        </p>
        <p style={{ lineHeight: "2rem", fontSize: "1.2rem" }}>
          When you choose us, you're choosing excellence and a commitment to
          your car's beauty and longevity. Give us a call or visit us for a
          consultation today. Let's discuss how we can enhance the appearance
          and health of your vehicle. Your car deserves the best, and so do you.
        </p>
      </div>
    </motion.div>
  );
}
