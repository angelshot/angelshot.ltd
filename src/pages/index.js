import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Floral from "../components/floral"
import SectionHeader from "../components/sectionHeader"
import Button from "../components/button"
import { Card } from "../components/card"
import Cite from "../components/cite"
import SEO from "../components/seo"

import styles from "./index.module.css"

const Home = () => (
  <Layout>
    <SEO
      title="AngelShot | Safety should be FREE."
      description="AngelShot is a 501(c)(3) charitable organization on a mission to provide tools and knowledge that empower women to safeguard themselves and encourage communities to act as havens for them."
    />
    <Hero className={styles.hero}>
      <Intro className={styles.intro}>
        Safety should be
        <br />
        <span className={styles.madlib}>FREE</span>
        ____________.
      </Intro>
      <Cite
        author="Josh Howard"
        authorURL="https://unsplash.com/@thejoshhoward?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        site="Unsplash"
        siteURL="https://unsplash.com/@thejoshhoward?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      />
    </Hero>
    <section id="home">
      <div className={styles.tagline}>
        <span>
          Together, we can <strong>end the social and cultural norms</strong>{" "}
          that underlie the acceptance of sexual violence{" "}
          <strong>against women.</strong>
        </span>
      </div>
      <div className={styles.cards}>
        <Card className={styles.card}>
          <div className={styles.copy}>
            <picture className={styles.icon}>
              <source
                media="(max-width: 1023px)"
                srcSet="/images/angelbot.png, /images/angelbot@2x.png 2x"
              />
              <img src="/images/angelbot.png" alt="AngelBot" />
            </picture>
            <h3 className={`subheader ${styles.subheader}`}>
              Keep an Angel in <span className="nowrap">your pocket.</span>
            </h3>
            <p>
              <strong>AngelBot</strong> is a free, mobile safety application
              that discreetly bails you out of bad situations.
            </p>
            <p>
              Do you want to help improve the future of women's safety? Sign up
              to be a part of the AngelBot Beta program!
            </p>
          </div>
          <Button href="/programs/angelbot" className={styles.button}>
            Get your invite
          </Button>
        </Card>

        <Card className={styles.card}>
          <div className={styles.copy}>
            <picture className={styles.icon}>
              <source
                media="(max-width: 1023px)"
                srcSet="/images/logo-wings.png, /images/logo-wings@2x.png 2x"
              />
              <img src="/images/logo-wings.png" alt="WINGS" />
            </picture>
            <h3 className={`subheader ${styles.subheader}`}>
              Make an impact. <span className="nowrap">Get involved.</span>
            </h3>
            <p>
              You can make a difference to improve the safety of women
              everywhere!
            </p>
            <p>
              By volunteering your time, there are many ways you can help
              further our mission to engage communities and increase
              accountability.
            </p>
          </div>
          <Button href="/get-involved" className={styles.button}>
            Join the movement
          </Button>
        </Card>
      </div>
      <Floral withHero className={styles.ourGoals}>
        <SectionHeader className={styles.sectionHeader}>
          Our Goals
        </SectionHeader>
        <section>
          <article>
            <h3 className="subheader2">
              Increase community engagement & accountability
            </h3>
            <p>
              The AngelShot <strong>WINGS Program</strong> will reinforce social
              norms that protect against sexual violence by working with schools
              and local businesses to achieve our mission of{" "}
              <strong>creating safe environments</strong> by championing
              transparency and accountability.
            </p>
            <Button
              href="/about-us#community_engagement"
              buttonType="inline"
              className="learnMore"
            >
              Learn more
            </Button>
          </article>
          <article>
            <h3 className="subheader2">
              Prevent incidents and encourage victims to seek help
            </h3>
            <p>
              AngelShot's <strong>knowledge-base</strong> will arm an individual
              with the information and knowledge to recognize when they’re in a
              potentially dangerous situation, and will{" "}
              <strong>
                provide them with the methodology to help themselves
              </strong>{" "}
              get out of it.
            </p>
            <Button
              href="/about-us#seek_help"
              className="learnMore"
              buttonType="inline"
            >
              Learn more
            </Button>
          </article>
          <article>
            <h3 className="subheader2">
              Prevent violence by ending "Rape Culture"
            </h3>
            <p>
              AngelShot will provide <strong>educational resources</strong> that
              will compel our society to shift its mindset on the unacceptable
              behaviors that perpetuate rape culture. Through shared stories and
              experiences, we <strong>create an outlet</strong> for those who
              have been a victim of sexual violence.
            </p>
            <Button
              href="/about-us#prevent_violence"
              className="learnMore"
              buttonType="inline"
            >
              Learn more
            </Button>
          </article>
        </section>
      </Floral>
    </section>
  </Layout>
)

export default Home
