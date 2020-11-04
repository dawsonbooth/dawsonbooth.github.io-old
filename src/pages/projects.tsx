import * as React from "react";

import { Link, graphql, useStaticQuery } from "gatsby";

import { Heading, Text } from "theme-ui";

import Layout from "../components/Layout";

const useRepositories = () => {
  const {
    githubData: {
      data: {
        user: { repositories },
      },
    },
  } = useStaticQuery(
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

  return repositories;
};

const Projects = () => {
  const repositories = useRepositories();
  return (
    <Layout>
      <Heading>Personal Projects</Heading>
      <Text>{JSON.stringify(repositories)}</Text>
      <Link to="/">Go back to the home page</Link>
    </Layout>
  );
};

export default Projects;
