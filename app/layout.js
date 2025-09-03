import { Raleway } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Wrapper from "./Components/Wrapper/Wrapper";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  // variable: '--font-raleway', // optional: use this if you want to apply with CSS variables
});

export const metadata = {
  title: "Zendit Dashboard",
  description: "Creating a quick dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 👇 Ensures app fits screen across zoom & display scaling */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${raleway?.className} min-h-screen w-full`}>
        <Suspense fallback={<Loading />}>
          <Wrapper>{children}</Wrapper>
        </Suspense>
      </body>
    </html>
  );
}
