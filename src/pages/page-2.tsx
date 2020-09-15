import * as React from "react";

import { Heading, Text } from "rebass";

import Link from "../components/Link";
import Layout from "../components/Layout";

const SecondPage = () => (
  <Layout>
    <Heading>Hi from the second page</Heading>
    <Text>Welcome to page 2</Text>
    <Link to="/">Go back to the home page</Link>
  </Layout>
);

export default SecondPage;
