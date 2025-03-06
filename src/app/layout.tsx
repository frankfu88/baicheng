"use client"; // ✅ 讓整個檔案變成 Client Component

import { usePathname } from "next/navigation"; // ✅ 取得當前頁面路徑
import Navbar from "./Navbar";
import Banner from "./Banner";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // ✅ 取得當前路徑
  const isPricingPage = pathname === "/pricing"; // ✅ 檢查是否為「價格一覽」頁面

  return (
    <html lang="zh-TW">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>東南動物醫院</title>
      </head>
      <body className="bg-white text-gray-900">
        <Navbar /> {/* ✅ Navbar 一直顯示 */}
        {!isPricingPage && <Banner />} {/* ✅ 只有非價格一覽頁面才顯示 Banner */}

        {/* 🔹 主要內容 */}
        <main className="pt-[100px] px-4">{children}</main>

        {/* 🔹 頁尾 */}
        <footer className="bg-blue-100 text-center py-6 mt-12 text-gray-700">
          <p>© {new Date().getFullYear()} 東南動物醫院 - 守護毛孩的健康</p>
        </footer>
      </body>
    </html>
  );
}
