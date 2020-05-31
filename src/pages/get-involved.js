import React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Hero from "../components/hero"
import Cite from "../components/cite"
import Floral from "../components/floral"
import Button from "../components/button"
import InputCheckbox from "../components/inputCheckbox"
import InputText, { InlineInputText } from "../components/inputText"

import styles from "./get-involved.module.css"

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
        <div>
          <h2 className="title">Available Opportunities</h2>
          <p>
            Thank you for your interest in helping AngelShot Ltd. achieve our
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
            such as website updates, user management, privacy &amp; security, and
            improving upon our infrastructure.
          </p>
          <h3 className="subheader">Creative &amp; User Experience</h3>
          <p>
            We are looking for copywriters and user experience designers to help
            refine the dialog within AngelBot, create newsletter templates,
            fundraising campaigns, and social media content.
          </p>
          <h3 className="subheader">Outreach &amp; Fundraising</h3>
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
        </div>
        <div className={styles.volunteerForm}>
          <form
          action="https://ltd.us4.list-manage.com/subscribe/post"
          method="POST"
        >
            <h3 className="subtitle">Volunteer with Us</h3>
            <input type="hidden" name="u" value="091175bb199db49734caae8f1" />
            <input type="hidden" name="id" value="869d816545" />            
            <h4 className={`subheader2 ${styles.subheader}`}>Required fields:</h4>
            <InputText
              type="text"
              name="NAME"
              placeholder="Name"
              required
              labelBody="Name"
            />
            <InputText
              type="email"
              name="EMAIL"
              placeholder="Email"
              required
              labelBody="Email"
            />
            <h4 className={`subheader2 ${styles.subheader}`}>
              I am interested in volunteering my services to:
            </h4>
            <InputCheckbox
              type="checkbox"
              value="crux"
              name="group[70176][1]"
              id="group_1"
            >
              Creative &amp; User Experience
            </InputCheckbox>
            <InputCheckbox
              type="checkbox"
              value="tech"
              name="group[70176][2]"
              id="group_2"
            >
              Technology
            </InputCheckbox>
            <InputCheckbox
              type="checkbox"
              value="outreach"
              name="group[70176][3]"
              id="group_3"
            >
              Outreach &amp; Fundraising
            </InputCheckbox>
            <InputCheckbox
              type="checkbox"
              value="other"
              name="group[70176][4]"
              id="group_4"
            >
              Other
              <InlineInputText type="text" name="OTHER" inline />
            </InputCheckbox>
            <Button
              className={styles.submit}
              buttonType="buttonWide"
              type="submit"
              tagName="button"
              children="Volunteer"
            />
          </form>
        </div>
    </Floral>
  </Layout>
)
