import { graphql, useStaticQuery } from "gatsby";

interface RepoQueryResult {
  githubData: {
    data: {
      user: {
        repositories: {
          edges: {
            node: {
              name: string;
              description: string;
              stargazers: {
                totalCount: number;
              };
              url: string;
              forkCount: number;
            };
          }[];
        };
      };
    };
  };
}

export default () => {
  const result: RepoQueryResult = useStaticQuery(
    graphql`
      {
        githubData {
          data {
            user {
              repositories {
                edges {
                  node {
                    name
                    description
                    stargazers {
                      totalCount
                    }
                    url
                    forkCount
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const repos = result.githubData.data.user.repositories.edges.map((edge) => {
    return {
      name: edge.node.name,
      description: edge.node.description,
      stars: edge.node.stargazers.totalCount,
      forks: edge.node.forkCount,
      url: edge.node.url,
    };
  });

  return repos;
};
