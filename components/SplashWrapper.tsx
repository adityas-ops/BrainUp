"use client";

import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

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

  const client = new ApolloClient({
    uri: "https://brainup-backend.onrender.com/",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        {showSplash ? (
          <SplashScreen onFinish={onFinish} />
        ) : (
          <div>{children}</div>
        )}
      </ApolloProvider>
    </>
  );
}
