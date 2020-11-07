import * as React from "react";

import { Flex, Heading } from "theme-ui";

import Layout from "../components/layout";
import Link from "../components/Link";
import RepoCard from "../components/RepoCard";

import useRepos from "../hooks/repos";

const Projects = () => {
  const allRepos = useRepos();
  const numRepos = allRepos.length;
  const repos = allRepos
    .filter((repo) => Boolean(repo.description))
    .sort((r1, r2) => r2.stars + r2.forks - (r1.stars + r1.forks))
    .slice(0, 12);

  return (
    <Layout>
      <Heading as="h1">Personal Projects</Heading>
      <Flex sx={{ justifyContent: "center", flexWrap: "wrap" }}>
        {repos.map((repo) => (
          <RepoCard {...repo} />
        ))}
      </Flex>
      <Link href="https://github.com/dawsonbooth">
        Check out all {numRepos} repositories at my GitHub!
      </Link>
    </Layout>
  );
};

export default Projects;
