import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Unishrine Technologies — AI Solutions",
  description:
    "AI Solutions, Custom Software & App Development Company in Bengaluru",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">{children}</body>
    </html>
  );
}