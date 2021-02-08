import * as React from "react";
import Layout from "../components/layout";

import { Box, Heading, Text } from "theme-ui";

const NotFoundPage = () => (
  <Layout title="404">
    <Box p={3} sx={{ textAlign: "center" }}>
      <Heading as="h1" my={15}>
        NOT FOUND
      </Heading>
      <Text>You just hit a route that doesn't exist... the sadness.</Text>
    </Box>
  </Layout>
);

export default NotFoundPage;
