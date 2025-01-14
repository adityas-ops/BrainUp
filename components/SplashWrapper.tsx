"use client";

import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); 

    return () => clearTimeout(timer); 
  }, []);

  const onFinish = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={onFinish} />
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
