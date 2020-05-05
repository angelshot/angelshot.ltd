import React from "react"
import styles from "./tooltip.module.css"

const Tooltip = ({ className, children }) => (
  <div
    className={className ? `${className} ${styles.tooltip}` : styles.tooltip}
  >
    <span className={styles.flyout}>{children}</span>
  </div>
)

export default Tooltip
