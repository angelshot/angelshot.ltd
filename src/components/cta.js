import React from "react"

const CTA = ({ tagName, children }) =>
  React.createElement(tagName, { className: "cta" }, children)

CTA.defaultProps = {
  tagName: "div",
}

export default CTA
