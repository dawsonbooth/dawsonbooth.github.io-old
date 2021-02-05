import * as React from "react";

import { Box, Flex } from "theme-ui";

import { IconNavLink } from "../Link";
import {
  ExpoIcon,
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  SpotifyIcon,
  MailIcon,
} from "../icons";

const Footer: React.FC = () => (
  <Box as="footer" pb={2} sx={{ width: "100%", backgroundColor: "muted" }}>
    <Flex
      px={3}
      sx={{ justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}
    >
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
