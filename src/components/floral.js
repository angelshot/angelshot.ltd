import React from "react"
import classNames from "classnames/bind"
import styles from "./floral.module.css"

const Floral = ({ children, className, withHero }) => {
  var cx = classNames.bind(styles)
  let classes = cx({
    withHero,
    className,
  })
  console.log("classes", classes)
  return <section className={classes}>{children}</section>
}

export default Floral
