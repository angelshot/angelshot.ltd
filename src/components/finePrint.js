import React from "react"
import styles from "./finePrint.module.css"

const FinePrint = () => (
  <section className={styles.fine_print}>
    <div className={styles.container}>
      <p className={styles.status501c3}>
        AngelShot Ltd. is a registered 501(c)(3) nonprofit charitable
        organization.
      </p>
      <p className={styles.copyright}>&copy;2020 AngelShot Ltd.</p>
      <a href="#top" className={styles.backToTop}>
        Back to Top
      </a>
    </div>
  </section>
)

export default FinePrint
