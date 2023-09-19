import React from "react";
import { motion } from "framer-motion";

export default function SixthSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.7 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "5rem",
        borderBottom: "1px solid #151c5214",
      }}
    >
      <div>
        <h1>Sub Section</h1>
        <p style={{ maxWidth: "60ch" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quaerat
          cumque adipisci rem!
        </p>
      </div>
    </motion.div>
  );
}
