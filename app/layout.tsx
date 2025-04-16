import "./globals.css";
import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "./components/ThemeProvider";


export const metadata: Metadata = {
  title: "Root Layout",
  description: "Root Layout",
  };
  const RootLayout = (props: PropsWithChildren) => {
    return (

      <html suppressHydrationWarning >
        
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Theme  accentColor="indigo">  {props.children}</Theme></ThemeProvider>
        </body>
        
      </html>
    );
  }
  export default RootLayout;