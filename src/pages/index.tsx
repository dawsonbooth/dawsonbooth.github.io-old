import * as React from "react";

import { graphql } from "gatsby";

import { Heading, Text } from "theme-ui";

import Layout from "../components/layout";
import Link from "../components/Link";

import routes from "../routes";

interface HomeProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const Home = ({ data }: HomeProps) => {
  return (
    <Layout title="Home">
      <Heading>Hello world!</Heading>
      <Text>
        Welcome to my new <strong>{data.site.siteMetadata.title}</strong>.
      </Text>
      <Link to={routes.PROJECTS}>Go to Projects</Link>
    </Layout>
  );
};

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Home;
