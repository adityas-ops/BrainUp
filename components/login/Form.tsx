"use client";
import React, { useState } from "react";
import InputComponent from "./InputComponent";
import Image from "next/image";
import Link from "next/link";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";



function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState<unknown>(null);


  // for google login function 
  const googleLog = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Access Token:", tokenResponse.access_token);
      
      try {
        const response = await axios.get(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        console.log("User Info:", response.data);
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
  })

  console.log('userInfo------->', userInfo);

  return (
    <div className=" flex px-0 sm:px-[40px] flex-col space-y-5">
      <InputComponent value={email} setValue={setEmail} label="email address" />
      <InputComponent
        value={password}
        setValue={setPassword}
        label="Password"
        isPassword
      />
      <button className=" w-full h-[45px] rounded-lg bg-activeColor text-white font-bold hover:brightness-75 font-carme ">
        Login
      </button>
      <div className=" w-full h-[20px] flex items-center justify-center space-x-2">
        <div className="w-full h-[1px] bg-gray-400" />
        <p className=" text-gray-300 text-[14px] whitespace-nowrap font-carme">
          Or Login With
        </p>
        <div className="w-full h-[1px] bg-gray-400" />
      </div>
      <button onClick={()=>googleLog()} className=" w-full h-[45px] rounded-lg bg-white flex items-center justify-center  text-black font-bold hover:brightness-75 font-carme ">
        <Image
          src="/assets/login/google.svg"
          width={24}
          height={24}
          alt="google"
        />
        <p className=" ml-2">Google</p>
      </button>
      <p className=" text-white flex items-center justify-center  text-center font-semibold">
        Don{"'"}t have an account?{" "}
        <Link href="/signup" className=" ml-2 text-activeColor text-[18px] underline underline-offset-8 font-bold cursor-pointer">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Form;
