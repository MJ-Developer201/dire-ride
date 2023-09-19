import React from "react";
import { motion } from "framer-motion";
export default function FourthSection() {
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
        <h1>Title of Section</h1>
        <p style={{ maxWidth: "60ch" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut provident
          ea sapiente eum tempora adipisci nam dolorem rem a distinctio mollitia
          sunt fugit.
        </p>
      </div>
    </motion.div>
  );
}
