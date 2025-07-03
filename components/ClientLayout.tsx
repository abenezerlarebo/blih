"use client";

import { Inter } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "@/styles/globals.css";
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {!loadingComplete ? (
          <LoadingScreen onFinish={() => setLoadingComplete(true)} />
        ) : (
          <>
            <CustomCursor />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
