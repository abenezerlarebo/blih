import ClientLayout from "@/components/ClientLayout";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Blih Technologies | Code. Design. Impact.",
  description:
    "Blih Technologies is a bold software development agency based in Ethiopia, crafting innovative websites, web apps, and digital experiences.",
  keywords: [
    "Software Development Ethiopia",
    "Web Development Ethiopia",
    "Software Agency Addis Ababa",
    "Ethiopian Tech Company",
    "Custom Software Solutions",
    "Blih Technologies",
    "Website Design Ethiopia",
    "Mobile App Development Ethiopia",
  ],
  authors: [
    { name: "Blih Technologies", url: "https://blih-technologies.vercel.app" },
  ],
  creator: "Blih Technologies",
  publisher: "Blih Technologies",

  openGraph: {
    title: "Blih Technologies | Code. Design. Impact.",
    description:
      "Innovative software solutions and bold web experiences crafted in Ethiopia.",
    url: "https://blih-technologies.vercel.app/",
    siteName: "Blih Technologies",
    locale: "en_ET",
    type: "website",
    images: [
      {
        url: "https://blih-technologies.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Blih Technologies Logo and Website Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blih Technologies | Code. Design. Impact.",
    description:
      "Innovative software agency based in Ethiopia, delivering custom web and mobile apps.",
    site: "@blih_tech",
    creator: "@blih_tech",
    images: ["https://blih-technologies.vercel.app/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "CD8o5e2tN1I--zxj6lqHoKCqnQIu0nWfRxGxg0xgHWk",
  },
  metadataBase: new URL("https://blih-technologies.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-black text-white font-sans antialiased selection:bg-red-500/70">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
