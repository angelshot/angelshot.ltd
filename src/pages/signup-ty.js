import React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Hero from "../components/hero"
import Floral from "../components/floral"

import styles from "./signup-ty.module.css"

function getType() {
  const type = new URLSearchParams(window.location.search).get('type');

  switch (type) {
    case "angelbot":
      return <p>Thank you for signing up for the AngelBot Beta program. We'll be in touch with you shortly!</p>
    case "wings":
      return <p>Thank you for your interest in joining the AngelShot WINGS Program. We'll be in touch with you shortly!</p>
    case "newsletter":
      return <p>Thank you for subscribing to our newsletter. Keep an eye out for upcoming events and volunteer opportunities!</p>
    default:
      return <p>You're in! Thanks for signing up.</p>
  }
}

export default () => (
  <Layout>
    <Hero className={styles.hero}>
      <Intro
        quoteStyles={styles.quote}
        quote="The greatness of a community is most accurately measured by the compassionate actions of its members."
        quoteAuthor="Coretta Scott King"
      >
        Thank you!
      </Intro>
    </Hero>
    <Floral withHero className={styles.section}>      
      <div>        
        {getType()}
      </div>      
    </Floral>
  </Layout>
)
