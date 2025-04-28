import { Poppins, Roboto, Antic_Didone } from "next/font/google";
import "./globals.css";
import "./typography.css";
import "./colors.css";
import { homePageMetadata } from "@/config/metadata";
import Header from "@/components/global/Header";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const antic = Antic_Didone({
  variable: "--font-antic-didone",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = homePageMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${antic.variable} ${roboto.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
