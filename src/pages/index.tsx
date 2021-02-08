import * as React from "react";

import { Box, Heading } from "theme-ui";

import Layout from "../components/layout";
import Link from "../components/Link";

import routes from "../routes";

const Home = () => (
  <Layout>
    <Box p={3} sx={{ textAlign: "center" }}>
      <Heading as="h1" my={15}>
        Hello, World! I'm Dawson.
      </Heading>
      <Link to={routes.PROJECTS}>Go to Projects</Link>
    </Box>
  </Layout>
);

export default Home;
