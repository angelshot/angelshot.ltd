import React from "react"
import styles from "./menuToggle.module.css"

const MenuToggle = () => (
  <input
    className={styles.menuToggle}
    id="menu_toggle"
    type="checkbox"
    //   onchange="
    // function freezeBody(e){
    //   if (e.checked) { document.body.classList.add('freeze') }
    //   else { document.body.classList.remove('freeze') }
    // } freezeBody(this);"
  />
)

export default MenuToggle
