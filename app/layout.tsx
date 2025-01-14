import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/reusable/Header";
import SplashWrapper from "@/components/SplashWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BrainUp | Level Up Your Knowledge.",
  description: "BrainUp is a Quiz platform to level up your knowledge.",
  icons: [
    {
      rel: "icon",
      url: "assets/logo/brainup.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashWrapper>
          <div className=" w-screen h-screen overflow-hidden bg-background">
          <Header />
          <div className=" w-full h-full overflow-y-scroll">
          {children}
          </div>
         
          </div>
         
        </SplashWrapper>
      </body>
    </html>
  );
}
