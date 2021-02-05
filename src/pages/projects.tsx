import * as React from "react";

import { Heading, Grid } from "theme-ui";

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
      <Heading as="h1" my={15}>
        Personal Projects
      </Heading>
      <Grid gap={3} columns={[1, 2]} sx={{ textAlign: "left" }}>
        {repos.map((repo, i) => (
          <RepoCard key={i} {...repo} />
        ))}
      </Grid>
      <Link href="https://github.com/dawsonbooth" my={15}>
        Check out all {numRepos} repositories at my GitHub!
      </Link>
    </Layout>
  );
};

export default Projects;
