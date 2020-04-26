import React from "react"
import { globalHistory } from "@reach/router"
import styles from "./menuToggle.module.css"

class MenuToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.historyUnsubscribe = globalHistory.listen(({ action }) => {
      if (action === "PUSH") {
        document.body.classList.remove("freeze")
        this.refs.toggle.checked = false
      }
    })
  }

  componentWillUnmount() {
    this.historyUnsubscribe()
  }

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
        ref="toggle"
        type="checkbox"
        onChange={this.handleChange}
      />
    )
  }
}

export default MenuToggle
