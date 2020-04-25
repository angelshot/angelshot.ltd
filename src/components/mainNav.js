import React from "react"
import { Link } from "gatsby"
import Button from "./Button"

import styles from "./mainNav.module.css"

const MainNav = ({ footer, style }) => {
  return (
    <ul
      className={footer ? styles.mainNavFooter : styles.mainNavHeader}
      style={footer ? style : null}
    >
      <li>
        <Link to="/about_us" className={styles.link}>
          About Us
        </Link>
      </li>
      <li>
        <Link to="/our_programs.html" className={styles.link}>
          Our Programs
        </Link>
      </li>
      {!footer && (
        <>
          <li className={styles.donateLarge}>
            <Button href="#donate">Make a Donation</Button>
          </li>
          <li className={styles.donateSmall}>
            <Button
              href="#donate"
              type="buttonWideAlt"
              onClick="document.getElementById('menu_toggle').checked=false;"
              className={styles.buttonWideAlt}
            >
              Make a Donation
            </Button>
          </li>
        </>
      )}
    </ul>
  )
}

export default MainNav
