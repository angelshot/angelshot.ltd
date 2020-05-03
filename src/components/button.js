import React from "react"
import styles from "./button.module.css"

const Button = ({ buttonType, tagName, children, href, type }) =>
  React.createElement(
    tagName,
    { className: buttonType ? styles[`${buttonType}`] : styles.button, href, type },
    children
  )

Button.defaultProps = {
  tagName: "a",
}

export default Button
