import * as React from "react";
import { Box, Flex } from "rebass";
import { useColorMode } from "theme-ui";

import Link from "./Link";
import { PaletteIcon } from "./icons";

const modes = ["lite", "dark", "atlassian", "eva", "gray", "hack", "pink"];

const PaletteButton = () => {
  const [mode, setMode] = useColorMode();

  const cycleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length;
    setMode(modes[i]);
  };

  return (
    <Link
      variant="nav"
      onClick={cycleMode}
      width={40}
      height={40}
      sx={{
        cursor: "pointer",
      }}
    >
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

export default () => {
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
        <Navigation />
        <PaletteButton />
      </Flex>
    </Flex>
  );
};
