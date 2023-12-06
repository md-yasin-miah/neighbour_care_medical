import HeroSection from "../components/shared/HeroSection"

const Blog = () => {
  return (
    <div>
      <HeroSection
        data={{
          title: "Blog",
          list: [
            {
              name: "Home",
              link: "/"
            },
            {
              name: "Blog",
              link: "/blog"
            }

          ]
        }}
      />

      <section className="blog-page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <aside>
                <div className="sidebar-widget sidebar-categories">
                  <h3>Categories</h3>


                  <ul className="sb-cat-lists">



                    <li >
                      <a href="https://neighbourcaremedical.ca/categories/rzy/cat-1">
                        Medications
                      </a>
                    </li>
                    <li >
                      <a href="https://neighbourcaremedical.ca/categories/13v/cat-2">
                        Pharmacy
                      </a>
                    </li>
                    <li >
                      <a href="https://neighbourcaremedical.ca/categories/15o/cat-3">
                        Supplements test
                      </a>
                    </li>
                    <li >
                      <a href="https://neighbourcaremedical.ca/categories/14g/cat-4">
                        Covid 19
                      </a>
                    </li>


                    <li>
                      <a href="https://neighbourcaremedical.ca/categories/10q/test-post-ferdous">
                        Test post Ferdous
                      </a>
                    </li>


                    <li>
                      <a href="https://neighbourcaremedical.ca/categories/kmw/ssss">
                        test
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-md-9">
              <div className="blog-posts-wrapper">
                <div className="blog-posts">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-blog-post">
                        <div className="this-blog-cats">
                          <span className="category">Pharmacy</span>
                        </div>
                        <img src="public/storage/blogimage/7c475d92a5.jpg" alt="Blog Post 1" />
                        <div className="blog-post-meta">
                          <span className="date"> 04-09-2023  </span>
                          <span className="author">by Super Admin</span>
                        </div>
                        <div className="bp-texts">
                          <h3><a href="https://neighbourcaremedical.ca/posts/rp6/test3">test3</a></h3>
                          <p>test 3</p>
                          <a href="https://neighbourcaremedical.ca/posts/rp6/test3">Read More</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-blog-post">
                        <div className="this-blog-cats">
                          <span className="category">Medications</span>
                        </div>
                        <img src="public/storage/blogimage/cf97a50f7f.png" alt="Blog Post 1" />
                        <div className="blog-post-meta">
                          <span className="date"> 04-10-2023  </span>
                          <span className="author">by Super Admin</span>
                        </div>
                        <div className="bp-texts">
                          <h3><a href="https://neighbourcaremedical.ca/posts/1jm/ok">ok</a></h3>
                          <p>ok</p>
                          <a href="https://neighbourcaremedical.ca/posts/1jm/ok">Read More</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-blog-post">
                        <div className="this-blog-cats">
                          <span className="category">Supplements</span>
                        </div>
                        <img src="public/storage/blogimage/c7e3ad94bc.jpg" alt="Blog Post 1" />
                        <div className="blog-post-meta">
                          <span className="date"> 04-01-2023  </span>
                          <span className="author">by Super Admin</span>
                        </div>
                        <div className="bp-texts">
                          <h3><a href="https://neighbourcaremedical.ca/posts/r9g/blog-post-3">How to Safely Dispose of Unused Medications</a></h3>
                          <p>This post could provide information on the importance of safely disposing of unused medications, including the potential dangers of keeping expired or unused medications in the home. The post could also provide tips on how to properly dispose of medications, including take-back programs and medication disposal pouches.</p>
                          <a href="https://neighbourcaremedical.ca/posts/r9g/blog-post-3">Read More</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-blog-post">
                        <div className="this-blog-cats">
                          <span className="category">Pharmacy</span>
                        </div>
                        <img src="public/storage/blogimage/f267b56077.jpg" alt="Blog Post 1" />
                        <div className="blog-post-meta">
                          <span className="date"> 04-01-2023  </span>
                          <span className="author">by Super Admin</span>
                        </div>
                        <div className="bp-texts">
                          <h3><a href="https://neighbourcaremedical.ca/posts/kep/blog-post-2">Everything You Need to Know About Eczema</a></h3>
                          <p>This post could provide an overview of eczema, including the different types of eczema, common triggers, and treatment options. The post could also provide tips on how to manage eczema symptoms, such as avoiding triggers and using moisturizers.</p>
                          <a href="https://neighbourcaremedical.ca/posts/kep/blog-post-2">Read More</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-blog-post">
                        <div className="this-blog-cats">
                          <span className="category">Medications</span>
                        </div>
                        <img src="public/storage/blogimage/b1020b5c9b.jpg" alt="Blog Post 1" />
                        <div className="blog-post-meta">
                          <span className="date"> 01-01-2023  </span>
                          <span className="author">by Super Admin</span>
                        </div>
                        <div className="bp-texts">
                          <h3><a href="https://neighbourcaremedical.ca/posts/rzy/blog-post-1">The Link Between Gut Health and Mental Health</a></h3>
                          <p>This post could explore the connection between gut health and mental health, including how gut bacteria can affect mood and anxiety levels. The post could also provide tips on how to improve gut health through diet and probiotics.</p>
                          <a href="https://neighbourcaremedical.ca/posts/rzy/blog-post-1">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination-wrapper">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta-content">
                <h3>Get the Best Medical Care Today</h3>
                <p>{"We're committed to providing you with the best possible care, every day. Our experienced and knowledgeable staff are dedicated to helping you achieve your health goals and improve your overall well-being. From medication management to consultations and immunizations, we offer a range of services to meet your unique healthcare needs. Contact us today to learn more about how we can help you get the best care, today."}</p>
                <a href="https://www.bookmypharmacy.com/9055537546" className="cta-button">Book an Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Blog