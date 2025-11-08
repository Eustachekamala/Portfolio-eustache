import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Eustache-portfolio",
  description: "My simple portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className="overflow-hidden h-screen w-screen" 
    >
      <body className={`${jetbrainsMono.variable} overflow-hidden h-screen w-screen`}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
