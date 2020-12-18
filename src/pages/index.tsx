import * as React from "react";

import { Heading } from "theme-ui";

import Layout from "../components/layout";
import Link from "../components/Link";

import routes from "../routes";

const Home = () => {
  return (
    <Layout title="Home">
      <Heading as="h1" sx={{ fontSize: 36, textAlign: "center" }}>
        Hello world! I'm Dawson.
      </Heading>
      <Link to={routes.PROJECTS}>Go to Projects</Link>
    </Layout>
  );
};

export default Home;
