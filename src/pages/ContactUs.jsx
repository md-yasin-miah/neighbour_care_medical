import HeroSection from "../components/shared/HeroSection"

const ContactUs = () => {
  return (
    <div>
      <HeroSection
        data={{
          title: "Contact-Us",
          list: [
            {
              name: "Home",
              link: "/"
            },
            {
              name: "Contact-Us",
              link: "/contactUs"
            }

          ]
        }}
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <ul>
                  <li>
                    <div className="single-ci">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Address:</span> 76-3530 Rutherford Rd, Vaughan, L4H3T8
                    </div>
                  </li>
                  <li>
                    <div className="single-ci">
                      <i className="fas fa-phone"></i>
                      <a href="tel:+1123456-7890"><span>Phone:</span> 905 553 7546</a>
                    </div>
                  </li>
                  <li>
                    <div className="single-ci">
                      <i className="fas fa-envelope"></i>
                      <a href="mailto:pharmacy.venice@yahoo.com"><span>Email:</span> pharmacy.venice@yahoo.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="contact-form-box">
              <h3>Contact Us</h3>
              <p>Get in touch with our medical experts</p>
              <form method="POST" action="https://neighbourcaremedical.ca/contact-us" id="contactUSForm">
                <input type="hidden" name="_token" value="D4VBKGHFGkWeOrdHciP4dF5pUG6Eag46KAvXV1G3" />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="name" className="form-control" placeholder="Name" value="" />
                    </div>
                    <div className="form-group">
                      <input type="text" name="email" className="form-control" placeholder="Email" value="" />
                    </div>
                    <div className="form-group">
                      <input type="text" name="phone" className="form-control" placeholder="Phone" value="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="subject" className="form-control" placeholder="Subject" value="" />
                    </div>
                    <div className="form-group">
                      <textarea name="message" rows="3" className="form-control"></textarea>
                    </div>
                  </div>
                </div>
                <button className="btn btn-success btn-submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.332786927427!2d-79.54923389999999!3d43.8281973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f5cd56d785d%3A0x530b146e11134aee!2s3530%20Rutherford%20Rd%20%2376%2C%20Woodbridge%2C%20ON%20L4L%201A6%2C%20Canada!5e0!3m2!1sen!2sbd!4v1678165667087!5m2!1sen!2sbd" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
      </div>
    </div>
  )
}

export default ContactUs