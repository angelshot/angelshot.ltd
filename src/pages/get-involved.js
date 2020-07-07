import React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Hero from "../components/hero"
import Floral from "../components/floral"
import Button from "../components/button"
import { Card } from "../components/card"

import styles from "./get-involved.module.css"

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
      <h2 className="title">How you can help</h2>
      <p>
        You can make a real impact to improve the safety of women everywhere!
        <br />
        By volunteering your time, there are many ways you can help further our
        cause.
      </p>
      <Card>
        <h3 className="subheader">Become a donor</h3>
        <img src="/icons/noun_Donate_29964-modified-color.svg" />
        <p>
          With your donation, you will help fund the{" "}
          <strong>development of new tools and programs</strong> that can help
          prevent sexual harassment and violence via community engagement and
          accountability.
        </p>
        <Button href="#donate">Donate today</Button>
      </Card>
    </Floral>
  </Layout>
)
