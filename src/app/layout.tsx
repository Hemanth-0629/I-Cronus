import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/global/SmoothScroll";
import GlobalCanvas from "@/components/canvas/GlobalCanvas";
import Navbar from "@/components/global/Navbar";
import FloatingWidgets from "@/components/global/FloatingWidgets";
import FloatingContactDock from "@/components/ui/FloatingContactDock";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "i-Cronus | Architecting the Future of Intelligent Systems",
  description: "Building mission-critical software, AI infrastructure, cloud-native platforms, and enterprise automation at planetary scale.",
  keywords: ["i-Cronus", "Enterprise Software", "Generative AI", "Digital Transformation", "Cloud Engineering", "Data Engineering", "AI Infrastructure"],
  authors: [{ name: "i-Cronus" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#050816] text-[#F8FAFC] font-sans`}>
        <CustomCursor />
        {/* The single global 3D scene manager */}
        <GlobalCanvas />
        <Navbar />
        <SmoothScroll>
          <main className="relative z-10 selection:bg-[#00E5FF]/20 selection:text-white">
            {children}
          </main>
        </SmoothScroll>
        <FloatingWidgets />
        <FloatingContactDock />
      </body>
    </html>
  );
}
