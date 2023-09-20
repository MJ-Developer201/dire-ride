import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { motion } from "framer-motion";

export default function SeventhSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.7 }}
      style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyContent: "space-evenly",
        padding: "100px",
        gap: "4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>
          <AcUnitIcon />
        </h2>
        <h6>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          aut.
        </h6>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>
          <AcUnitIcon />
        </h2>
        <h6>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          aut.
        </h6>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>
          <AcUnitIcon />
        </h2>
        <h6>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          aut.
        </h6>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AcUnitIcon />
        <h2></h2>
        <h6>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          aut.
        </h6>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>
          <AcUnitIcon />
        </h2>
        <h6>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          aut.
        </h6>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>
          <AcUnitIcon />
        </h2>
        <h6>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          aut.
        </h6>
      </div>
    </motion.div>
  );
}
