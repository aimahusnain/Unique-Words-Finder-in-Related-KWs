import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | Unique Words Finder in Related KWs`,
    default: "Unique Words Finder in Related KWs",
  },
  description: "Unique Words Finder in Related KWs",
  openGraph: {
    title: "Unique Words Finder in Related KWs",
    description:
      "Discover unique words within related keywords effortlessly with our tool. Streamline your keyword research and enhance your content creation process.",
    url: "https://unique-words-finder-in-related-k-ws.vercel.app/",
    siteName: "Unique Words Finder in Related KWs",
    images: "/socialbanner",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} items-center justify-center bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
