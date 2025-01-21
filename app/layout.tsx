import "./globals.css";
import SplashWrapper from "@/components/SplashWrapper";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preload"
          href="/assets/landing-page/hero.json"
          as="fetch"
          type="application/json"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Carme&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background">
        <SplashWrapper>
          <div className=" w-screen h-screen overflow-hidden bg-background">
            <div className=" w-full h-full overflow-y-scroll">{children}</div>
          </div>
        </SplashWrapper>
      </body>
    </html>
  );
}
