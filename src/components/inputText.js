import React from "react"
import styles from "./inputText.module.css"

export const InlineInputText = ({
  type,
  value,
  name,
  required,
  placeholder,
}) => (
  <input
    type={type}
    value={value}
    name={name}
    className={styles.inline}
    required={required}
    placeholder={placeholder}
  />
)

const InputText = ({
  type,
  value,
  name,
  required,
  placeholder,
  labelBody,
  tooltip,
}) => (
  <div>
    {labelBody && <label htmlFor={name}>{labelBody}</label>}
    {tooltip && <span className={styles.tooltip}>{tooltip}</span>}
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
