import PublicAppBar from "@/components/AppBar";
import { SinglePageApp } from "@/spa/spa";
import { isLoggedIn } from "@/utils/cookies";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const useSpa = process.env.MOBILE_BUILD === "true" || isLoggedIn();
  return (
    <html lang="en">
      <body>
        <main>
          <PublicAppBar />
          {useSpa ? <SinglePageApp /> : children}
        </main>
      </body>
    </html>
  );
}
