import React from "react"
import styles from "./inputText.module.css"

const InputText = ({ type, value, name, required, placeholder, labelBody, tooltip }) => (
  <div>
  {labelBody && 
    <label htmlFor={name}>{labelBody}</label>
  }
  {tooltip && 
    <span className={styles.tooltip}>{tooltip}</span>
  }
  <input
    type={type}
    value={value}
    name={name}
    className={styles.input}
    required={required}
    placeholder={placeholder}
  />
  </div>
)

export default InputText
