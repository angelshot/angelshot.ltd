import React from "react"
import styles from "./intro.module.css"

export default ({ children }) => (
  <div className={styles.intro}>
    <h1 className={styles.headline}>{children}</h1>
  </div>
)
