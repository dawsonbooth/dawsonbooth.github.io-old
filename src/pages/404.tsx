import * as React from "react";
import Layout from "../components/layout";

import { Heading, Text } from "theme-ui";

const NotFoundPage = () => (
  <Layout title="404">
    <Heading>NOT FOUND</Heading>
    <Text>You just hit a route that doesn't exist... the sadness.</Text>
  </Layout>
);

export default NotFoundPage;
