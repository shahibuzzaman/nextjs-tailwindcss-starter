import React from "react";
import "../styles/globals.css";
import PropTypes from "prop-types";
import Layout from "../components/layout";

const _app = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

_app.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default _app;
