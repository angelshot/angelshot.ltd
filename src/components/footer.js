import React from "react"
import SubscribeNewsletter from "./subscribeNewsletter"
import MainNav from "./mainNav"
import SubNav from "./subNav"
import SocialNav from "./socialNav"
import FinePrint from "./finePrint"

import styles from "./footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.grid}>
      <SubscribeNewsletter style={{ gridArea: "1 / 1 / 3 / 2" }} />
      <SocialNav footer style={{ gridArea: "1 / 3 / 2 / 4" }} />
      <MainNav footer style={{ gridArea: "2 / 2 / 3 / 3" }} />
      <SubNav footer style={{ gridArea: "2 / 3 / 3 / 4" }} />
    </div>
    <FinePrint />
  </footer>
)

export default Footer
