import React from "react"
import classNames from "classnames/bind"

import styles from "./hero.module.css"
const cx = classNames.bind(styles)

export default ({ children, className, noImage }) => (
  <div className={cx(className, styles.hero, { noImage })}>{children}</div>
)
