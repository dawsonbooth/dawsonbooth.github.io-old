import * as React from "react";

import { Heading, Text } from "rebass";

import Link from "../components/Link";
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

export default function ({ data }: IndexPageProps) {
  return (
    <Layout>
      <Heading>Hello world!</Heading>
      <Text>
        Welcome to my new <strong>{data.site.siteMetadata.title}</strong>.
      </Text>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
