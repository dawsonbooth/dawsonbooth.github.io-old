import * as React from "react";
import { Flex } from "theme-ui";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => (
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

export default Main;
