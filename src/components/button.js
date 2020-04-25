import React from "react"
import styles from "./button.module.css"

const Button = ({ type, tagName, children, href }) =>
  React.createElement(
    tagName,
    { className: type ? styles[`${type}`] : styles.button, href },
    children
  )

Button.defaultProps = {
  tagName: "a",
}

export default Button
