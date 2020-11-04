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
    <Flex sx={{ flexDirection: "column" }}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Flex>
  );
}
