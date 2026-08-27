import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '金晓彤 · 个人作品集',
  description: '金晓彤的个人作品集，聚焦 UX 设计、用户研究、数据分析与交互体验。',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: {
    title: '金晓彤 · 个人作品集',
    description: 'UX设计 · 用户研究 · 数据分析',
    type: 'website',
    images: ['https://jinxiaotong-portfolio.gaylon020418.chatgpt.site/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '金晓彤 · 个人作品集',
    description: 'UX设计 · 用户研究 · 数据分析',
    images: ['https://jinxiaotong-portfolio.gaylon020418.chatgpt.site/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
