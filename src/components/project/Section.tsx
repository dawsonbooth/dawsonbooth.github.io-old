import * as React from "react";

import ProjectGrid from "./ProjectGrid";

import useRepos, { RepoType } from "../../hooks/repos";

const sections: {
  [key: string]: string[];
} = {
  app: [
    "dawsonbooth.github.io",
    "sudoku-halie",
    "pynsweeper",
    "react-native-use-dimensions",
    "react-repo-card",
  ],
  ai: ["predictive-text", "pong-ai"],
  scrape: ["emoji-search", "vodscrepe"],
  fs: ["dustpan", "slippi-search", "treefrog", "media-mover"],
  misc: ["ascii-art", "sudoku-tools"],
};

const popularity = (repo: RepoType) => repo.stars + repo.forks + repo.watchers;

interface MostPopularProps {
  numRepos: number;
}

export const MostPopular: React.FC<MostPopularProps> = ({ numRepos }) => {
  const repos = useRepos()
    .filter((repo) => Boolean(repo.description))
    .sort((r1, r2) => popularity(r2) - popularity(r1))
    .slice(0, numRepos);

  return <ProjectGrid repos={repos} />;
};

interface ReposByNameProps {
  name: string;
}

const Section: React.FC<ReposByNameProps> = ({ name: name }) => {
  const repos = useRepos()
    .filter((repo) => sections[name].includes(repo.name))
    .filter((repo) => Boolean(repo.description))
    .sort((r1, r2) => popularity(r2) - popularity(r1));

  return <ProjectGrid repos={repos} />;
};

export default Section;
