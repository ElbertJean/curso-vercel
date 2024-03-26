import '@/app/ui/global.css';
import { rubik } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  );
}
