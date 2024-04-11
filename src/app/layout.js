import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "../../providers";
import Navbar11 from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CourseMate",
  description: "Generated by create next app",
  viewport: {
    width: "device-width",
    height: "device-height",
    initialScale: 1.25,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar11 />
        <Providers>{children}</Providers>
        
      </body>
    </html>
  );
}
