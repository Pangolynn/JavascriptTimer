import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en" className="bg-gradient-to-b from-orange-100 to-orange-900">
      <Head />
      <body>
        <Image
          className="beans"
          src="/coffee_beans.jpeg"
          alt="cofee beans"
          fill
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
