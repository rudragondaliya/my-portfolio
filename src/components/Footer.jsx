import React from 'react';
import insta from '../assets/inst-logo.avif'
import facebook from '../assets/facebook-logo.avif'
import linkedin from '../assets/link-logo.avif'
import github from '../assets/github.png'


const Footer = () => {
  return (
    <div>
      <section className='footer p-5'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 ">
              <div className="footer-1 p-5">
                <h1 className='text-white ms-5 foot-txt'>R.GONDALIYA</h1>
                <div className="icons d-flex gap-2 ms-5 mt-5">
                  <a href="https://www.instagram.com/accounts/emailsignup/"><img src={insta} height={40} alt="" /></a>
                  <a href="https://www.facebook.com/"><img src={facebook} alt="" height={40} /></a>
                  <a href="https://www.linkedin.com/feed/"> <img src={linkedin} alt="" height={40} /></a>
                  <a href="https://github.com/rudragondaliya"><img src={github} alt="github" height={40} /></a>
                </div>
                <h6 className='mt-5 text-white ms-5'>+91 9664811208 <br />gondaliyarudra61@gmail.com</h6>
                <h6 className='text-white ms-5 mt-5'>500 Terry Francine St. San <br /> Francisco, CA 94158</h6>
              </div>
            </div>
            <div className="col-6 position-relative">
              <div className="footer-2 ">
                <h6 className='text-white foot-1'>Privacy Policy <br /> Accessibility Statement</h6>
                <h6 className='foot-2 text-white'>© 2035 by R.GONDALIYA Powered and secured by RUDRA GONDALIYA </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
