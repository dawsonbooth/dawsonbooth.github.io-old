import * as React from "react";
import { Box, Flex, Text } from "rebass";
import { useColorMode } from "theme-ui";

import Link from "./Link";

const modes = ["lite", "dark", "atlassian", "eva", "gray", "hack", "pink"];

const PaletteIcon = () => (
  <svg id="solid" viewBox="0 0 512 512">
    <path
      fill="currentcolor"
      d="M425.705,86.587A238.427,238.427,0,0,0,256,16.292c-63.856,0-123.95,21.059-169.212,59.3C41.14,114.154,16,165.544,16,220.292c0,52.418,23.319,102.223,65.663,140.24,41.8,37.534,98.163,60.027,158.7,63.335a8.039,8.039,0,0,1,7.64,7.987V471.7a24.019,24.019,0,0,0,24.054,24q.873,0,1.747-.064a240.007,240.007,0,0,0,151.9-409.055ZM120,208a40,40,0,1,1,40-40A40,40,0,0,1,120,208Zm112-64a40,40,0,1,1,40-40A40,40,0,0,1,232,144Zm80-8a40,40,0,1,1,40,40A40,40,0,0,1,312,136Zm96,152a40,40,0,1,1,40-40A40,40,0,0,1,408,288Z"
    />
  </svg>
);

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
      width={32}
      height={32}
      p={1}
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
