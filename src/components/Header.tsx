import * as React from "react";
import { Box, Flex, useColorMode } from "theme-ui";

import NavLink from "./NavLink";

import { PaletteIcon } from "./icons";

import { colors, initialColorModeName } from "../theme";

const colorModes = [initialColorModeName, ...Object.keys(colors.modes)];

const PaletteButton = () => {
  const [colorMode, setColorMode] = useColorMode();

  const cycleColorMode = () => {
    const i = (colorModes.indexOf(colorMode) + 1) % colorModes.length;
    setColorMode(colorModes[i]);
  };

  return (
    <NavLink
      onClick={cycleColorMode}
      sx={{ width: 40, height: 40, cursor: "pointer" }}
    >
      <PaletteIcon />
    </NavLink>
  );
};

const Navigation = () => (
  <Box>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/page-2/">Page 2</NavLink>
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
