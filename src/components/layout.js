import React from "react"
import Footer from "./footer"
import Header from "./header"
import MissionDonation from "./missionDonation"
import BetaSignupCTA from "./betaSignupCTA"

export default ({ children }) => (
  <>
    <Header />
    {children}
    <MissionDonation />
    <BetaSignupCTA />
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
