import React from "react"
import classNames from "classnames/bind"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Floral from "../components/floral"
import Cite from "../components/cite"

import styles from "./index.module.css"

var cx = classNames.bind(styles)

const Home = () => (
  <Layout>
    <section id="home">
      <div className={styles.intro}>
        <div className={styles.inset}>
          <h1>
            Engaging communities
            <br /> to help protect women.
          </h1>
        </div>
        <Cite />
      </div>
      <Floral withHero className={styles.ourGoals}>
        <h2 className={styles.sectionHeader}>
          <span>Our Goals</span>
        </h2>
        <section>
          <article>
            <h3 className={cx("subheader", "icon_heart")}>
              Increase community engagement & accountability
            </h3>
            <p>
              The AngelShot <strong>WINGS Program</strong> will reinforce social
              norms that protect against sexual violence by working with schools
              and local businesses to achieve our mission of{" "}
              <strong>creating safe environments</strong> by championing
              transparency and accountability.
            </p>
            <Link to="#" className="learnMore">
              Learn more
            </Link>
          </article>
          <article>
            <h3 className={cx("subheader", "icon_person")}>
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
            <Link to="#" className="learnMore">
              Learn more
            </Link>
          </article>
          <article>
            <h3 className={cx("subheader", "icon_earth")}>
              Prevent violence by ending "Rape Culture"
            </h3>
            <p>
              AngelShot will provide <strong>educational resources</strong> that
              will compel our society to shift its mindset on the unacceptable
              behaviors that perpetuate rape culture. Through shared stories and
              experiences, we <strong>create an outlet</strong> for those who
              have been a victim of sexual violence.
            </p>
            <Link to="#" className="learnMore">
              Learn more
            </Link>
          </article>
        </section>
      </Floral>
    </section>
  </Layout>
)

export default Home
