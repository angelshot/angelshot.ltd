import React from "react"
import classNames from "classnames/bind"
import styles from "./button.module.css"

const cx = classNames.bind(styles)

const Button = ({ className, buttonType, tagName, children, href, type }) =>
  React.createElement(
    tagName,
    {
      className: cx(
        className,
        buttonType ? styles[`${buttonType}`] : styles.button
      ),
      href,
      type,
    },
    children
  )

Button.defaultProps = {
  tagName: "a",
}

export default Button
