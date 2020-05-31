import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Floral from "../components/floral"
import SectionHeader from "../components/sectionHeader"

import styles from "./index.module.css"

const Home = () => (
  <Layout>
    <Hero className={styles.hero}>
      <Intro>
        Engaging communities
        <br /> to help protect women.
      </Intro>
    </Hero>
    <section id="home">
      <Floral withHero className={styles.ourGoals}>
        <SectionHeader className={styles.sectionHeader}>
          Our Goals
        </SectionHeader>
        <section>
          <article>
            <h3 className={`subheader ${styles.icon_heart}`}>
              Increase community engagement & accountability
            </h3>
            <p>
              The AngelShot <strong>WINGS Program</strong> will reinforce social
              norms that protect against sexual violence by working with schools
              and local businesses to achieve our mission of{" "}
              <strong>creating safe environments</strong> by championing
              transparency and accountability.
            </p>
            <Link to="/about-us#community_engagement" className="learnMore">
              Learn more
            </Link>
          </article>
          <article>
            <h3 className={`subheader ${styles.icon_person}`}>
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
            <Link to="/about-us#seek_help" className="learnMore">
              Learn more
            </Link>
          </article>
          <article>
            <h3 className={`subheader ${styles.icon_earth}`}>
              Prevent violence by ending "Rape Culture"
            </h3>
            <p>
              AngelShot will provide <strong>educational resources</strong> that
              will compel our society to shift its mindset on the unacceptable
              behaviors that perpetuate rape culture. Through shared stories and
              experiences, we <strong>create an outlet</strong> for those who
              have been a victim of sexual violence.
            </p>
            <Link to="/about-us#prevent_violence" className="learnMore">
              Learn more
            </Link>
          </article>
        </section>
      </Floral>
    </section>
  </Layout>
)

export default Home
