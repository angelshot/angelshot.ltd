import React from "react"
import classNames from "classnames/bind"
import styles from "./cta.module.css"

const cx = classNames.bind(styles)

const CTA = ({ tagName, children, alt, className }) =>
  React.createElement(
    tagName,
    { className: cx(className, alt === false ? styles.cta : styles.cta2) },
    children
  )

CTA.defaultProps = {
  tagName: "div",
  alt: false,
}

export default CTA
