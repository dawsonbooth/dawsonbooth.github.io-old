import * as React from "react";

import { Flex } from "rebass";
import Footer from "./Footer";

import Header from "./Header";
import Main from "./Main";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex flexDirection="column" justifyContent="space-between" height="100vh">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Flex>
  );
}
