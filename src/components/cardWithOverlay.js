import React from "react"
import classNames from "classnames/bind"
import styles from "./cardWithOverlay.module.css"

const cx = classNames.bind(styles)

const CardWithOverlay = ({ children, alt, id, className }) => (
  <div
    id={id}
    className={cx(
      className,
      alt ? styles.cardWithOverlayAlt : styles.cardWithOverlay
    )}
  >
    {children}
  </div>
)

const CardBody = ({ children }) => (
  <div className={styles.cardBody}>{children}</div>
)

const Overlay = ({ children }) => <ul className={styles.overlay}>{children}</ul>

const OverlayItem = ({ children }) => (
  <li className={styles.overlayItem}>{children}</li>
)

const Image = ({ srcset, alt, attribution }) => (
  <div className={styles.image}>
    <picture>
      <source
        media="(max-width: 1023px)"
        srcSet={`${srcset[0]}, ${srcset[1]} 2x`}
      />
      <source
        media="(min-width: 1024px)"
        srcSet={`${srcset[2]}, ${srcset[3]} 2x`}
      />
      <img src={srcset[0]} alt={alt} />
    </picture>
  </div>
)

const Title = ({ children }) => (
  <h2 className={`title ${styles.title}`}>{children}</h2>
)

export { CardWithOverlay, CardBody, Overlay, OverlayItem, Image, Title }
