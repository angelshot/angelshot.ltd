import React from "react"
import Floral from "../components/floral"
import Footer from "../components/footer"
import Header from "../components/header"
import Intro from "../components/intro"
import styles from "./goals.module.css"

export default ({ children }) => (
  <>
    <Header />
    <Intro>Our Goals</Intro>
    <Floral>
      <p>Sorry, but the page you were trying to view does not exist.</p>
    </Floral>
    <Footer />
  </>
)
