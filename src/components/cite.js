import React from "react"
import styles from "./cite.module.css"

const Cite = () => (
  <cite className={styles.cite}>
    Photo by{" "}
    <a
      href="https://unsplash.com/@gemmachuatran?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      target="_new"
    >
      Gemma Chua-Tran
    </a>{" "}
    on{" "}
    <a
      href="https://unsplash.com/collections/8969218/angelshot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      target="_new"
    >
      Unsplash
    </a>
  </cite>
)

export default Cite
