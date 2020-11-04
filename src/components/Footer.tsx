import * as React from "react";
import { Box, Flex } from "rebass";
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

const Footer = () => (
  <Box as="footer" width="100%" p={2} color="background" bg="text">
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <IconNavLink href="https://www.linkedin.com/in/dawsonbooth/">
        <LinkedInIcon />
      </IconNavLink>
      <IconNavLink href="https://github.com/dawsonbooth/">
        <GitHubIcon />
      </IconNavLink>
      <IconNavLink href="https://expo.io/@dawsonbooth">
        <ExpoIcon />
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
  </Box>
);

export default Footer;
