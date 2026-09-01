import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "رواسي — وكلاء وأنظمة أتمتة تعمل داخل عملياتكم",
  description:
    "وكالة ذكاء اصطناعي سعودية. نبني وكلاء وأنظمة أتمتة تعمل داخل عملياتكم — لا عروضاً تقديمية.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
