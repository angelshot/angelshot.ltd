import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Floral from "../components/floral"
import Hero from "../components/hero"
import CTA from "../components/cta"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <Helmet>
      <title>EULA</title>
    </Helmet>
    <Hero noImage>
      <Intro>End User License Agreement (EULA)</Intro>
    </Hero>
    <Floral withHero>
      <CTA tagName="h2">
        Terms of Service
      </CTA>
      <div className="col-2">
        <p>
        AngelBot is an SMS text messaging service created by AngelShot Ltd (“AngelShot”). 
        By installing or using our apps, services, or website (together, “Services”), you 
        agree to our Terms of Service (“Terms”) of the AngelBot Beta Program (“Beta”).
        </p>
        <h2 className="subheader">Disclaimer</h2>
        <p>
        YOU USE OUR SERVICES AT YOUR OWN RISK AND SUBJECT TO THE FOLLOWING DISCLAIMERS. 
        WE PROVIDE OUR SERVICES ON AN “AS IS” BASIS WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES, 
        INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
        PURPOSE, TITLE, NON-INFRINGEMENT, AND FREEDOM FROM COMPUTER VIRUS OR OTHER HARMFUL CODE. 
        SIGNAL DOES NOT WARRANT THAT ANY INFORMATION PROVIDED BY US IS ACCURATE, COMPLETE, OR 
        USEFUL, THAT OUR SERVICES WILL BE OPERATIONAL, ERROR-FREE, SECURE, OR SAFE, OR THAT OUR 
        SERVICES WILL FUNCTION WITHOUT DISRUPTIONS, DELAYS, OR IMPERFECTIONS. WE DO NOT CONTROL, 
        AND ARE NOT RESPONSIBLE FOR, CONTROLLING HOW OR WHEN OUR USERS USE OUR SERVICES. WE ARE 
        NOT RESPONSIBLE FOR THE ACTIONS OR INFORMATION (INCLUDING CONTENT) OF OUR USERS OR OTHER 
        THIRD PARTIES. YOU RELEASE US, AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, PARTNERS, AND 
        AGENTS (TOGETHER, “ANGELSHOT PARTIES”) FROM ANY CLAIM, COMPLAINT, CAUSE OF ACTION, 
        CONTROVERSY, OR DISPUTE (TOGETHER, “CLAIM”) AND DAMAGES, KNOWN AND UNKNOWN, RELATING TO, 
        ARISING OUT OF, OR IN ANY WAY CONNECTED WITH ANY SUCH CLAIM YOU HAVE AGAINST ANY THIRD PARTIES.
        </p>
        <h2 className="subheader">Limitation of Liability</h2>
        <p>
        EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND 
        AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, 
        HOWEVER IT ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION 
        AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS 
        INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING
         OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL 
         INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, 
         STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED 
         OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE 
         PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER 
         NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE 
         EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION 
         OR EXCLUSION MAY NOT APPLY TO YOU.
        </p>
        <h2 className="subheader">Warranty</h2>
        <p>
        Although utilizable by experienced users, the Beta is still being developed, tested and evaluated. 
        AngelBot Beta has not been released for sale, distribution or any use by the general public.
        </p>
        <h2 className="subheader">Minimum Age</h2>
        <p>
        You must be at least 13 years old to use our Services. The minimum age to use our Services without 
        parental approval may be higher in your home country.
        </p>
        <h2 className="subheader">Account Registration</h2>
        <p>
        To enroll in the Beta, you must register for our Services using your phone number. You consent to 
        receive and authorize text messages, notifications and automated messages to be sent to you. When 
        you enroll and by your use of the service, you certify that you are the account holder for the 
        mobile number you have enrolled or you have the account holder's permission to enroll. 
        </p>
        <h2 className="subheader">Privacy of user data</h2>
        <p>
        AngelShot does not sell, rent or monetize your personal data or content in any way. For the 
        purpose of operating our Services, you agree to our data practices as described in 
        our <Link to="/privacy">Privacy Policy</Link>.
        </p>
        <h2 className="subheader">Fees and Taxes</h2>
        <p>
        AngelShot does not charge for our Services. Message and data rates may apply based on your wireless 
        carrier. You are responsible for data and mobile carrier fees and taxes associated with the devices 
        on which you use our Services. 
        </p>
        <h2 className="subheader">No Access to Emergency Services</h2>
        <p>
        Our Services do not provide access to emergency service providers like the police, fire department, 
        hospitals, or other public safety organizations.
        </p>
        <h2 className="subheader">Third-party services</h2>
        <p>
        Our Services may allow you to access, use, or interact with third-party websites, apps, content, 
        and other products and services. When you use third-party services, their terms and privacy policies 
        govern your use of those services.
        </p>
        <h2 className="subheader">Compatibility</h2>
        <p>
        Our Services may not be compatible with all cell phone models or cell phone service providers. 
        </p>
        <h2 className="subheader">Availability</h2>
        <p>
        In order to use our Services, your device must be able to send and receive SMS messages. Our 
        Services may be interrupted, including for maintenance, upgrades, or network or equipment failures. 
        We may discontinue some or all of our Services, including certain features and the support for 
        certain devices and platforms, at any time.
        </p>
        <h2 className="subheader">Feedback</h2>
        <p>
        Upon reasonable request by AngelShot, you agree to provide suggestions, enhancement requests, and 
        recommendations (individually and collectively, “Feedback”) regarding the Beta Services. Feedback 
        shall include informing AngelShot about the performance, ease of use, features that may be missing, 
        and any bugs encountered during the use of AngelBot. AngelShot may contact you and you agree to make 
        available a reasonable amount of time to discuss the Beta with AngelShot if so requested. AngelShot 
        may, without restriction or fee use, modify and incorporate this Feedback into the Beta and other 
        AngelShot products and/or services without any restriction and without any payment. You agree to 
        provide material, statistics, or information that is not deemed confidential for use in press 
        releases, customer testimonials, and as a reference in marketing and sales initiatives by AngelShot.
        </p>
        <h2 className="subheader">Beta Technical Support</h2>
        <p>
        AngelShot is under no obligation to provide technical support, maintenance or any other services 
        under the terms of this license, and provides no assurance that any specific errors or discrepancies 
        in the Beta will be corrected.
        </p>
        <h2 className="subheader">Ownership and Copyright of Software</h2>
        <p>
        Title to AngelBot and the Beta and all copies thereof remain with AngelShot. AngelBot is copyrighted 
        and is protected by United States copyright laws and international treaty provisions. Licensee agrees 
        to prevent any unauthorized copying of AngelBot. Except as expressly provided herein, AngelShot does 
        not grant any express or implied right to you under AngelShot patents, copyrights, trademarks, or 
        trade secret information.
        </p>
        <h2 className="subheader">Opt-out</h2>
        <p>
        You may cancel your enrollment in the beta program at any time by emailing hi<span>@</span>angelshot.org.
        </p>
        <p>
        In addition to these terms, your use of this service is bound by the full AngelShot terms and conditions 
        found at <Link to="/terms">https://www.angelshot.org/terms/</Link>.
        </p>
      </div>
    </Floral>
  </Layout>
)
