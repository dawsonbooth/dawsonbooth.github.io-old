import { graphql, useStaticQuery } from "gatsby";

export interface RepoType {
  name: string;
  description: string;
  stars: number;
  forks: number;
  watchers: number;
  url: string;
}

interface RepoQueryResult {
  githubData: {
    data: {
      user: {
        repositories: {
          edges: {
            node: {
              name: string;
              description: string;
              stargazerCount: number;
              forkCount: number;
              watchers: {
                totalCount: number;
              };
              url: string;
            };
          }[];
        };
      };
    };
  };
}

const useRepos: () => RepoType[] = () => {
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
                    stargazerCount
                    forkCount
                    watchers {
                      totalCount
                    }
                    url
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
      stars: edge.node.stargazerCount,
      forks: edge.node.forkCount,
      watchers: edge.node.watchers.totalCount, // TODO: Consider adding to project card
      url: edge.node.url,
    };
  });

  return repos;
};

export default useRepos;
