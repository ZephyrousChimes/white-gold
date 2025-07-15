import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'White Gold',
  description: 'QBlog',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="tufte">
        {children}
      </body>
    </html>
  );
}
