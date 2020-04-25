import React from "react"
import styles from "./inputButton.module.css"

const InputButton = ({ type, value, name }) => (
  <input type={type} value={value} name={name} className={styles.inline} />
)

export default InputButton
