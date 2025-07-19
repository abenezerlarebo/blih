import ClientLayout from "@/components/ClientLayout";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
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
  authors: [{ name: "Blih Technologies", url: "https://blihtech.com" }],
  creator: "Blih Technologies",
  publisher: "Blih Technologies",

  openGraph: {
    title: "Blih Technologies | Code. Design. Impact.",
    description:
      "Innovative software solutions and bold web experiences crafted in Ethiopia.",
    url: "https://blihtech.com",
    siteName: "Blih Technologies",
    locale: "en_ET",
    type: "website",
    images: [
      {
        url: "https://blihtech.com/og-image.jpg",
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
    site: "@blihtech",
    creator: "@blihtech",
    images: ["https://blihtech.com/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },

  metadataBase: new URL("https://blihtech.com"),
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
