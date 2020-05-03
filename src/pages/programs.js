import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Intro from "../components/intro"
import Hero from "../components/hero"
import Floral from "../components/floral"

import styles from "./programs.module.css"

export default ({ children }) => (
  <>
    <Header />
    <Hero noImage>
      <Intro>Our Programs</Intro>
    </Hero>
    <Floral withHero className={styles.programs}>
      <p>Meep</p>
    </Floral>
    <Footer />
  </>
)
