import { Geist, Geist_Mono } from "next/font/google";
import StoreProvider from "./StoreProvider.jsx";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import Header from "./components/Header.jsx";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blogging Platform",
  description: "A simple blogging platform built with Next.js and Prisma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <StoreProvider>
           <Toaster position="top-center" />
          <Header />
          <div className="flex min-h-screen items-center justify-center bg-gray-800 font-sans ">
            <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-start rounded py-8 px-16 bg-white mt-16 sm:items-start">
              {children}
            </main>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
