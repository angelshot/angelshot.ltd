import React from "react"
// import classNames from "classnames/bind"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Cite from "../components/cite"
import Hero from "../components/hero"
import {
  CardWithOverlay,
  Overlay,
  OverlayItem,
  Image,
  Title,
} from "../components/cardWithOverlay"
import styles from "./goals.module.css"

// const cx = classNames.bind(styles)

export default ({ children }) => (
  <Layout>
    <Hero className={styles.hero}>
      <Intro
        quoteStyles={styles.quote}
        quote="The goal of sexual violence prevention is to stop it from happening in
        the first place."
      >
        Our Goals
      </Intro>
      <Cite />
    </Hero>
    <CardWithOverlay>
      <Image
        srcset={[
          "/img/goal-community_engagement-small.png",
          "/img/goal-community_engagement-small@2x.png",
          "/img/goal-community_engagement-large.png",
          "/img/goal-community_engagement-large@2x.png",
        ]}
        alt="People at a food establishment"
      />
      <Title>Increase community engagement & accountability</Title>
      <p>
        Sexual violence affects everyone. According to the CDC, 1 in 3 women and
        1 in 4 men experienced sexual violence involving physical contact during
        their lifetimes. More than half of sexual assault incidents occurs while
        the victim is pursuing leisure activities away from home, and instances
        of rape within colleges are severely under-reported.{" "}
      </p>
      <h3 className="subheader2">THIS IS NOT OKAY.</h3>
      <p>
        The AngelShot WINGS Program will reinforce social norms that protect
        against sexual violence to achieve our mission of creating safe
        environments.
      </p>
      <p>
        Our Ambassadors work with local establishments, student councils and
        school administrators to identify and address sexual violence by
        defining policies on prevention and intervention within their
        communities.
      </p>
      <p>
        To be designated as Havens, local establishments and schools are asked
        to take a pledge of accountability and transparency — self-assessing
        their current environment when it comes to sexual violence prevention
        and taking actions to make it safe.
      </p>
      <Overlay>
        <OverlayItem>
          51% of student rape and sexual assault victimizations occurred while
          the victim was pursuing leisure activities away from home.
        </OverlayItem>
        <OverlayItem>
          89% of college campuses reported zero incidents of rape in 2016.
        </OverlayItem>
      </Overlay>
    </CardWithOverlay>
  </Layout>
)
