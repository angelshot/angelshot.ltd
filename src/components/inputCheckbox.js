import React from "react"
import styles from "./inputCheckbox.module.css"

const InputCheckbox = ({ value, name, required, labelBody }) => (  
  <div>
    <input type="checkbox" value={value} name={name} className={styles.inline} required={required} />
    <label htmlFor={name} className={styles.checkboxLabel}>{labelBody}</label>
  </div>
)

export default InputCheckbox
