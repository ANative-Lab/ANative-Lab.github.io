import type { Metadata } from "next";
import { headers } from "next/headers";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./sections.css";
import "./redesign.css";
import "./team.css";
import "./typography.css";
import "./hero-intelligence.css";
import "./projects.css";
import "./project-stars.css";
import "./h5-story.css";
import "./howone.css";
import "./howone-logo.css";
import "./mobile-order.css";
import "./site-stats.css";
import "./brand-logo.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-ai-display",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-ai-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const host = h.get("x-forwarded-host") || h.get("host") || "localhost:3000";
  const protocol = h.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  const title = "ANative Lab — AI-Native & Agent-Native Intelligence";
  const description = "AI-native research for agent-native intelligence that learns, collaborates, and evolves.";
  return { title, description, icons:{icon:"/favicon.png",apple:"/apple-touch-icon.png"}, openGraph:{title,description,images:[{url:image,width:1200,height:630,alt:"ANative Lab"}]}, twitter:{card:"summary_large_image",title,description,images:[image]} };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
