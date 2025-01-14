"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Explore Quizes",
      link: "/Quizzes",
    },
    {
      name: "Leaderboard",
      link: "/Leaderboard",
    },
    {
      name: "Dashboard",
      link: "/Dashboard",
    },
  ];
     const pathName = usePathname();
     console.log('pathName', pathName);   
  return (
    <div className=" w-full h-[60px] z-50 bg-background/5  backdrop-filter drop-shadow-lg py-[10px] px-[20px] flex justify-between items-center">
      {/* logo */}
      <Link href="/" className="text-white text-2xl font-bold flex items-center">
        <Image
          src="/assets/logo/brainup-logo-apple.png"
          alt="BrainUp"
          width={40}
          height={40}
        />
        <p className="font-serif font-thin">BrainUp</p>
      
      </Link>
      {/* nav */}
      <div className="flex items-center space-x-3 justify-center">
        {navItems.map((item, index) => {
          return (
            <Link key={index} href={item.link} className={`
                px-4 py-2 rounded-md text-sm font-semibold
            ${pathName === item.link ? "text-white bg-activeColor" : " text-textColorSecondary bg-transparent"}
            `}>
              <p>{item.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="">
        <button className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-[#4053FF]">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Header;
