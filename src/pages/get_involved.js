import React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Hero from "../components/hero"
import Cite from "../components/cite"
import Floral from "../components/floral"
// import Button from "../components/button"
// import InputCheckbox from "../components/inputCheckbox"
// import InputText, { InlineInputText } from "../components/inputText"

import styles from "./get_involved.module.css"

export default () => (
  <Layout>
    <Hero className={styles.hero}>
      <Intro quoteStyles={styles.quote} quote="XXX" quoteAuthor="XXX">
        Get Involved
      </Intro>
      <Cite
        author="Toimetaja tõlkebüroo"
        authorURL="https://unsplash.com/@toimetaja?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        site="Unsplash"
        siteURL="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      />
    </Hero>
    <Floral withHero className={styles.section}>
      <section className={styles.intro}>
        <h2 className="title">Volunteer Opportunities</h2>
        <p>
          Thank you for your interest in helping AngelShot Ltd achieve our
          mission of providing tools and knowledge that empower women to
          safeguard themselves and encouraging communities to act as havens for
          them. As a small and mighty team, we could use your expertise in the
          following areas:
        </p>
        <h3 className="subheader">Technology</h3>
        <p>
          We are currently accepting engineering volunteers to work on the
          AngelBot Beta and our website. Our stack consists of NodeJS, GCP,
          DialogFlow, Docker, and Gatsby.js. You will be working on features
          such as website updates, user management, privacy & security, and
          improving upon our infrastructure.
        </p>
        <h3 className="subheader">Creative & User Experience</h3>
        <p>
          We are looking for copywriters and user experience designers to help
          refine the dialog within AngelBot, create newsletter templates,
          fundraising campaigns, and social media content.
        </p>
        <h3 className="subheader">Outreach & Fundraising</h3>
        <p>
          As a non-profit, grants and donations are our main sources of funding.
          We are seeking volunteers who can help us organize fundraising
          campaigns, and apply for grants.
        </p>
        <h3 className="subheader">Other</h3>
        <p>
          As a designated 501(c)3 organization, we welcome any pro-bono
          professional services such as legal and bookkeeping.
        </p>
      </section>
      <section className={styles.form}>FORM</section>
    </Floral>
  </Layout>
)
