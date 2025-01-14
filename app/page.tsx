"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className=" w-full h-fit pb-[150px] bg-secondaryBackground">
      <div className=" w-full bg-[#00041C] text-white h-[80%]  relative  flex justify-center items-center ">
        <Player
          autoplay
          speed={0.6}
          loop
          src="/assets/landing-page/hero.json"
          style={{ height: "100%", width: "100%" }}
        ></Player>
        <div className=" p-[60px] w-fit h-fit    z-20 absolute bg-blend-darken bg-[#00041C]/85 backdrop-filter drop-shadow-2xl rounded-lg flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              duration: 1.5,
            }}
            className=" text- text-[64px] leading-[1.2] text-center font-sans font-extrabold"
          >
            Challenge yourself and
            <br />
            level up your knowledge
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5,
              duration: 1.5,
            }}
            className="mt-10 hover:scale-[1.1] duration-500 "
          >
            <Link
              className=" h-[50px] w-[250px] flex items-center justify-center  text-[20px] font-semibold duration-500 rounded-md text-sm  text-white bg-activeColor"
              href="/Quizzes"
            >
              Get Started
            </Link>
          </motion.button>
        </div>
      </div>
      <div className="py-[20px] h-full w-full">
        <div className=" w-[300px] h-[400px] bg-cardBackground rounded-md mx-auto  flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
}

export default Home;
