import * as React from "react";
import { Flex, Button, Text } from "rebass";
import { useColorMode } from "theme-ui";

import Link from "./Link";

const modes = ["lite", "dark", "atlassian", "eva", "gray", "hack", "pink"];

const Dot = () => (
  <svg
    viewBox="0 0 32 32"
    width="24"
    height="24"
    fill="currentcolor"
    style={{
      display: "block",
    }}
  >
    <circle
      cx="16"
      cy="16"
      r="14"
      fill="none"
      stroke="currentcolor"
      strokeWidth="4"
    />
    <path
      d={`
        M 16 0
        A 16 16 0 0 0 16 32
        z
      `}
    />
  </svg>
);

export default () => {
  const [mode, setMode] = useColorMode();

  const cycleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length;
    setMode(modes[i]);
  };

  return (
    <Flex
      as="header"
      px={3}
      py={2}
      justifyContent="center"
      alignItems="center"
      color="background"
      bg="text"
    >
      <Flex flex={1} justifyContent="center">
        <Text p={2} fontWeight="bold" mr="auto">
          Dawson Booth
        </Text>
      </Flex>
      <Flex flex={1} justifyContent="center">
        <Link variant="nav" to="/">
          Home
        </Link>
        <Link variant="nav" to="/page-2/">
          Page 2
        </Link>
      </Flex>
      <Flex flex={1} justifyContent="center">
        <Button
          title="Change color mode"
          variant="transparent"
          width={32}
          height={32}
          p={1}
          ml="auto"
          sx={{
            cursor: "pointer",
            borderRadius: "50%",
          }}
          onClick={cycleMode}
        >
          <Dot />
        </Button>
      </Flex>
    </Flex>
  );
};
