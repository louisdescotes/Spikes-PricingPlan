import React from "react";
import { motion } from "framer-motion";

const Abonnement = ({ title, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative hover:bg-[#FAFAFA1A] h-full w-64 text-white border border-[#FFFFFF66]  rounded-xl duration-200 ease-out overflow-hidden 
      ${active ? "bg-radial2" : ""}`}
    >
      <motion.div
        className="relative z-10 w-full h-full p-0 "
        whileHover={{
          y: -50,
        }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className="relative flex flex-col h-full origin-center transition-transform">
          <span className="relative w-full h-full px-4 py-2">{title}</span>
          <span className="absolute top-[50px] w-full h-full px-4 py-2">{title}</span>
        </div>
      </motion.div>
    </button>
  );
};

export default Abonnement;
