import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Hero from "../components/hero"
import Floral from "../components/floral"
import Button from "../components/button"
import { Card } from "../components/card"

import headerStyles from "./get-involved-header.module.css"
import pageStyles from "./get-involved.module.css"
let styles = {}
Object.assign(styles, headerStyles, pageStyles)

export default () => (
  <Layout>
    <Helmet>
      <title>Get Involved</title>
      <meta
        name="description"
        content="You can make a real impact to improve the safety of women everywhere! By volunteering your time, there are many ways you can help further our cause."
      />
    </Helmet>
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
      <div className={styles.cards}>
        <Card className={styles.card}>
          <h3 className={`subheader ${styles.subheader}`}>Become a donor</h3>
          <img
            className={styles.icon}
            src="/icons/noun_Donate_29964-modified-color.svg"
          />
          <p>
            With your donation, you will help fund the{" "}
            <strong>development of new tools and programs</strong> that can help
            prevent sexual harassment and violence via community engagement and
            accountability.
          </p>
          <Button href="#donate" className={styles.button}>
            Donate today
          </Button>
        </Card>
        <Card className={styles.card}>
          <h3 className={`subheader ${styles.subheader}`}>
            Love experimenting with new technology?
          </h3>
          <img
            className={styles.icon}
            src="/icons/noun_SMS_1564599-modified-color.svg"
          />
          <p>
            By becoming a beta tester, you’ll get a sneak peak at our newest
            features and be able to provide feedback on how we can improve the
            platform to <strong>put an Angel in everyone’s pocket</strong>.
          </p>
          <Button href="/programs/angelbot" className={styles.button}>
            Get your invite
          </Button>
        </Card>
        <Card className={styles.card}>
          <h3 className={`subheader ${styles.subheader}`}>Volunteer with us</h3>
          <img
            className={styles.icon}
            src="/icons/noun_teamwork_1671992-modified-color.svg"
          />
          <p>
            Join our team to make a big impact in your community. We have a wide
            range of opportunities with different commitment levels where you
            can
            <strong>flex your expertise and learn new skills</strong> with a
            shared sense of purpose.
          </p>
          <Button href="/get-involved/volunteer" className={styles.button}>
            Count me in
          </Button>
        </Card>
        <Card className={styles.card}>
          <h3 className={`subheader ${styles.subheader}`}>
            Start your own fundraiser
          </h3>
          <img
            className={styles.icon}
            src="/icons/noun_Gift_2103889-modified-color.svg"
          />
          <p>
            Have a birthday coming up? Tell friends and family to donate to your
            favorite cause. You can also use holidays like Thanksgiving or
            #GivingTuesday to <strong>encourage people to give</strong> to your
            campaign.
          </p>
          <Button
            href="https://secure.givelively.org/donate/angelshot-ltd/fundraisers/new"
            className={styles.button}
            target="_new"
          >
            Create my campaign
          </Button>
        </Card>
      </div>
    </Floral>
  </Layout>
)
