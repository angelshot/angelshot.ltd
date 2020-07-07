import React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Hero from "../components/hero"
import Floral from "../components/floral"

import styles from "./volunteer-ty.module.css"

export default () => (
  <Layout>
    <Hero className={styles.hero}>
      <Intro
        quoteStyles={styles.quote}
        quote="Communities and countries and ultimately the world are only as strong as the health of their women."
        quoteAuthor="Michelle Obama"
      >
        Get Involved
      </Intro>
    </Hero>
    <Floral withHero className={styles.section}>
      <div>
        <h2 className="title">Thank you!</h2>
        <p>
          Thank you for expressing your interest in helping AngelShot Ltd.
          achieve our mission of providing tools and knowledge that empower
          women to safeguard themselves and encouraging communities to act as
          havens for them. You should be receiving a confirmation email shortly,
          please remember to add us to your address book.
        </p>
      </div>
    </Floral>
  </Layout>
)
