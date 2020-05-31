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
        <Link
          to="/about-us"
          className={styles.link}
          activeClassName="active"
          partiallyActive
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="/programs"
          className={styles.link}
          activeClassName="active"
          partiallyActive
        >
          Our Programs
        </Link>
      </li>
      <li>
        <Link
          to="/get-involved"
          className={styles.link}
          activeClassName="active"
          partiallyActive
        >
          Get Involved
        </Link>
      </li>
      {!footer && (
        <>
          <li className={styles.donateLarge}>
            <Button href="#donate">Make a Donation</Button>
          </li>
          <li className={styles.donateSmall}>
            <Button
              href="https://secure.givelively.org/donate/angelshot-ltd"
              type="buttonWideAlt"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("menu_toggle").checked = false
                document.body.classList.remove("freeze")
                window.scrollTo(0, document.getElementById("donate").offsetTop)
              }}
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
