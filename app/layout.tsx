import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '澳门研究 | Journal Home',
  description: 'Academic journal home page for Macau Studies.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className="min-h-screen bg-slate-25">
        {children}
      </body>
    </html>
  );
}
