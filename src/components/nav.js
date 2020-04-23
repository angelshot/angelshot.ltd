import React from "react"
import NewsletterForm from "./newsletterForm"

const Nav = () => (
  <>
    <input id="menu_toggle" type="checkbox" onchange="
    function freezeBody(e){
      if (e.checked) { document.body.classList.add('freeze') }
      else { document.body.classList.remove('freeze') }
    } freezeBody(this);" />
    <nav class="navigation">
      <ul class="mainNav">
        <li><a href="about_us.html">About Us</a></li>
        <li><a href="our_programs.html">Our Programs</a></li>
        <li><a href="join_the_movement.html">Join the Movement</a></li>
        <li class="donate-large"><a href="#donate" class="button">Donate</a></li>
        <li class="donate-small"><a href="#donate" class="button button-wide-alt" onclick="document.getElementById('menu_toggle').checked=false;">Make a Donation</a></li>
      </ul>
      <section class="mobile">
        <div class="subscribe-newsletter">
          <h6 class="subheader">Subscribe to our newsletter</h6>
          <p>Stay up to date on the progress of our programs, and discover upcoming events and volunteer opportunities.</p>
          <NewsletterForm />
        </div>

        <ul class="subNav">
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>

        <ul class="socialNav">
          <li><a href="#" class="icon_instagram alt">Follow us on Instagram</a></li>
          <li><a href="#" class="icon_twitter alt">Follow us on Twitter</a></li>
          <li><a href="#" class="icon_facebook alt">Follow us on Facebook</a></li>
        </ul>

        <p class="status501c3">AngelShot Ltd. is a registered 501(c)(3) nonprofit charitable organization.</p>
        <p class="copyright">©2020 AngelShot Ltd.</p>
      </section>
    </nav>
  </>
)

export default Nav