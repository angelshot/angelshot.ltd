import React from "react"
import CTA from "./cta"
import Button from "./button"
import styles from "./betaSignupCTA.module.css"

const BetaSignupCTA = () => (
  <div className={styles.getApp}>
    <CTA tagName="h2" alt>
      Ever needed an out? <span className="nowrap">Get an Angel.</span>
    </CTA>
    <p>
      Discreetly bails you out of bad dates, rides, and everything else.&trade;
    </p>
    <Button type="button2" href="/angelbot">
      Join the beta
    </Button>
  </div>
)

export default BetaSignupCTA
