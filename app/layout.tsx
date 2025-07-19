import ClientLayout from "@/components/ClientLayout";
import "@/styles/globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Blih Technologies | Code. Design. Impact.",
  description: "We craft bold web experiences.",
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
