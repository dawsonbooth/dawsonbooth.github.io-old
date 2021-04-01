import * as React from "react";

import { Box, BoxProps } from "theme-ui";

import { merge } from "lodash";

interface MainProps extends BoxProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = (props) => {
  const { sx, ...boxProps } = props;
  return (
    <Box as="main">
      <Box
        px={3}
        sx={merge({ maxWidth: 900, margin: "auto" }, sx)}
        {...boxProps}
      />
    </Box>
  );
};

export default Main;
