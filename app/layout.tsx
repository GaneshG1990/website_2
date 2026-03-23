import "./globals.css";
import Navbar from "@/components/layout/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen text-white overflow-x-hidden">

        {/* 🔥 Animated Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617]" />

          {/* moving gradient */}
          <div className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-float top-[-200px] left-[-200px]" />
          <div className="absolute w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[120px] animate-floatSlow bottom-[-200px] right-[-200px]" />
        </div>

        <Navbar />

        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}