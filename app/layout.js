import { Lato } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Wrapper from "./Components/Wrapper/Wrapper";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // optional: add '100', '300'
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
      <body className={`${lato.className} min-h-screen w-full`}>
        <Suspense fallback={<Loading />}>
          <Wrapper>{children}</Wrapper>
        </Suspense>
      </body>
    </html>
  );
}
