import React from "react"
import styles from "./menuToggle.module.css"

class MenuToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  // TODO: fix this
  handleChange(e) {
    if (e.target.checked) {
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
