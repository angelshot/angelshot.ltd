import React from "react"
import classNames from "classnames/bind"
import styles from "./sectionHeader.module.css"

const cx = classNames.bind(styles)

const SectionHeader = ({ tagName, className, children }) => {
  const text = <span>{children}</span>
  return React.createElement(
    tagName,
    { className: cx(className, styles.sectionHeader) },
    text
  )
}

SectionHeader.defaultProps = {
  tagName: "h2",
}

export default SectionHeader
