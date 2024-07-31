import { Roboto, Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/AppLayout/AppLayout";
import IsAuth from "@/components/isAuth/isAuth";

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

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${rubik.variable} ${roboto.variable}`}>
        <IsAuth>{children}</IsAuth>
      </body>
    </html>
  );
}
