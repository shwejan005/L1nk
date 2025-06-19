import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const primaryFont = League_Spartan({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "L1nk",
  description: "One Place for All Your Messy Link",
  icons: {
    icon: "/convex.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primaryFont.className} min-h-screen max-w-full antialiased`}>
        <ClerkProvider dynamic>
          <ConvexClientProvider>
            <Header />
            {children}
            <Footer />
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
