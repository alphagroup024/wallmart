import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Strings } from "@/lib/strings";

export const metadata: Metadata = {
  title: Strings.AppName,
  description: Strings.AppDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
