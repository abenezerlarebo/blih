"use client";

import CustomCursor from "@/components/CustomCursor";
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Head from "next/head";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
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
