import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { headers } from "next/headers";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Home Management Platform in Ghana: Hire Cleaners and Nannies | Instaclean",
    template: "%s | Instaclean",
  },
  description:
    "Find trusted home professionals, manage your household workforce, and simplify everyday life across Ghana.",
  icons: { icon: "/favicon.ico" },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const bare = (await headers()).get("x-instaclean-bare") === "1";

  return (
    <html lang="en" className={bare ? figtree.variable : `${figtree.variable} dark`}>
      <body>
        {bare ? null : <SiteNav />}
        {children}
        {bare ? null : <SiteFooter />}
      </body>
    </html>
  );
}
