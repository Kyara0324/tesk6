import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css"; // 경로 수정

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "나만의 포켓몬 도감",
  description: "Next.js로 만든 포켓몬 도감입니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <div>포켓몬 도감</div>
        {children}
      </body>
    </html>
  );
}
