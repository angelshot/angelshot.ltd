import React from "react"
import styles from "./inputCheckbox.module.css"

const InputCheckbox = ({ id, value, name, required, children, disabled }) => (
  <div className={styles.fieldset}>
    <input
      type="checkbox"
      id={id}
      value={value}
      name={name}
      className={styles.checkbox}
      required={required}
      disabled={disabled}
    />
    <label htmlFor={id} className={styles.checkboxLabel}>
      {children}
    </label>
  </div>
)

export default InputCheckbox
