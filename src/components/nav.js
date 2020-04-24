import React from "react"
import { Link } from "gatsby"
import NewsletterForm from "./newsletterForm"
import Button from "./Button"
import styles from "./nav.module.css"
import MenuToggle from "./menuToggle"

const Nav = () => (
  <>
    <MenuToggle />
    <nav className={styles.navigation} id="navigation">
      <ul className={styles.mainNav}>
        <li>
          <Link to="/about_us" className={styles.link}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/our_programs.html" className={styles.link}>
            Our Programs
          </Link>
        </li>
        <li className={styles.donateLarge}>
          <Button href="#donate">Make a Donation</Button>
        </li>
        <li className={styles.donateSmall}>
          <Button
            href="#donate"
            type="buttonWideAlt"
            onClick="document.getElementById('menu_toggle').checked=false;"
            className={styles.buttonWideAlt}
          >
            Make a Donation
          </Button>
        </li>
      </ul>
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
          <ul className={styles.subNav}>
            <li>
              <Link to="/#">Contact Us</Link>
            </li>
            <li>
              <Link to="/#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/#">Terms & Conditions</Link>
            </li>
          </ul>

          <ul className={styles.socialNav}>
            <li>
              <Link to="/#" className={styles.icon_instagram}>
                Follow us on Instagram
              </Link>
            </li>
            <li>
              <Link to="/#" className={styles.icon_twitter}>
                Follow us on Twitter
              </Link>
            </li>
            <li>
              <Link to="/#" className={styles.icon_facebook}>
                Follow us on Facebook
              </Link>
            </li>
          </ul>
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
