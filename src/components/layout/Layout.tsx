import * as React from "react";

import { Helmet } from "react-helmet";
import { Flex } from "theme-ui";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>{`${title} | Dawson Booth`}</title>
      </Helmet>
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Flex>
    </>
  );
}
