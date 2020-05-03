import React from "react"
import { Link } from "gatsby"
import Button from "./button"

import styles from "./mainNav.module.css"

const MainNav = ({ footer, style }) => {
  return (
    <ul
      className={footer ? styles.mainNavFooter : styles.mainNavHeader}
      style={footer ? style : null}
    >
      <li className={styles.homeLink}>
        <Link to="/" className={styles.link} activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about_us" className={styles.link} activeClassName="active">
          About Us
        </Link>
      </li>
      <li>
        <Link to="/programs" className={styles.link} activeClassName="active">
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
