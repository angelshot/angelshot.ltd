import React from "react"
import classNames from "classnames/bind"
import Quote from "../components/quote"
import styles from "./intro.module.css"

const cx = classNames.bind(styles)

export default ({ children, quote, quoteStyles, quoteAuthor }) => (
  <div className={styles.intro}>
    <h1 className={styles.headline}>{children}</h1>
    {quote && (
      <Quote className={cx(styles.quote, quoteStyles)} author={quoteAuthor}>
        {quote}
      </Quote>
    )}
  </div>
)
