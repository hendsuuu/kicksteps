import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KickSteps",
  description: "Welcome to KickSteps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      // suppressHydrationWarning={true}
       className={inter.className}>
        {children}
      </body>
    </html>
  );
}
