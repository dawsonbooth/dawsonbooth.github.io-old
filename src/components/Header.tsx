import * as React from "react";
import { Box, Flex } from "rebass";
import { useColorMode } from "theme-ui";

import Link from "./Link";
import { PaletteIcon } from "./icons";

const colorModes = ["lite", "dark", "atlassian", "eva", "gray", "hack", "pink"];

const PaletteButton = () => {
  const [colorMode, setColorMode] = useColorMode();

  const cycleColorMode = () => {
    const i = (colorModes.indexOf(colorMode) + 1) % colorModes.length;
    setColorMode(colorModes[i]);
  };

  return (
    <Link variant="nav" onClick={cycleColorMode} width={40} height={40}>
      <PaletteIcon />
    </Link>
  );
};

const Navigation = () => (
  <Box>
    <Link variant="nav" to="/">
      Home
    </Link>
    <Link variant="nav" to="/page-2/">
      Page 2
    </Link>
  </Box>
);

const Header = () => {
  return (
    <Box as="header" width="100%" p={2} color="background" bg="text">
      <Flex justifyContent="space-between" alignItems="center">
        <Navigation />
        <PaletteButton />
      </Flex>
    </Box>
  );
};

export default Header;
