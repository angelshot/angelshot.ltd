import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Intro from "../components/intro"
import Floral from "../components/floral"

import styles from "./404.module.css"

export default ({ children }) => (
  <>
    <Header />
    <Intro>Page not found</Intro>
    <Floral className={styles.error404}>
      <p>Sorry, but the page you were trying to view does not exist.</p>
    </Floral>
    <Footer />
    {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-158909295-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-158909295-1');
    </script> */}
  </>
)
