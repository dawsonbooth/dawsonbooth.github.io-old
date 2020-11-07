import * as React from "react";

import { Flex, Heading } from "theme-ui";

import Layout from "../components/layout";
import Link from "../components/Link";
import RepoCard from "../components/RepoCard";

import routes from "../routes";
import useRepos from "../hooks/repos";

const Projects = () => {
  const repos = useRepos(12);

  return (
    <Layout>
      <Heading as="h1">Personal Projects</Heading>
      <Flex sx={{ justifyContent: "center", flexWrap: "wrap" }}>
        {repos.map((repo) => (
          <RepoCard {...repo} />
        ))}
      </Flex>
      <Link to={routes.HOME}>Go back to the home page</Link>
    </Layout>
  );
};

export default Projects;
