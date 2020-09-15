import * as React from "react";
import { Flex } from "rebass";

interface MainProps {
  children: React.ReactNode;
}

export default ({ children }: MainProps) => (
  <Flex
    as="main"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    {children}
  </Flex>
);
