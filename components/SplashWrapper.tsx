"use client";

import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import ProtectedRoute from "./ProtectedRoute";

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
    // uri: "https://brainup-backend.onrender.com/",
    uri:"http://13.231.192.180:4000/",
    cache: new InMemoryCache(),
  });

  return (
    <>
      {/* <ProtectedRoute> */}
        <ApolloProvider client={client}>
          {showSplash ? (
            <SplashScreen onFinish={onFinish} />
          ) : (
            <div>{children}</div>
          )}
        </ApolloProvider>
      {/* </ProtectedRoute> */}
    </>
  );
}
