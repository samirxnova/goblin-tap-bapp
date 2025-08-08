import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrivyCitreaWrapper as PrivyWrapper } from "@/config/privy";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Citrea Goblin Tap",
  description: "defeat goblins and earn rewards!",
  keywords: "blockchain game, citrea, cBTC, Goblin Tap, web3 gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrivyWrapper>
          {children}
        </PrivyWrapper>
      </body>
    </html>
  );
}
