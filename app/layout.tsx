import '@/app/ui/global.css';
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The offical Next.js Course Dashboard, built with App Router',
  metadataBase: new URL('https://nextjs.org'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Inter font will be applied throughout the body */}
      {/* antialiased (Tailwind) class smooths oout the font */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
