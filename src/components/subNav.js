import React from "react"
import { Link } from "gatsby"
import styles from "./subNav.module.css"

const SubNav = ({ footer, style }) => (
  <ul
    className={footer ? styles.subNavFooter : styles.subNav}
    style={footer ? style : null}
  >
    <li>
      <Link to="/contact">Contact Us</Link>
    </li>
    <li>
      <Link to="/privacy">Privacy Policy</Link>
    </li>
    <li>
      <Link to="/terms">Terms &amp; Conditions</Link>
    </li>
  </ul>
)

export default SubNav
