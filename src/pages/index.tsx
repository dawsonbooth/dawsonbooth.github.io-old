import * as React from "react";

import { Link, graphql } from "gatsby";
import { Heading, Text } from "theme-ui";

import Layout from "../components/Layout";

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
    <Layout>
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
