import type { Metadata } from "next";
import './globals.css';
import Header from "@components/Header";

export const metadata: Metadata = {
  title: "memória-remota",
  description: "um blog pessoal sobre tecnologia, programação e desenvolvimento de software",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children } : React.PropsWithChildren) {
  return (
    <html lang="pt-br" dir="ltr">
      <body
        className={`antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
