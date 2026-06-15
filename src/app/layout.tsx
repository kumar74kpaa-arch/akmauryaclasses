import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "A.K. Maurya Classes | Expert Mathematics & Coaching Classes",
  description:
    "Expert Mathematics & Coaching Classes for School & Competitive Exams. 10+ Years of Teaching Experience | Group & Home Tuitions | Academic & Competitive Exam Preparation. Contact: +91 98103 12593",
  keywords: [
    "A.K. Maurya Classes",
    "Mathematics Coaching",
    "Competitive Exam Preparation",
    "SSC Coaching",
    "CUET Preparation",
    "NDA Coaching",
    "English Speaking Classes",
    "Computer Courses",
    "NIOS Programs",
    "Home Tuition",
    "Group Tuition",
  ],
  authors: [{ name: "A.K. Maurya Classes" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "A.K. Maurya Classes | Expert Mathematics & Coaching Classes",
    description:
      "10+ Years of Teaching Experience | Group & Home Tuitions | Academic & Competitive Exam Preparation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
