import React from "react"
import Nav from "./nav"

const Header = () => (
  <header>
    <div id="logo">
      <a href="https://www.angelshot.ltd"><img src="img/logo.png" alt="AngelShot Ltd."/></a>
    </div>
    <Nav/>
  </header>
)

export default Header