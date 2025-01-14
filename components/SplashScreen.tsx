"use client";

import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const handleAnimationEnd = () => {
    onFinish();
  };

  const variants = {
    initial: { opacity: 0, scale: 0.1 },
    animate: { opacity: 1, scale: 1.5 },
    exit: { opacity: 0, scale: 0.1 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="w-full h-screen bg-background overflow-hidden flex items-center justify-center"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 2 }}
        onAnimationComplete={() => handleAnimationEnd()}
      >
        <Image
          src="/assets/images/brainup-transparent.png"
          alt="BrainUp"
          width={500}
          height={500}
          className="object-contain sm:block hidden"
        />
        <Image
          src="/assets/images/brainup-transparent.png"
          alt="BrainUp"
          width={250}
          height={250}
          className="object-contain block sm:hidden"
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default SplashScreen;
