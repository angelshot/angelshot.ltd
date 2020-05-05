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
    {document.location.pathname.indexOf("programs/angelbot") > -1 || (
      <BetaSignupCTA />
    )}
    <Footer />
  </>
)
