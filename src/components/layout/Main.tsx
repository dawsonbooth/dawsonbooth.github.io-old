import * as React from "react";

import { BoxProps, Flex } from "theme-ui";

import { merge } from "lodash";

interface MainProps extends BoxProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = (props) => {
  const { sx, ...boxProps } = props;
  return (
    <Flex
      as="main"
      sx={merge(
        {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 3,
          width: "100%",
          maxWidth: 900,
          textAlign: "center",
        },
        sx
      )}
      {...boxProps}
    />
  );
};

export default Main;
