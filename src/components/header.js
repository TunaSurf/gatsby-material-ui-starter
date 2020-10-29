import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function Header({ siteTitle }) {
  return (
    <AppBar
      position="static"
      style={{
        background: `rebeccapurple`,
      }}
    >
      <Container maxWidth="md">
        <StyledToolbar>
          <Typography variant="h5">
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </Typography>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

const StyledToolbar = styled(Toolbar)`
  padding: 0;
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
