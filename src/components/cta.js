import React from "react"
import styles from "./cta.module.css"

const CTA = ({ tagName, children, alt }) =>
  React.createElement(
    tagName,
    { className: alt === false ? styles.cta : styles.cta2 },
    children
  )

CTA.defaultProps = {
  tagName: "div",
  alt: false,
}

export default CTA
