import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero"
  },
  description: "Super powerful Next webpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="../../public/fav.png" />
      </Head>
      <body className={inter.className}>
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <div>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
