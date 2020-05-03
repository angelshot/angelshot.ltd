import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Intro from "../components/intro"
import Hero from "../components/hero"
import Floral from "../components/floral"
import Cite from "../components/cite"

import styles from "./programs.module.css"

export default ({ children }) => (
  <>
    <Header />
    <Hero className={styles.hero}>
      <Intro
        quoteStyles={styles.quote}
        quote="The greatness of a community is most accurately measured by the compassionate actions of its members."
        quoteAuthor="Coretta Scott King"
      >
        Our Programs
      </Intro>
      <Cite
        author="Toimetaja tõlkebüroo"
        authorURL="https://unsplash.com/@toimetaja?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        site="Unsplash"
        siteURL="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      />
    </Hero>
    <Footer />
  </>
)
