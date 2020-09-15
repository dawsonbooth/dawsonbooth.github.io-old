import * as React from "react";
import { Flex, Text } from "rebass";

import Link from "./Link";

export default () => { // TODO: Extract sections and change social names to icons
  return (
    <Flex
      as="header"
      justifyContent="center"
      py={2}
      color="background"
      bg="text"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        maxWidth={2048}
      >
        <Flex flex={1} justifyContent="center">
          <Text p={2} mr="auto">
            &#169; Copyright 2020 Dawson Booth
          </Text>
        </Flex>
        <Flex flex={1} justifyContent="center">
          <Link variant="nav" href="https://expo.io/@dawsonbooth">
            Expo
          </Link>
          <Link variant="nav" href="https://github.com/dawsonbooth/">
            GitHub
          </Link>
          <Link variant="nav" href="https://www.linkedin.com/in/dawsonbooth/">
            LinkedIn
          </Link>
          <Link variant="nav" href="https://www.facebook.com/dawsonbooth/">
            Facebook
          </Link>
          <Link variant="nav" href="https://twitter.com/dawsonbooth_">
            Twitter
          </Link>
          <Link variant="nav" href="https://instagram.com/dawsonbooth">
            Instagram
          </Link>
          <Link variant="nav" href="https://open.spotify.com/user/12155422298">
            Spotify
          </Link>
          <Link variant="nav" href="mailto:contact@dawsonbooth.com">
            Email
          </Link>
        </Flex>
        <Flex flex={1} justifyContent="center">
          <Text ml="auto">
            Made with&nbsp;
            <Link href="https://reactjs.org/">React</Link>,&nbsp;
            <Link href="https://www.gatsbyjs.com/">Gatsby</Link>,&nbsp;
            <Link href="https://rebassjs.org/">Rebass</Link>, and&nbsp;
            <Link href="https://theme-ui.com/">Theme UI</Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
