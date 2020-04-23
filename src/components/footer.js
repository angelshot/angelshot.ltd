import React from "react"
import NewsletterForm from "./newsletterForm"

const Footer = () => (
<footer>
    <div class="grid">
    <div class="subscribe-newsletter">
        <h6 class="subheader">Subscribe to our newsletter</h6>
        <p>Stay up to date on the progress of our programs, and discover upcoming events and volunteer opportunities.</p>
        <NewsletterForm />
    </div>
    <ul class="nav socialNav">
        <li><a href="#" class="icon_instagram alt">Follow us on Instagram</a></li>
        <li><a href="#" class="icon_twitter alt">Follow us on Twitter</a></li>
        <li><a href="#" class="icon_facebook alt">Follow us on Facebook</a></li>
    </ul>

    <ul class="nav footerNav">
        <li><a href="about_us.html">About Us</a></li>
        <li><a href="our_programs.html">Our Programs</a></li>
        <li><a href="join_the_movement.html">Join the Movement</a></li>
    </ul>

    <ul class="nav footerSubNav">
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
    </ul>
    </div>
    
    <section class="fine_print">
    <div class="container">
        <p class="status501c3">AngelShot Ltd. is a registered 501(c)(3) nonprofit charitable organization.</p>
        <p class="copyright">&copy;2020 AngelShot Ltd.</p>
        <a href="#" class="backToTop">Back to Top</a>
    </div>
    </section>
</footer>
)

export default Footer