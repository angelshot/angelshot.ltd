import React from "react"
import Button from "./button"
import InputText from "./inputText"

import styles from "./newsletterForm.module.css"

const NewsletterForm = () => (
  <div id="mc_embed_signup">
    <form
      action="https://ltd.us4.list-manage.com/subscribe/post?u=091175bb199db49734caae8f1&amp;id=634f908f1b"
      method="post"
      className={styles.subscribeNewsletterForm}
      target="_blank"
    >
      <div>
        <label htmlFor="mce-EMAIL">Enter your email</label>
        <div className={`mc-field-group ${styles.fieldset}`}>
          <input type="hidden" name="FORMNAME" value="newsletter" />
          <InputText
            type="email"
            name="EMAIL"
            placeholder="Email"
            required
            id="mce-EMAIL"
          />
          <Button
            tagName="button"
            id="mc-embedded-subscribe"
            type="submit"
            value="Submit"
            name="subscribe"
            buttonType="buttonInline"
          />
        </div>
      </div>
    </form>
  </div>
)

export default NewsletterForm
