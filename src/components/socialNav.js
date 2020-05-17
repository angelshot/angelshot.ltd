import React from "react"
import styles from "./socialNav.module.css"

const SocialNav = ({ footer, style }) => (
  <ul
    className={footer ? styles.socialNavFooter : styles.socialNav}
    style={footer ? style : null}
  >
    <li>
      <a
        href="https://www.instagram.com/angel.shot.ltd/"
        target="_new"
        className={styles.icon_instagram}
      >
        Follow us on Instagram
      </a>
    </li>
    {/* <li>
      <a href="/#" className={styles.icon_twitter}>
        Follow us on Twitter
      </a>
    </li> */}
    <li>
      <a
        href="https://business.facebook.com/angelshot.ltd"
        target="_new"
        className={styles.icon_facebook}
      >
        Follow us on Facebook
      </a>
    </li>
  </ul>
)

export default SocialNav
