import React from "react"
import InputButton from "./inputButton"
import InputText from "./InputText"
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
        <div className="mc-field-group fieldset">
          <InputText
            type="email"
            name="EMAIL"
            placeholder="Email"
            required
            id="mce-EMAIL"
          />
          <InputButton
            id="mc-embedded-subscribe"
            type="submit"
            value="Submit"
            name="subscribe"
          />
        </div>
      </div>
    </form>
  </div>
)

export default NewsletterForm
