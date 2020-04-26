import React from "react"
import classNames from "classnames/bind"
import styles from "./floral.module.css"

const cx = classNames.bind(styles)

const Floral = ({ children, className, withHero, doubleSided }) => (
  <section className={cx(styles.floral, className, { withHero, doubleSided })}>
    {children}
  </section>
)

export default Floral
