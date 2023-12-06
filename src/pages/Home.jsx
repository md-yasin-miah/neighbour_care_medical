import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <section className="hero-section" id="hero">
        <div className="hero-slider-img-banner">
          <div className="hero-tiny-slider-bg">
            {/* <div className="slider-item-bg"> 
          <img src="{{ asset('storage/heroimage/'.$heroimage->image) }}" alt="{{ $heroimage->name }}">
        </div> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-slider">
                <div className="hero-tiny-slider">
                  <div className="hero-slider-item">
                    <div className="hero-content">
                      <h4># hero_sub_heading</h4>
                      <h2># hero_main_heading</h2>
                      <p># hero_paragraph_heading</p>
                      <Link to="" className="apointment-btn">Book appointments</Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="container">
          <div className="row">


            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="section-title" data-aos="fade-up">
                  <h3>Not Just Care, But a Better <br />Care Experience.</h3>
                  <p>We believe that healthcare should be more than just basic care. That&apos;s why we go above and beyond to provide our patients with a better care experience that is personalized, convenient, and focused on their unique needs.</p>
                </div>

                <div className="row">
                  <div className="feature-block-five col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
                    <a href="https://bookmypharmacy.com/9055537546">
                      <div className="inner-box">
                        <h4>Covid 19</h4>
                        <p>Register for the COVID vaccines, book travel testing & learn about symptomatic testing, rapid antigen test distribution or request a Paxlovid consultation</p>
                      </div>
                    </a>
                  </div>

                  <div className="feature-block-five col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
                    <a href="mailto:pharmacy.venice@yahoo.com">
                      <div className="inner-box">
                        <h4>Prescription Transfer</h4>
                        <p>Easily become a patient at Venice Pharmacy by transferring your profile to us with just an email at pharmacy.venice@yahoo.com</p>
                      </div>
                    </a>
                  </div>

                  <div className="feature-block-five col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
                    <a href="https://bookmypharmacy.com/minorailment/9055537546">
                      <div className="inner-box">
                        <h4>Minor Ailment</h4>
                        <p>pharmacists are authorized to prescribe treatment for common ailments through consultations.</p>
                      </div>
                    </a>
                  </div>

                  <div className="feature-block-five col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
                    <a href="https://bookmyrefill.com/refill/9055537546">
                      <div className="inner-box">
                        <h4>Refill your prescription</h4>
                        <p>Need to refill your prescription? Click below and select&apos; Prescription Refill&apos; in the drop down.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="image-box" data-aos="fade-left">
                <figure className="image">
                  <img src="src/assets/img/section-img/features-img.jpg" alt="" />
                </figure>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="about-area">
        <div className="container">

          <div className="row">
            <div className="col-md-6">
              <div className="about-img" data-aos="fade-right">
                <img src="src/assets/img/section-img/image-1.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-text" data-aos="fade-left">
                <h4>Why choose</h4>
                <h3>Venice Pharmacy?</h3>
                <p>We&apos;re dedicated to providing high-quality, affordable medication and healthcare products to help you live your best life. With a wide range of products and a team of knowledgeable professionals, we&apos;re here to support you on your journey to better health. Whether you&apos;re managing a chronic condition, looking for over-the-counter remedies, or simply need a refill on your prescription, we&apos;ve got you covered. Thank you for choosing our pharmacy, and we look forward to serving you.</p>
                <a href="about.html" className="btn-style-a">About Us</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="service-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title" data-aos="fade-up">
                <h3>Our Services</h3>
                <p>The services provided by Venice Pharmacy</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* loop start */}
            <div className="col-md-4">
              <div className="single-service" data-aos="fade-up">
                <div className="s-icon">
                  {/* <img src="src/assets/img/icon/stethoscope1.png" alt=""> */}
                  <i className="fas fa-hospital-alt"></i>
                  {/* <img src="{{ asset('storage/serviceimage/'.$service->image) }}" alt="{{ $service->name }}"> */}
                </div>





                <div className="stext">
                  <h4>{"name"}</h4>
                  <p>{"description"}</p>
                  {/* <a href="#">Read More +</a> */}
                </div>
              </div>
            </div>
            {/* end loop */}

            {/*<div className="col-md-4">
          <div className="single-service" data-aos="fade-up">
            <div className="s-icon">
              <img src="src/assets/img/icon/stethoscope1.png" alt="">
              <i className="fas fa-hospital-alt"></i>
            </div>
            <div className="stext">
              <h4>Immunization</h4>
              <p>We understand the importance of immunizations in protecting against preventable diseases. That's why we offer a variety of vaccines for individuals of all ages, including flu shots, COVID-19 vaccines, and travel vaccines. Our trained pharmacists are ready to help you stay up-to-date on your immunizations and provide you with the information you need to make informed decisions about your health. Trust us to help keep you and your family healthy and protected.</p>
               <a href="#">Read More +</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-service" data-aos="fade-up">
            <div className="s-icon">
               <img src="assets/img/icon/Emergency-Case.png" alt="">
              <i className="fas fa-hospital-user"></i>
            </div>
            <div className="stext">
              <h4>Compliance packaging </h4>
              <p>Our pharmacy offers compliance packaging to help our patients stay on track with their medication regimen. With our easy-to-use packaging, you can be confident that you are taking the right medication at the right time, every time. Let us help you simplify your medication routine and improve your overall health and wellness.</p>
               <a href="#">Read More +</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-service" data-aos="fade-up">
            <div className="s-icon">
               <img src="assets/img/icon/Health-Clinic.png" alt="">
              <i className="fas fa-stethoscope"></i>
            </div>
            <div className="stext">
              <h4>Compounding</h4>
              <p>We offer compounding services to meet the unique needs of each individual patient. Our experienced compounding pharmacists work closely with healthcare providers to create customized medications that are tailored to each patient's specific requirements. Whether you need a medication in a different strength, dosage form, or flavor, we can help. Trust us to provide you with the highest quality, personalized medication solutions to improve your health and well-being.</p>
               <a href="#">Read More +</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-service" data-aos="fade-up">
            <div className="s-icon">
               <img src="assets/img/icon/stethoscope1.png" alt="">
              <i className="fas fa-hospital-alt"></i>
            </div>
            <div className="stext">
              <h4>Medication reviews</h4>
              <p>We offer medication reviews to help you manage your medications safely and effectively. Our trained pharmacists will work with you to review all your medications, including prescription drugs, over-the-counter products, and supplements. We'll identify potential interactions, side effects, and other issues that could impact your health. We'll also provide you with personalized recommendations to optimize your medication regimen and improve your overall health and well-being. </p>
               <a href="#">Read More +</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-service" data-aos="fade-up">
            <div className="s-icon">
               <img src="assets/img/icon/Emergency-Case.png" alt="">
              <i className="fas fa-hospital-user"></i>
            </div>
            <div className="stext">
              <h4>Free Delivery </h4>
              <p>At our pharmacy, we offer free delivery to make it easier for you to get the medications and healthcare products you need, without leaving the comfort of your home. Whether you're recovering from an illness, managing a chronic condition, or just need a refill, our delivery service can save you time and hassle. Contact us today to learn more about our free delivery services.</p>
               <a href="#">Read More +</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-service" data-aos="fade-up">
            <div className="s-icon">
               <img src="assets/img/icon/Health-Clinic.png" alt="">
              <i className="fas fa-stethoscope"></i>
            </div>
            <div className="stext">
              <h4>Consultations</h4>
              <p>We offer consultations to help you better understand your medications and healthcare options. Our knowledgeable pharmacists are available to answer your questions, provide you with information about your medications, and offer advice on how to manage your health. Whether you're dealing with a new diagnosis, adjusting to a new medication, or just need some guidance, we're here to help. Contact us today to schedule a consultation with one of our pharmacists.</p>
               <a href="#">Read More +</a>
            </div>
          </div>
        </div> */}
          </div>
        </div>
      </section>



      <section className="meet-doctor-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h3>Meet Our Pharmacist Owner</h3>
                <p>We are proud to introduce our valued pharmacist owner, Ferdous Amin, to our patients. With over a decade of experience in the field, Ferdous is a highly trained and knowledgeable healthcare professional who provides exceptional care and support to our patients. He is passionate about helping people achieve their health goals and improving their overall well-being through personalized consultations and recommendations. Ferdous is committed to staying up to date with the latest developments in the field of pharmacy and is always eager to share his knowledge and expertise with our patients. </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">

            </div>
            <div className="col-md-4">
              <div className="single-doctor" data-aos="fade-up">
                <div className="sd-img">
                  <img src="src/assets/img/pharmacist-1.jpg" alt="" />
                </div>
                <div className="sd-info">
                  <h4>Ferdous Amin</h4>
                  <p>Pharmacist Owner</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">

            </div>
          </div>
        </div>
      </section>


      <section className="health-advice-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="haa-img" data-aos="fade-right">
                <img src="src/assets/img/health-advice-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="haa-text" data-aos="fade-left">
                <h4>Have questions? </h4>
                <h3>Consult with our knowledgeable expert for trusted advice.</h3>
                <p>{"Whether you're looking for advice on managing a chronic condition, choosing the right medication, or seeking recommendations for preventative care, our expert is here to help. With our expert's guidance, you can be confident that you're receiving the highest quality of care and advice, tailored to your unique needs. So don't hesitate - reach out to us today to get the answers and advice you need to stay healthy and happy. Write us an email at pharmacy.venice@yahoo.com and we will contact you to take care of the rest or book an appointment here"}
                </p>
                <a href="https://www.bookmypharmacy.com/9055537546" className="btn-style-a">Book appointments</a>
              </div>
            </div>
          </div>
        </div>
      </section >


      <section className="call-to-action-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta-content" data-aos="fade-up">
                <h3>Leave us a review on Google or Facebook</h3>

                <a href="https://g.page/r/CSMyTb_dtXpdEBE/" className="cta-button">Google</a>
                <a href="https://www.facebook.com/venicepharmacy/reviews" className="cta-button">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title" data-aos="fade-up">
                <h3>Testimonials</h3>
                <p>At the Venice Pharmacy, we take pride in our patient care. We are accepting new patients, contact us today to get started.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12" data-aos="fade-up">
              {/* <script defer async src='https://cdn.trustindex.io/loader.js?c7a06791381659524556982520b'></script> */}
              <div className="elfsight-app-03900227-5d28-4d49-83cb-934da87f8fae"></div>
              {/* <script src="https://apps.elfsight.com/p/platform.js" defer></script> */}

              <div className="testimonial-tiny-slider">
                <div className="tts-single">
                  <div className="testimonials-box">
                    <div className="testimonial-item">
                      <div className="testimonial-text">
                        <p>{"The best pharmacy service care and support we always receive.  The staff is friendly and courteous. There knowledge is absolutely tremendous and detailed with their explanations on how to use and administer medications. Highly recommend for pharmaceutical services."}</p>
                      </div>
                      <div className="testimonial-author">
                        <h4>Navin Gopi</h4>
                        <p>Patient</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tts-single">
                  <div className="testimonials-box">
                    <div className="testimonial-item">
                      <div className="testimonial-text">
                        <p>{"The pharmacist at the pharmacy is very accommodating on timing for when the medication can be picked up. It is hard with work to come to grab the medication before closing, but they are kind enough to wait a couple minutes to allow you to come pick it up. They are very kind and quick on having your medication ready for pick up."}</p>
                      </div>
                      <div className="testimonial-author">
                        <h4>viniisha tham</h4>
                        <p>Patient</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tts-single">
                  <div className="testimonials-box">
                    <div className="testimonial-item">
                      <div className="testimonial-text">
                        <p>{"I love this pharmacy, the owner pharmacist is super nice, friendly and accomodating. Everytime I asked any question, he gave a detailed answer, very knowledgeable. The price is very reasonable compare to others. No wait, no line up like the big stores. Im glad i live in the neighborhood and be able to walk here for all medication needs. 5 stars all the way!"}</p>
                      </div>
                      <div className="testimonial-author">
                        <h4>Kelly Pham</h4>
                        <p>Patient</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Home