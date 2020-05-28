import React from "react"
import styles from "./socialNav.module.css"

const SocialNav = ({ footer, style }) => (
  <ul
    className={footer ? styles.socialNavFooter : styles.socialNav}
    style={footer ? style : null}
  >
    <li>
      <a
        href="https://twitter.com/AngelShot_ltd"
        className={styles.icon_twitter}
      >
        Follow us on Twitter
      </a>
    </li>
    <li>
      <a
        href="https://facebook.com/angelshot.ltd"
        target="_new"
        className={styles.icon_facebook}
      >
        Follow us on Facebook
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/angelshot_ltd/"
        target="_new"
        className={styles.icon_instagram}
      >
        Follow us on Instagram
      </a>
    </li>
  </ul>
)

export default SocialNav
