import React from "react"
import styles from "./menuToggle.module.css"

class MenuToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    if (e.checked) {
      document.body.classList.add("freeze")
    } else {
      document.body.classList.remove("freeze")
    }
  }

  render() {
    return (
      <input
        className={styles.menuToggle}
        id="menu_toggle"
        type="checkbox"
        onChange={this.handleChange}
      />
    )
  }
}

export default MenuToggle
