import { Theme } from "@radix-ui/themes";
import "./globals.css";

import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Nickel",
  description: "A crazy element",
};

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Theme accentColor="indigo">{props.children}</Theme>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;