import React, { Component } from "react"
import * as PropTypes from "prop-types"

class Html extends Component {
  render() {
    return (
      <html lang="en_US" {...this.props.htmlAttributes}>
        <head>{this.props.headComponents}</head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

export default Html
