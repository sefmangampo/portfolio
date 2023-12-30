import "./globals.css";
import { Inter } from "next/font/google";
import "devextreme/dist/css/dx.material.orange.dark.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sef's Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
