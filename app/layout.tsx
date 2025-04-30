// 导入global.css文件，将全局样式添加到您的应用程序中：
// 您可以使用此文件将CSS规则添加到应用程序中的所有路由
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
