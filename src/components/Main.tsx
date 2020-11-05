import * as React from "react";
import { Flex } from "theme-ui";

interface MainProps {
  children: React.ReactNode;
}

export default ({ children }: MainProps) => (
  <Flex
    as="main"
    sx={{
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      py: 10,
      maxWidth: 800,
    }}
  >
    {children}
  </Flex>
);
