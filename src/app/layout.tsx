import type { Metadata } from "next";
import { Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";

const shipporiMinchoB1 = Shippori_Mincho_B1({
  preload: false,
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "右田優希のWebサイト",
  description: "右田優希のWebサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${shipporiMinchoB1.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
