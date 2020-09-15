import * as React from "react";
import { Flex, Text } from "rebass";
import {
  ExpoIcon,
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  SpotifyIcon,
  MailIcon,
} from "./icons";

import Link, { LinkProps } from "./Link";

const IconNavLink: React.FC<LinkProps> = (props) => (
  <Link variant="nav" {...props} width={40} height={40} />
);

const Copyright = () => (
  <Flex flex={1} justifyContent="center">
    <Text p={2} mr="auto">
      &#169; Copyright 2020 Dawson Booth
    </Text>
  </Flex>
);

const Social = () => (
  <Flex flex={1} justifyContent="center">
    <IconNavLink href="https://expo.io/@dawsonbooth">
      <ExpoIcon />
    </IconNavLink>
    <IconNavLink href="https://github.com/dawsonbooth/">
      <GitHubIcon />
    </IconNavLink>
    <IconNavLink href="https://www.linkedin.com/in/dawsonbooth/">
      <LinkedInIcon />
    </IconNavLink>
    <IconNavLink href="https://www.facebook.com/dawsonbooth/">
      <FacebookIcon />
    </IconNavLink>
    <IconNavLink href="https://twitter.com/dawsonbooth_">
      <TwitterIcon />
    </IconNavLink>
    <IconNavLink href="https://instagram.com/dawsonbooth">
      <InstagramIcon />
    </IconNavLink>
    <IconNavLink href="https://open.spotify.com/user/12155422298">
      <SpotifyIcon />
    </IconNavLink>
    <IconNavLink href="mailto:contact@dawsonbooth.com">
      <MailIcon />
    </IconNavLink>
  </Flex>
);

const MadeWith = () => (
  <Flex flex={1} justifyContent="center">
    <Text ml="auto">
      Made with&nbsp;
      <Link href="https://reactjs.org/">React</Link>,&nbsp;
      <Link href="https://www.gatsbyjs.com/">Gatsby</Link>,&nbsp;
      <Link href="https://rebassjs.org/">Rebass</Link>, and&nbsp;
      <Link href="https://theme-ui.com/">Theme UI</Link>
    </Text>
  </Flex>
);

export default () => (
  <Flex as="footer" justifyContent="center" py={2} color="background" bg="text">
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      maxWidth={2048}
    >
      <Copyright />
      <Social />
      <MadeWith />
    </Flex>
  </Flex>
);
