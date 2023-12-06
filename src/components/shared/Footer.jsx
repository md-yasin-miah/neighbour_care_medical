
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-links">
              <h4>Important Links:</h4>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>


            </div>
          </div>

          <div className="col-md-3">
            <div className="footer-links">
              <h4>Contact:</h4>
              <ul>
                <li><a href="tel:905 553 7546">Phone: 905 553 7546</a></li>
                <li><a href="#">Text: 416 876 7546</a></li>
                <li><a href="#">Fax: 9055537547</a></li>
                <li><a href="mailto:pharmacy.venice@yahoo.com">pharmacy.venice@yahoo.com</a></li>
              </ul>


            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-links medical-newsletter">
              <h4>Get In Touch</h4>
              <p>Get the latest updates</p>
              <form action="#" method="post">
                <input type="email" name="email" placeholder="Enter your email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-links">
              <h4>Address:</h4>
              <ul>
                <li><a href="#">Address: 76-3530 Rutherford Rd, Vaughan, L4H3T8</a></li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2023 Venice Pharmacy - All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer