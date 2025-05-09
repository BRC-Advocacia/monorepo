import { Poppins, Roboto, Antic_Didone } from "next/font/google";
import "./globals.css";
import "./typography.css";
import "./colors.css";
import ScrollHeader from "@/components/global/ScrollHeader";
import { ReactLenis } from "@/helpers/lenis";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

const antic = Antic_Didone({
  variable: "--font-antic-didone",
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <ReactLenis root>
        <body
          className={`${antic.variable} ${roboto.variable} ${poppins.variable} antialiased`}
        >
          <ScrollHeader />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
