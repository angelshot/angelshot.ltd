import React from "react"
import classNames from "classnames/bind"
import styles from "./card.module.css"

const cx = classNames.bind(styles)

const Card = ({ children, alt, id, className }) => (
  <div id={id} className={cx(className, alt ? styles.cardAlt : styles.card)}>
    {children}
  </div>
)

const CardBody = ({ children }) => (
  <div className={styles.cardBody}>{children}</div>
)

const CardImage = ({ srcset, alt, attribution }) => (
  <div className={styles.cardImage}>
    <picture>
      <source
        media="(max-width: 1023px)"
        srcSet={`${srcset[0]}, ${srcset[1]} 2x`}
      />
      <img src={srcset[0]} alt={alt} />
    </picture>
  </div>
)

export { Card, CardBody, CardImage }
