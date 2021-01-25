import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Floral from "../components/floral"
import Hero from "../components/hero"

export default () => (
  <Layout>
    <Helmet>
      <title>EULA</title>
    </Helmet>
    <Floral withHero>
      <iframe height="2500" src="https://docs.google.com/document/d/e/2PACX-1vSfdPxcP2gd9fJHX-CrZHXHNRE6l137pypDr154I0f1B5w5BUCjPVLbt7qYWLPKF_z-t7TO2y44mWpz/pub?embedded=true"></iframe>
    </Floral>
  </Layout>
)
