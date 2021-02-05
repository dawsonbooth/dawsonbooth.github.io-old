import * as React from "react";

import { Heading, Flex, Text, Grid } from "theme-ui";

import { StarIcon, GitForkIcon } from "./icons";
import { CardLink } from "./Link";

interface RepoCardProps {
  name: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
}

// TODO: Add watchers
export default ({ name, description, stars, forks, url }: RepoCardProps) => (
  <CardLink href={url} p={3} sx={{ maxWidth: 450, height: 170 }}>
    <Grid gap={2}>
      <Heading as="h4">{name}</Heading>
      <Flex>
        <CardLink href={`${url}/stargazers`} px={2} py={1} mr={2}>
          <Flex sx={{ alignItems: "center" }}>
            <StarIcon />
            <Text ml={2}>{stars}</Text>
          </Flex>
        </CardLink>
        <CardLink href={`${url}/network/members`} px={2} py={1}>
          <Flex sx={{ alignItems: "center" }}>
            <GitForkIcon />
            <Text ml={2}>{forks}</Text>
          </Flex>
        </CardLink>
      </Flex>
      <Text>{description}</Text>
    </Grid>
  </CardLink>
);
