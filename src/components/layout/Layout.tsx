import * as React from "react";

import { Helmet } from "react-helmet";
import { BoxProps, Flex } from "theme-ui";
import { keyframes } from "@emotion/react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

interface LayoutProps extends BoxProps {
  title?: string;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { title, ...boxProps } = props;
  const prefix = title ? `${title} | ` : "";
  return (
    <>
      <Helmet>
        <title>{`${prefix}Dawson Booth`}</title>
      </Helmet>
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
          height: "100vh",
          overflow: "overlay",
        }}
      >
        <Header />
        <Main
          {...boxProps}
          sx={{
            animationName: fadeIn,
            animationDuration: ".25s",
            animationFillMode: "backwards",
          }}
        />
        <Footer />
      </Flex>
    </>
  );
}
