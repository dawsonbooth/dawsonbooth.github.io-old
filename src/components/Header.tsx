import * as React from "react";

import { Box, Flex, useColorMode } from "theme-ui";

import NavLink, { IconNavLink } from "./NavLink";
import { PaletteIcon } from "./icons";

import { colors, initialColorModeName } from "../theme";
import routes from "../routes";

const colorModes = [initialColorModeName, ...Object.keys(colors.modes)];

const PaletteButton = () => {
  const [colorMode, setColorMode] = useColorMode();

  const cycleColorMode = () => {
    const i = (colorModes.indexOf(colorMode) + 1) % colorModes.length;
    setColorMode(colorModes[i]);
  };

  return (
    <IconNavLink onClick={cycleColorMode} sx={{ cursor: "pointer" }}>
      <PaletteIcon />
    </IconNavLink>
  );
};

const Navigation = () => (
  <Box>
    <NavLink to={routes.HOME}>Home</NavLink>
    <NavLink to={routes.PROJECTS}>Projects</NavLink>
  </Box>
);

const Header = () => {
  return (
    <Box as="header" p={2} color="background" bg="text" sx={{ width: "100%" }}>
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Navigation />
        <PaletteButton />
      </Flex>
    </Box>
  );
};

export default Header;
