import React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Floral from "../components/floral"
import Hero from "../components/hero"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Privacy Policy - AngelShot" />
    <Hero noImage>
      <Intro>Privacy Policy</Intro>
    </Hero>
    <Floral withHero>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vS5I_s12XVhb_eEx9AlSD33MLHXfqMSR3U3HyP2EVlWfZCoazxdcu5cpcPhOAcWU_OaoFyWRGTNfu12/pub?embedded=true"></iframe>
    </Floral>
  </Layout>
)
