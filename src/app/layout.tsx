import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Your Name | Developer Portfolio',
  description:
    'Portfolio of Your Name - Developer specializing in web applications and software development.',
  keywords: [
    'Your Name',
    'Developer',
    'Portfolio',
    'Web Developer',
    'Software Engineer',
  ],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name | Developer Portfolio',
    description:
      'Developer building web apps and software solutions.',
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
