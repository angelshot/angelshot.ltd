import React from "react"
import styles from "./cite.module.css"

const Cite = ({ author, authorURL, site, siteURL }) => (
  <cite className={styles.cite}>
    Photo by{" "}
    <a href={authorURL} target="_new">
      {author}
    </a>{" "}
    on{" "}
    <a href={siteURL} target="_new">
      {site}
    </a>
  </cite>
)

export default Cite
