import React from "react";
import { delay, motion } from "framer-motion";

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
      <div style={{ maxWidth: "1100px" }}>
        <p style={{ lineHeight: "3rem", fontSize: "2rem", fontWeight: "100" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa placeat
          accusantium totam, enim autem nam obcaecati deserunt similique
          voluptatum cumque delectus, quos quam explicabo vero optio! Placeat
          amet aliquid consectetur voluptates. Saepe, facere doloremque. Tempora
          dolorum porro commodi veniam maiores nesciunt laborum, corrupti
          repudiandae praesentium dolores ex provident nisi deserunt. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Iure, dicta.
          Corporis, eum
        </p>
      </div>
    </motion.div>
  );
}
