import React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Cite from "../components/cite"
import Hero from "../components/hero"

import styles from "./goals.module.css"

export default ({ children }) => (
  <Layout>
    <Hero className={styles.hero}>
      <Intro
        quoteStyles={styles.quote}
        quote="The goal of sexual violence prevention is to stop it from happening in
        the first place."
      >
        Our Goals
      </Intro>
      <Cite />
    </Hero>
  </Layout>
)
