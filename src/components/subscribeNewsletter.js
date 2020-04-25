import React from "react"
import NewsletterForm from "./newsletterForm"

import styles from "./subscribeNewsletter.module.css"

const SubscribeNewsletter = ({ style }) => (
  <div className={styles.subscribeNewsletter} style={style}>
    <h6 className={styles.subheader}>Subscribe to our newsletter</h6>
    <p>
      Stay up to date on the progress of our programs, and discover upcoming
      events and volunteer opportunities.
    </p>
    <NewsletterForm />
  </div>
)

export default SubscribeNewsletter
