import React from "react"
import Layout from "../components/layout"

import "./index.css"

const Home = () => (
  <Layout>
    <section id="home">
      <div id="intro">
        <div class="inset">
          <h1>
            Engaging communities
            <br /> to help protect women.
          </h1>
        </div>
        <cite>
          Photo by{" "}
          <a
            href="https://unsplash.com/@gemmachuatran?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_new"
          >
            Gemma Chua-Tran
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/collections/8969218/angelshot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_new"
          >
            Unsplash
          </a>
        </cite>
      </div>
      <div id="our_goals" class="sectionContainer withHero floral">
        <h2 class="sectionHeader">
          <span>Our Goals</span>
        </h2>
        <section>
          <article>
            <h3 class="subheader icon_heart">
              Increase community engagement & accountability
            </h3>
            <p>
              The AngelShot <strong>WINGS Program</strong> will reinforce social
              norms that protect against sexual violence by working with schools
              and local businesses to achieve our mission of{" "}
              <strong>creating safe environments</strong> by championing
              transparency and accountability.
            </p>
            <a href="#" class="learnMore">
              Learn more
            </a>
          </article>
          <article>
            <h3 class="subheader icon_person">
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
            <a href="#" class="learnMore">
              Learn more
            </a>
          </article>
          <article>
            <h3 class="subheader icon_earth">
              Prevent violence by ending "Rape Culture"
            </h3>
            <p>
              AngelShot will provide <strong>educational resources</strong> that
              will compel our society to shift its mindset on the unacceptable
              behaviors that perpetuate rape culture. Through shared stories and
              experiences, we <strong>create an outlet</strong> for those who
              have been a victim of sexual violence.
            </p>
            <a href="#" class="learnMore">
              Learn more
            </a>
          </article>
        </section>
      </div>
    </section>
  </Layout>
)

export default Home
