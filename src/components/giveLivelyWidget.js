import React from "react"

const GiveLivelyWidget = () => (
    <>
        <script>gl=document.createElement('script');gl.src='https://secure.givelively.org/widgets/simple_donation/angelshot-ltd.js?show_suggested_amount_buttons=true&show_in_honor_of=true&address_required=false&has_required_custom_question=null&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100&suggested_donation_amounts[]=250';document.getElementsByTagName('head')[0].appendChild(gl);</script>
        <div id="give-lively-widget" class="gl-simple-donation-widget"></div>
    </>
)

export default GiveLivelyWidget