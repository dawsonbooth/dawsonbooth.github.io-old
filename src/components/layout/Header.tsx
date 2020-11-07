import * as React from "react";

import { Flex, useColorMode } from "theme-ui";

import { NavLink, IconNavLink } from "../Link";
import { PaletteIcon } from "../icons";

import theme from "../../theme";
import routes from "../../routes";

const colorModes = [
  theme.initialColorModeName,
  ...Object.keys(theme.colors.modes),
];

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
  <Flex sx={{ flexWrap: "nowrap" }}>
    <NavLink to={routes.HOME}>Home</NavLink>
    <NavLink to={routes.PROJECTS}>Projects</NavLink>
  </Flex>
);

const Header: React.FC = () => {
  return (
    <Flex as="header" p={2} sx={{ justifyContent: "center", width: "100%" }}>
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: 800,
        }}
      >
        <Navigation />
        <PaletteButton />
      </Flex>
    </Flex>
  );
};

export default Header;
