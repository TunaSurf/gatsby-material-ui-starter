import React from "react";
import { Link } from "gatsby";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function SecondPage() {
  return (
    <Layout>
      <SEO title="Page two" />
      <Typography variant="h1">Hi from the second page</Typography>
      <Typography variant="body1">Welcome to page 2</Typography>
      <Link to="/">
        <Typography variant="body2">Go back to the homepage</Typography>
      </Link>
    </Layout>
  );
}
