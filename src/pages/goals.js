import React from "react"
import Floral from "../components/floral"
import Footer from "../components/footer"
import Header from "../components/header"
import Intro from "../components/intro"
import Cite from "../components/cite"
import Hero from "../components/hero"

import styles from "./goals.module.css"

export default ({ children }) => (
  <>
    <Header />
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
    <Floral withHero>
      <p>Sorry, but the page you were trying to view does not exist.</p>
    </Floral>
    <Footer />
  </>
)
