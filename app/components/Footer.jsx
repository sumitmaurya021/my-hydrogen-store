import '~/assets/css/Footer.css';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="custom-footer">
      <div className="custom-footer-container">
        {/* Top Disclaimers */}
        <div className="footer-disclaimers">
          <p>*While supplies last. Peloton All Access Membership (£45/mo) required to access all Peloton content and applicable features on your Peloton hardware.</p>
          <p>The following Peloton IQ features are available on all versions of the Peloton Bike and Tread with an All-Access Membership: Personalized Plans, Performance Estimates, Insights and Analysis, and Personalized Recommendations. The following Peloton IQ features are available on Peloton Cross Training Bikes only: Rep Tracking, Form Feedback, Weight Rack and Suggested Weights, Self-Paced Strength, Workout Generator, and Strength Benchmarking. Peloton All Access Membership (£45/mo) required to access all Peloton content and applicable features on your Peloton hardware.</p>
          <p>¹Peloton All-Access Membership (£45/mo) required to access all Peloton content and applicable features on your Peloton hardware.</p>
          <p><strong>²Missing payments can have serious consequences for you. Your credit rating may be affected which will make it more difficult or more expensive for you to obtain credit in the future.</strong></p>
          <p>Peloton Interactive UK Ltd (1 Langley Street, London, WC2H 9JG) is an appointed representative of Product Partnerships Limited which is authorised and regulated by the Financial Conduct Authority ("FCA") for regulated consumer credit activities (FRN 626349). Peloton acts as a credit broker and not a lender, offering credit products provided exclusively by Klarna Financial Services UK Limited (company no. 14250857), which is authorised and regulated by the FCA for regulated consumer credit activities (FRN 987889), and for the provision of payment services under the Payment Services Regulations 2017 (FRN 1001434). Finance is only available to permanent UK residents aged 18+, subject to status, T&Cs apply. <a href="#">Klarna.com/uk/terms-and-conditions</a>. Peloton All-Access Membership (£45/mo) required to access Peloton content and applicable features on your Peloton hardware.</p>
          <p>³Pay upfront. Return within 30 days for full refund. 1 trial per Peloton hardware per household. Peloton All Access Membership (£45/mo) required to access Peloton content and applicable features on your Peloton hardware. Terms apply, see <a href="#">onepeloton.com/en-GB/home-trial</a>.</p>
        </div>

        <hr className="footer-divider" />

        {/* Main Footer Links */}
        <div className="footer-main">
          <div className="footer-columns">
            {/* Column 1 */}
            <div className="footer-col">
              <h4>Shop and Learn</h4>
              <ul>
                <li><Link to="#">Home Trial</Link></li>
                <li><Link to="#">Membership</Link></li>
                <li><Link to="#">Refurbished Bikes</Link></li>
                <li><Link to="#">Purchasing Used Peloton Bikes</Link></li>
                <li><Link to="#">Financing</Link></li>
                <li><Link to="#">Payment Options</Link></li>
                <li><Link to="#">Instructors</Link></li>
                <li><Link to="#">Peloton for Business</Link></li>
                <li><Link to="#">The Peloton Report</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li><Link to="#">Our Story</Link></li>
                <li><Link to="#">About us</Link></li>
                <li><Link to="#">Team</Link></li>
                <li><Link to="#">Careers</Link></li>
                <li><Link to="#">Press</Link></li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">Investors</Link></li>
                <li><Link to="#">Impact & Inclusion</Link></li>
                <li><Link to="#">Peloton Member Stories</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="footer-col">
              <h4>Visit Us</h4>
              <ul>
                <li><Link to="#">Store locator</Link></li>
                <li><Link to="#">Hotel Finder</Link></li>
                <li><Link to="#">Book a Test Class</Link></li>
                <li><Link to="#">Studio</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><Link to="#">Contact Peloton</Link></li>
                <li><Link to="#">Member Support Center</Link></li>
                <li><Link to="#">Return Policy</Link></li>
                <li><Link to="#">Warranties & Service Plans</Link></li>
                <li><Link to="#">Delivery Information</Link></li>
                <li><Link to="#">Financing Initial Disclosure</Link></li>
                <li><Link to="#">Financing Complaints</Link></li>
                <li><Link to="#">Tread Safety Notice</Link></li>
                <li><Link to="#">Security</Link></li>
                <li><Link to="#">Consumer Health Data Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter and Contact */}
          <div className="footer-newsletter-section">
            <h4 className="signup-heading">Sign up to get the latest</h4>
            <form className="footer-form">
              <input type="email" placeholder="Your email*" required />
              <button type="submit">Submit</button>
            </form>
            <p className="privacy-notice">
              By providing your email address, you agree to receive marketing emails from Peloton.<br/><br/>
              We have updated our <Link to="#">Privacy Policy</Link> to provide more information on how we collect and use your personal information.
            </p>
            
            <div className="footer-contact-info">
              <div className="contact-item">
                <span className="icon">📞</span>
                <span>Sales: +44 808 169 6469</span>
              </div>
              <div className="contact-item">
                <span className="icon">💬</span>
                <span><Link to="#">Start a live chat</Link></span>
              </div>
              <div className="contact-item">
                <span className="icon">❓</span>
                <span><Link to="#">Visit support center</Link></span>
              </div>
            </div>

            <div className="footer-social">
              <Link to="#" className="social-icon">f</Link>
              <Link to="#" className="social-icon">X</Link>
              <Link to="#" className="social-icon">in</Link>
              <Link to="#" className="social-icon">▶</Link>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* App Store Links */}
        <div className="footer-apps">
          <h4>Get the Peloton App</h4>
          <div className="app-badges">
            <Link to="#" className="app-badge">
              <svg className="app-badge-icon apple" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <div className="app-badge-text">
                <span className="app-badge-small">Download on the</span>
                <span className="app-badge-large">App Store</span>
              </div>
            </Link>
            
            <Link to="#" className="app-badge">
              <svg className="app-badge-icon play" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4caf50" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"/>
                <path fill="#2196f3" d="M104.6 13C89.1-1.4 64 8.7 64 30.6v450.9c0 21.9 25.1 32 40.6 17.6l220.1-204.7L104.6 13z"/>
                <path fill="#ffeb3b" d="M385.4 294.4l82.6-47.5c16.3-9.4 16.3-32.5 0-41.9l-82.6-47.5-60.1 60.1 60.1 76.8z"/>
                <path fill="#f44336" d="M104.6 499l220.7-204.6 60.1 60.1L104.6 499z"/>
              </svg>
              <div className="app-badge-text">
                <span className="app-badge-small">GET IT ON</span>
                <span className="app-badge-large">Google Play</span>
              </div>
            </Link>
            
            <Link to="#" className="app-badge amazon-badge">
              <div className="app-badge-text">
                <span className="app-badge-small">available at</span>
                <span className="app-badge-large">amazon appstore</span>
              </div>
            </Link>
            
            <Link to="#" className="app-badge roku-badge">
              <div className="app-badge-text">
                <span className="app-badge-small">Available on</span>
                <span className="app-badge-large">Roku <span className="roku-small">Players<br/>& TVs</span></span>
              </div>
            </Link>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Disclaimers */}
        <div className="footer-bottom-disclaimer">
          <p>Peloton Interactive UK Limited trading as Peloton is an appointed representative of Product Partnerships Limited which is authorised and regulated by the Financial Conduct Authority. Product Partnerships Limited's FCA registration number is 626349 and its address is Second Floor, Atlas House, 31 King Street, Leeds LS1 2HL. Peloton Interactive UK Limited trading as Peloton acts as a credit broker not a lender and only introduces to Klarna Financial Services UK (FRN 987889) who may be able to offer you finance facilities for your purchase. We do not receive any commission for introducing customers to Klarna Financial Services UK. Klarna's Pay in 3 installments and Pay in 30 days agreements are not regulated by the FCA. Finance is only available to permanent UK residents aged 18+, subject to status, T&Cs and late fees apply. You may be able to obtain finance for your purchase from other lenders and you are encouraged to seek alternative quotations. Peloton also conducts consumer hire activities in respect of its Peloton Rental Service. If you would like to know how complaints are handled for this scheme, please ask for a copy of our complaints handling process. You can also find information about referring a complaint to the Financial Ombudsman Service (FOS) at financial-ombudsman.org.uk</p>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-country">
            <span className="flag">🇬🇧</span> United Kingdom (£ GBP)
          </div>
          <div className="footer-bottom-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Membership Terms</Link>
            <Link to="#">Purchase Terms</Link>
            <Link to="#">Cookie Settings</Link>
            <Link to="#">Accessibility</Link>
            <Link to="#">UK Modern Slavery Act</Link>
            <span className="copyright">© Peloton 2012-2024, Peloton Interactive, Inc. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
