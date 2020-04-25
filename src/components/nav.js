import React from "react"
import MainNav from "./mainNav"
import MenuToggle from "./menuToggle"
import NewsletterForm from "./newsletterForm"
import SocialNav from "./socialNav"
import SubNav from "./subNav"

import styles from "./nav.module.css"

const Nav = () => (
  <>
    <MenuToggle />
    <nav className={styles.navigation} id="navigation">
      <MainNav />
      <section className={styles.mobile}>
        <div>
          <div className={styles.subscribeNewsletter}>
            <h6 className={styles.subheader}>Subscribe to our newsletter</h6>
            <p>
              Stay up to date on the progress of our programs, and discover
              upcoming events and volunteer opportunities.
            </p>
            <NewsletterForm />
          </div>
          <SubNav />
          <SocialNav />
        </div>
        <div>
          <p className={styles.status501c3}>
            AngelShot Ltd. is a registered 501(c)(3) nonprofit charitable
            organization.
          </p>
          <p className={styles.copyright}>&copy;2020 AngelShot Ltd.</p>
        </div>
      </section>
    </nav>
  </>
)

export default Nav
