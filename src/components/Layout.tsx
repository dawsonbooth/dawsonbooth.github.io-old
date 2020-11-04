import * as React from "react";

import { Flex } from "theme-ui";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Flex>
  );
}
