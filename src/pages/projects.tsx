import * as React from "react";

import { Box, Flex, Grid, Heading } from "theme-ui";

import Layout from "../components/layout";
import Link from "../components/Link";
import RepoCard from "../components/RepoCard";

import useRepos from "../hooks/repos";

const Projects = () => {
  const allRepos = useRepos();
  const numRepos = allRepos.length;
  const repos = allRepos
    .filter((repo) => Boolean(repo.description))
    .sort(
      (r1, r2) =>
        r2.stars + r2.forks + r2.watchers - (r1.stars + r1.forks + r1.watchers)
    )
    .slice(0, 12);

  return (
    <Layout title="Projects">
      <Heading as="h1">Personal Projects</Heading>
      <Flex
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginY: 20,
        }}
      >
        {repos.map((repo, i) => (
          <Box key={i} sx={{ padding: 2 }}>
            <RepoCard {...repo} />
          </Box>
        ))}
      </Flex>
      <Link href="https://github.com/dawsonbooth">
        Check out all {numRepos} repositories at my GitHub!
      </Link>
    </Layout>
  );
};

export default Projects;
