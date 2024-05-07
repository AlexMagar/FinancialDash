import '@/app/ui/global.css';
import { inter } from "@/app/ui/fonts";

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
