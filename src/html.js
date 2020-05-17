import React, { Component } from "react"
import * as PropTypes from "prop-types"

class Html extends Component {
  render() {
    return (
      <html lang="en_US" {...this.props.htmlAttributes}>
        <head>
          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />

          <title>AngelShot | Engaging communities to help protect women.</title>

          <meta
            name="description"
            content="AngelShot engages communities to help protect women. We provide tools and knowledge that empower women to safeguard themselves and encourage communities to act as havens for them."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="google-site-verification"
            content="o-IxUxONLoA45N5dPU-gMnVWZKq8R_qj45-Du27E8Tk"
          />
          <meta name="theme-color" content="#BECBDD" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicon/apple-touch-icon.png"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="32x32"
            href="favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="manifest.webmanifest" />

          {this.props.headComponents}
        </head>
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
