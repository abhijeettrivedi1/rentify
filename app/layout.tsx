// app/layout.tsx
'use client';
// import "tailwindcss";
import './globals.css'
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import Nav from './components/navbar';
import Footer from './components/footer';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <NextUIProvider>
            <Nav/>
            {children}
            <Footer/>
          </NextUIProvider>
          </SessionProvider>
      </body>
    </html>
  );
}
