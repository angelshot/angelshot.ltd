import React from "react"
import Helmet from "react-helmet"
import Footer from "./footer"
import Header from "./header"
import MissionDonation from "./missionDonation"
import BetaSignupCTA from "./betaSignupCTA"

export default ({ children, location }) => (
  <>
    <Helmet
      defaultTitle="AngelShot | Engaging communities to help protect women."
      titleTemplate="%s – AngelShot"
    >
      <link rel="canonical" href="https://www.angelshot.ltd" />
      <meta name="referrer" content="origin" />
      <meta charSet="utf-8" />

      <meta
        name="description"
        content="AngelShot engages communities to help protect women. We provide tools and knowledge that empower women to safeguard themselves and encourage communities to act as havens for them."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="google-site-verification"
        content="o-IxUxONLoA45N5dPU-gMnVWZKq8R_qj45-Du27E8Tk"
      />
      <meta name="theme-color" content="#c5e3ee" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-touch-icon.png"
      />
      <link
        rel="shortcut icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="manifest.webmanifest" />
    </Helmet>
    <Header />
    {children}
    <MissionDonation />
    {(location && location.pathname.indexOf("programs/angelbot") > -1) || (
      <BetaSignupCTA />
    )}
    <Footer />
  </>
)
