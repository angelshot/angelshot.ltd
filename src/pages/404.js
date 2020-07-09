import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/footer"
import Header from "../components/header"
import Intro from "../components/intro"
import Hero from "../components/hero"
import Floral from "../components/floral"

import styles from "./404.module.css"

export default ({ children }) => (
  <>
    <Helmet>
      <title>:Page not found</title>
    </Helmet>
    <Header />
    <Hero noImage>
      <Intro>Page not found</Intro>
    </Hero>
    <Floral withHero className={styles.error404}>
      <p>Sorry, but the page you were trying to view does not exist.</p>
    </Floral>
    <Footer />
  </>
)
