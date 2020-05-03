import React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Hero from "../components/hero"
import { Card, CardBody, CardImage } from "../components/card"
import Cite from "../components/cite"
import Button from "../components/button"

import styles from "./programs.module.css"

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
    <section className={styles.section}>
      <Card className={styles.card}>
        <CardImage
          srcset={["/images/community.png", "/images/community@2x.png"]}
          alt="WINGS Program"
        />
        <CardBody>
          <h2 className={`title ${styles.title}`}>WINGS Program</h2>
          <p className={`subheader ${styles.subheader}`}>
            The AngelShot WINGS Program works with communities to prevent sexual
            violence.
          </p>
          <Button>Join the Movement</Button>
        </CardBody>
      </Card>
      <Card className={styles.card}>
        <CardImage
          srcset={["/images/angelbot.png", "/images/angelbot@2x.png"]}
          alt="AngelBot"
        />
        <CardBody>
          <h2 className={`title ${styles.title}`}>AngelBot</h2>
          <p className={`subheader ${styles.subheader}`}>
            AngelBot is a free, mobile safety application that discreetly bails
            you out of bad situations.
          </p>
          <Button>Join the Beta</Button>
        </CardBody>
      </Card>
    </section>
  </Layout>
)
