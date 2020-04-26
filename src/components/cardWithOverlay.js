import React from "react"
import styles from "./cardWithOverlay.module.css"

const CardWithOverlay = ({ children }) => (
  <div className={styles.cardWithOverlay}>{children}</div>
)

const Overlay = ({ children }) => <ul className={styles.overlay}>{children}</ul>

const OverlayItem = ({ children }) => (
  <li className={styles.overlayItem}>{children}</li>
)

const Image = ({ srcset, alt }) => (
  <picture>
    <source
      media="(max-width: 1023px)"
      srcset={`${srcset[0]}, ${srcset[1]} 2x`}
    />
    <source
      media="(min-width: 1024px)"
      srcset={`${srcset[2]}, ${srcset[3]} 2x`}
    />
    <img src={srcset[0]} alt={alt} className={styles.image} />
  </picture>
)

const Title = ({ children }) => (
  <h2 className={`title ${styles.title}`}>{children}</h2>
)

export { CardWithOverlay, Overlay, OverlayItem, Image, Title }
