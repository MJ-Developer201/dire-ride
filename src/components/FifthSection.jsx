import React from "react";
import { motion } from "framer-motion";

export default function FifthSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.7 }}
      style={{ display: "flex", borderBottom: "1px solid #151c5214" }}
    >
      <div style={{}}>
        <img
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src="../../public/erik-mclean-pXiYb-ksxxo-unsplash.jpg"
          alt=""
        />
      </div>

      <div>
        <img
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src="../../public/maxim-hopman-2GqwfocQI6Q-unsplash.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src="../../public/timothy-dykes-np52xKlGB-I-unsplash.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src="../../public/ildar-garifullin-KnDyg_Oiu_k-unsplash.jpg"
          alt=""
        />
      </div>
    </motion.div>
  );
}
