"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
import { MdOutlineLeaderboard } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

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

    const mobileNavItems = [
    {
      name: "Home",
      link: "/",
      icon: <IoHomeOutline className="text-[20px]" />,
    },
    {
      name: "Explore Quizes",
      link: "/Quizzes",
      icon: <CiPlay1  className="text-[20px]" />,
    },
    {
      name: "Leaderboard",
      link: "/Leaderboard",
      icon: <MdOutlineLeaderboard  className="text-[20px]"/>,
    },
    {
      name: "Dashboard",
      link: "/Dashboard",
      icon: <RxDashboard  className="text-[20px]"/>,
    },
    ]

  const pathName = usePathname();
  console.log("pathName", pathName);
  return (
    <>
      <div className=" w-full h-[60px] z-50 bg-background/5  backdrop-filter drop-shadow-lg py-[10px] px-[20px] flex justify-between items-center">
        {/* logo */}
        <Link
          href="/"
          className="text-white text-2xl font-bold flex items-center"
        >
          <Image
            src="/assets/logo/brainup-logo-apple.png"
            alt="BrainUp"
            width={40}
            height={40}
          />
          <p className="font-serif font-thin">BrainUp</p>
        </Link>
        {/* nav */}
        <div className="sm:flex hidden  items-center space-x-3 justify-center">
          {navItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className={`
                px-4 py-2 rounded-md text-sm font-semibold hover:text-white hover:font-bold
            ${
              pathName === item.link
                ? "text-white bg-activeColor"
                : " text-textColorSecondary bg-transparent"
            }
            `}
              >
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
      <div className="sm:hidden border-t-[1px] border-gray-400 flex items-center z-50 rounded-t-md fixed bottom-[-10px] left-0 right-0 h-[80px] bg-background">
        <div className=" w-full h-full grid grid-cols-4">
          {mobileNavItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className="flex justify-center items-center"
              >
                <div className={`flex flex-col  gap-y-[5px] items-center justify-center
                ${pathName === item.link ? "text-activeColor" : "text-gray-400"}`}>
                  {item.icon}
                  <p className="text-xs">{item.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Header;
