import React from "react"
import styles from "./button.module.css"

// href="#donate"
// className={styles.buttonWideAlt}
// onclick="document.getElementById('menu_toggle').checked=false;"

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
