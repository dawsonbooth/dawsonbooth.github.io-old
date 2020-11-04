import * as React from "react";

import { Link } from "gatsby";

import { Heading, Text } from "theme-ui";

import Layout from "../components/Layout";

const SecondPage = () => (
  <Layout>
    <Heading>Hi from the second page</Heading>
    <Text>Welcome to page 2</Text>
    <Link to="/">Go back to the home page</Link>
  </Layout>
);

export default SecondPage;
