import * as React from "react";
import { Box, Flex, Text } from "rebass";

import Link from "./Link";

export default () => {
  return (
    <Flex as={"footer"} px={2} alignItems="center" color="background" bg="text">
      <Text p={2}>&#169; Copyright 2020 Dawson Booth</Text>
      <Box mx="auto" />
      <Text>
        Made with&nbsp;
        <Link href="https://reactjs.org/">React</Link>,&nbsp;
        <Link href="https://www.gatsbyjs.com/">Gatsby</Link>,&nbsp;
        <Link href="https://rebassjs.org/">Rebass</Link>, and&nbsp;
        <Link href="https://theme-ui.com/">Theme UI</Link>
      </Text>
    </Flex>
  );
};
