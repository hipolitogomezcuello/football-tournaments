import ThemeRegistry from "@/theme/ThemeRegistry";
import "./globals.css";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Football Tournaments",
  description: "Check tournaments and matches",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <ThemeRegistry>
      <body className={inter.className}>{children}</body>
    </ThemeRegistry>
    </html>
  );
}