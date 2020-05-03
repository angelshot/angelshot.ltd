import React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Floral from "../components/floral"
import Hero from "../components/hero"
import { Image } from "../components/cardWithOverlay"
import InputText from "../components/InputText"
import InputCheckbox from "../components/InputCheckbox"
import Button from "../components/Button"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <Hero>
      <Intro>Our Programs</Intro>
    </Hero>
    <Floral>
      <section>
        <h2 className="title">
          AngelBot
        </h2>
        <p>
        AngelBot encourages you to remove yourself from situations you perceive to be dangerous by sending you text messages as your friend, Angel.
        </p>
        <Image
          srcset={[
            "images/angelbot.png",
            "images/angelbot@2x.png",
            "images/angelbot.png",
            "images/angelbot@2x.png"         
          ]}
          alt="Angelbot"
        />
        <h3 className="title">
          Join the Beta
        </h3>
        <p>
        Have you ever needed an out? Do you want to help improve the future of women's safety? Sign up to be a part of the AngelBot Beta program!
        </p>
      </section>
      
      <section>
      <form>
        <h4 className="subheader2">Required fields:</h4>
        <InputText
          type="tel"
          name="PHONE"
          placeholder="Phone number"
          required            
          labelBody="Phone number"
          tooltip="Used to add you to Angel's contacts"
        />
        <InputText
          type="email"
          name="EMAIL"
          placeholder="Email"
          required            
          labelBody="Email"
        />
        <InputCheckbox
          value="1"
          name="EULA"
          required
          labelBody={
            <span>I have ready and agree to the <Link to="/terms">
              End User License Agreement
            </Link>.</span>
          }
        />
        <h4 className="subheader2">Demographics (Optional):</h4>
        <p>In order to ensure that we are able to provide this service to a diverse group of individuals, please share with us the following information. We will never share this with anyone.</p>
        <InputText
          type="number"
          name="AGE"
          placeholder="Age"                    
          labelBody="Age"
        />
        <InputText
          type="text"
          name="GENDER"
          placeholder="Gender"                    
          labelBody="Gender"
        />
        <InputText
          type="number"
          name="ZIP"
          placeholder="Zip Code"                    
          labelBody="Zip Code"
        />
        <InputText
          type="text"
          name="SEXUALORIENTATION"
          placeholder="Sexual Orientation"                    
          labelBody="Sexual Orientation"
        />
        <InputText
          type="text"
          name="OCCUPATION"
          placeholder="Occupation (student/other)"                    
          labelBody="Occupation (student/other)"
        />
        <Button
          buttonType="button2"
          type="submit"
          tagName="button"
          children="Join the Beta"
        />
      </form>
      </section>
       
    </Floral>
  </Layout>
)
