import React from "react"
import classNames from "classnames/bind"
import styles from "./floral.module.css"

var cx = classNames.bind(styles)

const Floral = ({ children, className, withHero }) => (
  <section className={cx(className, { withHero })}>{children}</section>
)

export default Floral
