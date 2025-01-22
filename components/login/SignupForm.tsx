"use client";
import React, { useEffect, useState } from "react";
import InputComponent from "./InputComponent";
import Image from "next/image";
import Link from "next/link";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState(false);

  useEffect(() => {
    if (
      password !== confirmPassword &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      setMatchPassword(false);
    } else {
      setMatchPassword(true);
    }
  }, [password, confirmPassword]);

  return (
    <div className=" flex flex-col space-y-5">
      <InputComponent
        value={fullName}
        setValue={setFullName}
        label="Full Name"
      />
      <InputComponent value={email} setValue={setEmail} label="email address" />
      <InputComponent
        value={password}
        setValue={setPassword}
        label="Password"
        isPassword
      />
      <InputComponent
        value={confirmPassword}
        setValue={setConfirmPassword}
        label="Confirm Password"
        isPassword
      />
      {!matchPassword && (
        <p className="text-red-600 text-[14px] font-semibold font-carme">
          Password does not match
        </p>
      )}
      <button className=" w-full h-[45px] rounded-lg bg-activeColor text-white font-bold hover:brightness-75 font-carme ">
        Sign Up
      </button>
      <div className=" w-full h-[20px] flex items-center justify-center space-x-2">
        <div className="w-full h-[1px] bg-gray-400" />
        <p className=" text-gray-300 text-[14px] whitespace-nowrap font-carme">
          Or Sign Up With
        </p>
        <div className="w-full h-[1px] bg-gray-400" />
      </div>
      <button className=" w-full h-[45px] rounded-lg bg-white flex items-center justify-center  text-black font-bold hover:brightness-75 font-carme ">
        <Image
          src="/assets/login/google.svg"
          width={24}
          height={24}
          alt="google"
        />
        <p className=" ml-2">Google</p>
      </button>
      <p className=" text-white flex items-center justify-center  text-center font-semibold">
        Already have an account?{" "}
        <Link
          href="/login"
          className=" ml-2 text-activeColor text-[18px] underline underline-offset-8 font-bold cursor-pointer"
        >
          Login
        </Link>
      </p>
    </div>
  );
}

export default SignupForm;
