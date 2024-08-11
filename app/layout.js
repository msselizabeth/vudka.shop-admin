import { Roboto, Rubik_Mono_One } from "next/font/google";

import IsAuth from "@/components/isAuth/isAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";


const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const rubik = Rubik_Mono_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Vudka Admin",
  description: "Vudka.shop Admin Panel",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="uk">
      <body className={`${rubik.variable} ${roboto.variable}`}>
        <IsAuth>{children}</IsAuth>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      </body>
    </html>
  );
}
