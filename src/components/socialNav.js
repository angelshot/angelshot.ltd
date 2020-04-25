import React from "react"
import { Link } from "gatsby"
import styles from "./socialNav.module.css"

const SocialNav = ({ footer, style }) => (
  <ul
    className={footer ? styles.socialNavFooter : styles.socialNav}
    style={footer ? style : null}
  >
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
