import * as React from "react";

import { Link, graphql } from "gatsby";

import { Heading, Text } from "theme-ui";

import Layout from "../components/Layout";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const HomePage = ({ data }: IndexPageProps) => {
  return (
    <Layout>
      <Heading>Hello world!</Heading>
      <Text>
        Welcome to my new <strong>{data.site.siteMetadata.title}</strong>.
      </Text>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default HomePage;
