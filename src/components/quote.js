import React from "react"
import classNames from "classnames/bind"
import styles from "./quote.module.css"

const cx = classNames.bind(styles)

export default ({ children, className, author }) => (
  <blockquote className={cx(className, styles.quote)}>
    {children}
    {author && <div className={styles.author}>– {author}</div>}
  </blockquote>
)
