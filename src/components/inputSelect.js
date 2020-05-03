import React from "react"

const InputSelect = ({ name, required, options, labelBody }) => (
  <div>
  {labelBody && 
    <label htmlFor={name}>{labelBody}</label>
  }  
  <select name={name} required={required}>
    {options.map((value) => {
      return <option value={value}>{value}</option>
    })
    }
  </select>    
  />
  </div>
)

export default InputSelect
