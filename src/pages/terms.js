import React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Floral from "../components/floral"
import Hero from "../components/hero"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO
      title="Terms of Use - AngelShot"
    />
    <Hero noImage>
      <Intro>Terms of Use</Intro>
    </Hero>
    <Floral withHero>
      <iframe height="2500" src="https://docs.google.com/document/d/e/2PACX-1vRlt8dxhiREXUPOFgRk-OlylAVbEyrppYgd1kwC2cuE_h87L2a8MTxX90NCeusMwqO7UWxql3aR5kBE/pub?embedded=true"></iframe>
    </Floral>
  </Layout>
)
