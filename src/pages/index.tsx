import * as React from "react";

import { Heading } from "theme-ui";

import Layout from "../components/layout";
import Link from "../components/Link";

import routes from "../routes";

const Home = () => (
  <Layout>
    <Heading as="h1" my={15}>
      Hello, World! I'm Dawson.
    </Heading>
    <Link to={routes.PROJECTS}>Go to Projects</Link>
  </Layout>
);

export default Home;
