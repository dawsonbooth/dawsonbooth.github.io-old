import * as React from "react";

import { Flex, useColorMode } from "theme-ui";

import { NavLink, IconNavLink } from "../Link";
import { PaletteIcon } from "../icons";

import theme from "../../theme";
import routes from "../../routes";

const modes = [theme.initialColorModeName, ...Object.keys(theme.colors.modes)];

const PaletteButton = () => {
  const [mode, setMode] = useColorMode();

  return (
    <IconNavLink
      onClick={() => {
        const index = modes.indexOf(mode);
        const next = modes[(index + 1) % modes.length];
        setMode(next);
      }}
      sx={{ cursor: "pointer" }}
    >
      <PaletteIcon />
    </IconNavLink>
  );
};

const Navigation = () => (
  <Flex sx={{ flexWrap: "nowrap" }}>
    <NavLink to={routes.HOME}>Home</NavLink>
    <NavLink to={routes.PROJECTS}>Projects</NavLink>
    <NavLink to={routes.CONTACT}>Contact</NavLink>
  </Flex>
);

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "center",
        width: "100%",
        backgroundColor: "muted",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 6px",
      }}
    >
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
