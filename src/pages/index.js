import React from "react";
import { Link } from "gatsby";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Typography variant="h1">Hello</Typography>
      <Typography variant="body1">Welcome to your new Gatsby site.</Typography>
      <Typography variant="body1">Now go build something great.</Typography>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">
        <Typography variant="body2">Go to page 2</Typography>
      </Link>{" "}
    </Layout>
  );
}
