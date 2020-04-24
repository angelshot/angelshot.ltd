import React from "react"
import styles from "./inputText.module.css"

const InputText = ({ type, value, name, required, placeholder }) => (
  <input
    type={type}
    value={value}
    name={name}
    className={styles.input}
    required={required}
    placeholder={placeholder}
  />
)

export default InputText
