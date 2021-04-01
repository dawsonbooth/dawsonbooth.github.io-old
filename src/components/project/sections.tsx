import * as React from "react";

import ProjectGrid from "./ProjectGrid";

import useRepos, { RepoType } from "../../hooks/repos";

interface SectionProps {
  numRepos: number;
}

export const MostPopular: React.FC<SectionProps> = ({ numRepos }) => {
  const popularity = (repo: RepoType) =>
    repo.stars + repo.forks + repo.watchers;

  const repos = useRepos()
    .filter((repo) => Boolean(repo.description))
    .sort((r1, r2) => popularity(r2) - popularity(r1))
    .slice(0, numRepos);

  return <ProjectGrid repos={repos} />;
};
