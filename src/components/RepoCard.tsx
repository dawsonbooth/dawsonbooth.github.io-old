import * as React from "react";

import { Heading, Card, Flex, Text, Grid } from "theme-ui";

import { StarFillIcon, GitForkIcon } from "./icons";
import Link from "./Link";

interface RepoCardProps {
  name: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
}

// TODO: Add watchers
export default ({ name, description, stars, forks, url }: RepoCardProps) => (
  <Link
    href={url}
    sx={{
      color: "inherit",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
    }}
  >
    <Card
      p={3}
      sx={{
        maxWidth: 450,
        height: 170,
        "&:hover": {
          borderColor: "primary",
        },
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
  </Link>
);
