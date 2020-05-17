import React from "react"
import Tooltip from "./tooltip"
import styles from "./inputText.module.css"

export const InlineInputText = ({
  className,
  type,
  value,
  id,
  name,
  required,
  placeholder,
}) => (
  <input
    type={type}
    value={value}
    name={name}
    id={id ? id : name}
    className={className ? `${className} ${styles.inline}` : styles.inline}
    required={required}
    placeholder={placeholder}
  />
)

const InputText = ({
  className,
  type,
  value,
  name,
  id,
  required,
  placeholder,
  labelBody,
  tooltip,
}) => (
  <div
    className={className ? `${className} ${styles.fieldset}` : styles.fieldset}
  >
    {labelBody && <label htmlFor={id ? id : name}>{labelBody}</label>}
    {tooltip && <Tooltip className={styles.tooltip}>{tooltip}</Tooltip>}
    <input
      type={type}
      value={value}
      name={name}
      id={id ? id : name}
      className={styles.input}
      required={required}
      placeholder={placeholder}
    />
  </div>
)

export default InputText
