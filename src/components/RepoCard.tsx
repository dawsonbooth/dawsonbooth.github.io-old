import * as React from "react";

import { Heading, Card, Flex, Text, Grid } from "theme-ui";

import { StarFillIcon, GitForkIcon } from "./icons";
import NavLink from "./NavLink";

interface RepoCardProps {
  name: string;
  description: string;
  stars?: number;
  forks?: number;
  url?: string;
}

export default ({ name, description, stars, forks, url }: RepoCardProps) => (
  <NavLink href={url}>
    <Card
      p={3}
      sx={{
        margin: 2,
        width: 350,
        height: 170,
      }}
    >
      <Grid gap={2}>
        <Heading as="h4">{name}</Heading>
        <Flex>
          <Card px={1} sx={{ marginRight: 1 }}>
            <StarFillIcon /> {stars}
          </Card>
          <Card px={1}>
            <GitForkIcon /> {forks}
          </Card>
        </Flex>
        <Text>{description}</Text>
      </Grid>
    </Card>
  </NavLink>
);
