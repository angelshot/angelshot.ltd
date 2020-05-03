import React from "react"
import Layout from "../../components/layout"
import Intro from "../../components/intro"
import Hero from "../../components/hero"
import Cite from "../../components/cite"
import Floral from "../../components/floral"

import styles from "./wings.module.css"

export default ({ children }) => (
  <Layout>
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
    <Floral withHero className={styles.section}>
      hi
    </Floral>
  </Layout>
)
