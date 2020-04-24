import React from "react"
import { Link } from "gatsby"
import styles from "./subNav.module.css"

const SubNav = (footer) => (
  <ul className={footer ? styles.subNavFooter : styles.subNav}>
    <li>
      <Link to="/#">Contact Us</Link>
    </li>
    <li>
      <Link to="/#">Privacy Policy</Link>
    </li>
    <li>
      <Link to="/terms">Terms &amp; Conditions</Link>
    </li>
  </ul>
)

export default SubNav
