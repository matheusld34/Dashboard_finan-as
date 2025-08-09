import { Html, Head, Main, NextScript } from "next/document";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar";

//import { Inter } from "next/font/google"


//const inter = Inter({ subsets: ["latin"] })

export default function Document() {
  return (

    <Html lang="en">

      <Head />


      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        //inter.className
      )}>

        <Main />

        <NextScript />

      </body>
    </Html>
  );
}
