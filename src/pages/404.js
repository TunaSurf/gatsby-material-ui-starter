import React from "react";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Typography variant="h1">404: Not Found</Typography>
      <Typography variant="body1">
        You just hit a route that doesn&#39;t exist... the sadness.
      </Typography>
    </Layout>
  );
}
