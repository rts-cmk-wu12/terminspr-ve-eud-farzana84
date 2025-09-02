import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
 weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: {
    default: "Landrup Dans",
    template: "%s | Landrup Dans",
  },
  description: "A mobile web application for a dance school",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#5E2E53] ${ubuntu.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}







