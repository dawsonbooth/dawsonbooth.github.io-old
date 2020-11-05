import * as React from "react";

import { Card, Text } from "theme-ui";

interface RepoCardProps {
  name: string;
  description: string;
  stars?: number;
  forks?: number;
  url?: string;
}

export default ({ name, description, stars, forks, url }: RepoCardProps) => (
  <Card
    sx={{
      width: 300,
      height: 150,
    }}
  >
    <Text>{name}</Text>
    <Text>
      Stars: {stars} - Forks: {forks}
    </Text>
    <Text>{description}</Text>
  </Card>
);
