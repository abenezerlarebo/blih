import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Blih Technologies | Code. Design. Impact.",
//   description: "We craft bold web experiences.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClientLayout>{children}</ClientLayout>
    </>
  );
}
