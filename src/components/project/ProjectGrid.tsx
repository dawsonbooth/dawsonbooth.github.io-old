import * as React from "react";

import { Grid } from "theme-ui";
import RepoCard from "./RepoCard";

import { RepoType } from "../../hooks/repos";

interface ProjectGridProps {
  repos: RepoType[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ repos }) => (
  <Grid gap={3} columns={[1, 2]} sx={{ textAlign: "left" }}>
    {repos.map((repo, i) => (
      <RepoCard key={i} {...repo} />
    ))}
  </Grid>
);

export default ProjectGrid;
