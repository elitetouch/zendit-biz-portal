import { Lato } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Wrapper from "./Components/Wrapper/Wrapper";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // You can add '100', '300', '400', '700', '900'
});

export const metadata = {
  title: "Zendit Dashboard",
  description: "Creating a quick dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         className={lato?.className}
      >
        <Suspense fallback={<Loading />}>
        <Wrapper>
        {children}
        </Wrapper>
        </Suspense>
      </body>
    </html>
  );
}
