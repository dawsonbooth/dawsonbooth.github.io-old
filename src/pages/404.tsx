import * as React from "react";
import Layout from "../components/Layout";

import { Heading, Text } from "rebass";

const NotFoundPage = () => (
  <Layout>
    <Heading>NOT FOUND</Heading>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </Layout>
);

export default NotFoundPage;
