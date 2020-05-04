import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Intro from "../../components/intro"
import Hero from "../../components/hero"
import Cite from "../../components/cite"
import Floral from "../../components/floral"
import Button from "../../components/button"
import InputCheckbox from "../../components/inputCheckbox"
import InputText from "../../components/inputText"

import styles from "./wings.module.css"

export default () => (
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
      <section className={styles.intro}>
        <h2 className="title">WINGS Program</h2>
        <p>
          Join the AngelShot WINGS Program as either an{" "}
          <a href="#ambassador">Ambassador</a> or <a href="#haven">Haven</a>.
        </p>
      </section>
      <section className={styles.form}>
        <form
          action="https://ltd.us4.list-manage.com/subscribe/post"
          method="POST"
        >
          <h3 className="subtitle">Join the Movement</h3>
          <input type="hidden" name="u" value="091175bb199db49734caae8f1" />
          <input type="hidden" name="id" value="634f908f1b" />
          <input type="hidden" name="FORMNAME" value="angelbot" />
          <h4 className="subheader2">Required fields:</h4>
          <InputText
            type="tel"
            name="PHONE"
            placeholder="Phone number"
            required
            labelBody="Phone number"
            tooltip="Used to add you to Angel's contacts"
          />
          <InputText
            type="email"
            name="EMAIL"
            placeholder="Email"
            required
            labelBody="Email"
          />
          <InputCheckbox
            type="checkbox"
            value="1"
            name="group[69988][1]"
            id="mce-group[69988]-69988-0"
            labelBody="Becoming an Ambassador"
          />
          <InputCheckbox
            type="checkbox"
            value="2"
            name="group[69988][2]"
            id="mce-group[69988]-69988-1"
            labelBody="Becoming a Haven"
          />
          <InputCheckbox
            type="checkbox"
            value="8"
            name="group[69988][8]"
            id="mce-group[69988]-69988-2"
            labelBody="Other"
          />
          <Button type="button" tagName="button" children="Join the Movement" />
        </form>
        <p>
          <strong>Interested in becoming a tester?</strong> Sign up for the{" "}
          <a href="/program/angelbot">AngelBot Beta Program</a>.
        </p>
      </section>
      <article id="ambassador" className={styles.ambassador}>
        <h4 className="subheader">Ambassador</h4>
        <p className="secondaryBody">
          Join our ambassador program and become an advocate for women’s safety
          in your community. Spread awareness by teaching women how to be
          vigilant and encourage them to speak up. Educate the community on how
          to recognize when someone is in need of help.
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
      <article id="haven" className={styles.haven}>
        <h4 className="subheader">Haven</h4>
        <p className="secondaryBody">
          Positive change begins with you! Transform your business into a haven.
          It is a place where women know they will be safe, because you and your
          staff have been trained to recognize and intervene when someone is on
          a potentially dangerous date.
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
      <article className={styles.events}>
        <h4 className="subheader">Events</h4>
        <p>
          Angelshot Ambassadors and volunteers work with Havens and other
          partner organizations and event planners to organize, host and
          participate in events.
        </p>
        <ul>
          <li>
            Organize, host and participate in events in line with our mission.
            <ul>
              <li>Participate in fairs - campus, community, etc</li>
            </ul>
          </li>
          <li>
            Participate in events supporting or opposing a policy issue in
            alignment with our mission such as rallies, marches, parades
          </li>
          <li>
            Host personal safety-related workshops to share knowledge about our
            tools, Ambassador Program, and available resources
          </li>
        </ul>
      </article>
    </Floral>
  </Layout>
)
