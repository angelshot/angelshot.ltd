import React from "react"
import { Link } from "gatsby"
import styles from "./socialNav.module.css"

const SocialNav = () => (
  <ul className={styles.socialNav}>
    <li>
      <Link to="/#" className={styles.icon_instagram}>
        Follow us on Instagram
      </Link>
    </li>
    <li>
      <Link to="/#" className={styles.icon_twitter}>
        Follow us on Twitter
      </Link>
    </li>
    <li>
      <Link to="/#" className={styles.icon_facebook}>
        Follow us on Facebook
      </Link>
    </li>
  </ul>
)

export default SocialNav
