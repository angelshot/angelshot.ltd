import React from "react"
import GiveLivelyWidget from "./giveLivelyWidget"
import CTA from "./cta"
import styles from "./missionDonation.module.css"

const MissionDonation = () => (
  <section className={styles.mission}>
    <CTA tagName="blockquote">
      Our mission is to provide tools and knowledge that{" "}
      <strong>empower women</strong> to safeguard themselves and{" "}
      <strong>encourage communities</strong> to act as havens for them.
    </CTA>
    <GiveLivelyWidget />
  </section>
)

export default MissionDonation
