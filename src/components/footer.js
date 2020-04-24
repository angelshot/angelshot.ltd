import React from "react"
import NewsletterForm from "./newsletterForm"
import MainNav from "./mainNav"
import SubNav from "./subNav"
import SocialNav from "./socialNav"

import styles from "./footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.grid}>
      <div className={styles.subscribeNewsletter}>
        <h6 className={styles.subheader}>Subscribe to our newsletter</h6>
        <p>
          Stay up to date on the progress of our programs, and discover upcoming
          events and volunteer opportunities.
        </p>
        <NewsletterForm />
      </div>
      <SocialNav />
      <MainNav />
      <SubNav />
    </div>

    <section className={styles.fine_print}>
      <div className={styles.container}>
        <p className={styles.status501c3}>
          AngelShot Ltd. is a registered 501(c)(3) nonprofit charitable
          organization.
        </p>
        <p className={styles.copyright}>&copy;2020 AngelShot Ltd.</p>
        <a href="#" className={styles.backToTop}>
          Back to Top
        </a>
      </div>
    </section>
  </footer>
)

export default Footer
