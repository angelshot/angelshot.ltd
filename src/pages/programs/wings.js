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
      <h2 className="title">WINGS Program</h2>
      <p>
        Join the AngelShot WINGS Program as either an{" "}
        <a href="#ambassador">Ambassador</a> or <a href="#haven">Haven</a>.
      </p>
      <h3 className="subtitle">Join the Movement</h3>
      <form></form>
      <p>
        <strong>Interested in becoming a tester?</strong> Sign up for the{" "}
        <a href="/program/angelbot">AngelBot Beta Program</a>.
      </p>
      <section className="programs">
        <article id="ambassador">
          <h4 className="subheader">Ambassador</h4>
          <p className="secondaryBody">
            Join our ambassador program and become an advocate for women’s
            safety in your community. Spread awareness by teaching women how to
            be vigilant and encourage them to speak up. Educate the community on
            how to recognize when someone is in need of help.
          </p>
          <h5 className="subheader2">Who are you?</h5>
          <ul>
            <li>
              Students enrolled in a University or College or members of a local
              community
            </li>
            <li>
              A desire to increase student safety and reduce violence against
              women within your community
            </li>
            <li>Not afraid to speak up against injustices</li>
            <li>Willing to engage with your community</li>
            <li>Looking to expand your leadership skills</li>
          </ul>
          <h5 className="subheader2">What will you do?</h5>
          <ul>
            <li>Organize, host and participate in events</li>
            <li>
              Community outreach
              <ul>
                <li>
                  Direct marketing
                  <ul>
                    <li>Flyers in bar and restaurant bathrooms</li>
                    <li>Temporary street art on campus</li>
                  </ul>
                </li>
                <li>
                  Outreach marketing
                  <ul>
                    <li>Orientation week</li>
                    <li>
                      Targeting sororities, women’s clubs, women’s studies
                      professors/groups
                    </li>
                  </ul>
                </li>
                <li>
                  Run and participate in social media awareness campaigns
                  <ul>
                    <li>TikTok</li>
                    <li>Instagram</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Contribute to the Knowledge Base{" "}
              <ul>
                <li>Blog post of events they run</li>
              </ul>
            </li>
            <li>Recruit and onboard local Havens</li>
            <li>Run surveys</li>
            <li>Recruit volunteers</li>
            <li>
              Attend quarterly meetings with the AngelShot Board of Directors
            </li>
          </ul>
        </article>
        <article id="haven">
          <h4 className="subheader">Haven</h4>
          <p className="secondaryBody">
            Positive change begins with you! Transform your business into a
            haven. It is a place where women know they will be safe, because you
            and your staff have been trained to recognize and intervene when
            someone is on a potentially dangerous date.
          </p>
          <h5 className="subheader2">What do you need to do?</h5>
          <ul>
            <li>Register as a Haven</li>
            <li>
              Put up signage designating your participation in the program
              <ul>
                <li>
                  Allow for distribution of program materials within your
                  establishment
                </li>
              </ul>
            </li>
            <li>
              Host or Sponsor events
              <ul>
                <li>Provide event space</li>
                <li>Volunteer setup/teardown assistance</li>
                <li>Donate money, goods or services </li>
                <li>Promote events</li>
              </ul>
            </li>
            <li>
              Community engagement{" "}
              <ul>
                <li>Participate in local events and workshops</li>
              </ul>
            </li>
            <li>
              (Future Goal) Provide assistance to AngelShot users
              <ul>
                <li>Code word signal</li>
                <li>Pre-arranged check-ins</li>
              </ul>
            </li>
          </ul>
          <h5 className="subheader2">What will you get in return?</h5>
          <ul>
            <li>Be listed as a go-to spot on the AngelShot website</li>
            <li>Increase/improve your reputation as a safe haven</li>
            <li>Increase Customer Loyalty</li>
            <li>Receive tax deduction on qualified donations</li>
          </ul>
        </article>
      </section>
    </Floral>
  </Layout>
)
