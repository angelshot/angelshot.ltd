import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import styles from "./header.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Link to="/">
        <img src="/images/logo.png" alt="AngelShot Ltd." />
      </Link>
    </div>
    <Nav />
  </header>
)

export default Header
