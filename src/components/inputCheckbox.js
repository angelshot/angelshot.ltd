import React from "react"
import styles from "./inputCheckbox.module.css"

const InputCheckbox = ({ value, name, required, children, disabled }) => (
  <div className={styles.fieldset}>
    <input
      type="checkbox"
      id={name}
      value={value}
      name={name}
      className={styles.checkbox}
      required={required}
      disabled={disabled}
    />
    <label htmlFor={name} className={styles.checkboxLabel}>
      {children}
    </label>
  </div>
)

export default InputCheckbox
