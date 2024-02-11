import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import NextThemeProvider from '../provides/theme-provider'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
    images: ["/socialbanner.png"],
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
        className={`${inter.className}`}
      >
       <NextThemeProvider>
          <Providers>
                {children}
          </Providers>
        </NextThemeProvider>
      </body>
    </html>
  );
}
