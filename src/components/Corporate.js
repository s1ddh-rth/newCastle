import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Video from "./Video";
// import Partners from './Partners';

function Corporate() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <Link className="navbar-brand logo-text page-scroll" to="/">
          Patria & Co.
        </Link>
      </nav>
      <header id="header" className="header">
        <h1>Corporate Solutions</h1>
      </header>
      <Card />
      <div className="basic-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Some of the many solutions our team has worked on</h2>
              <div class="embed-container jhu">
                <iframe
                  frameborder="0"
                  scrolling="no"
                  margin=""
                  width="100%"
                  height="600"
                  title="2019-nCoV"
                  src="https://public.tableau.com/views/FMERMBatch2Session1/Dashboard1?:showVizHome=no&:embed=true:language=en-US&:display_count=n&:origin=viz_share_link"
                ></iframe>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Video title="Corporate solutions designed specifically for You" src="https://www.youtube.com/embed/twPUo56A5Yw" />
      <div className="slider-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Have a look at what our Clients have to say about us</h3>

              <Carousel
                autoPlay={true}
                showIndicators={false}
                showStatus={false}
                infiniteLoop={true}
                interval={5000}
                showThumbs={false}
              >
                <div className="swiper-slide">
                  <div className="image-wrapper">
                    <img
                      className="img-fluid"
                      src="images/corporate/muhammadRully.jfif"
                      alt="alternative"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div className="testimonial-text">
                      Harry is more than capable of bringing us to the world of
                      business analytics. He has also strong background as an
                      economist and business management scientist. He
                      enlightened us about what descriptive analytics could do
                      and take us. From visualization, analysis, until
                      storytelling process to explain the insight. I can't wait
                      for another surprise from him
                    </div>
                    <div className="testimonial-author">
                      <a href="https://www.linkedin.com/in/rully-shobar/">
                        Muhammad Rully Chaerul Shobar
                      </a><br />
                    </div>
                    Senior Reservoir Engineer of EOR Planning and Evaluation at PT Pertamina Hulu Indonesia

                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-wrapper">
                    <img
                      className="img-fluid"
                      src="images/corporate/ferry.jfif"
                      alt="alternative"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div className="testimonial-text">
                      Thanks Pak Dr. Harry Patria telah membantu dalam
                      meningkatkan kompetensi Auditor dan Risk Advisory Team
                      kami Terkait Data Analytics, Data Analytics baik
                      Descriptive dan Diagnostics adalah core competencies
                      seorang Internal Auditor dan Risk Analyst untuk membantu
                      Perusahaan memberikan rekomendasi yang optimal untuk
                      kemajuan Bisnis. pelatihannya sangat sangat Bermanfaat dan
                      segera kami implementasikan dalam Proses Audit Kami.
                    </div>
                    <div className="testimonial-author">
                      <a href="https://www.linkedin.com/in/fery-iriyawan-se-qia-cisa-cfe-ermcp-cia-38585a52/">
                        Fery Iriyawan
                      </a>
                    </div>
                    Head Of Group Internal Audit & Risk Advisory at PT Delta Dunia Makmur TBK
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-wrapper">
                    <img
                      className="img-fluid"
                      src="images/corporate/benny.jfif"
                      alt="alternative"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div className="testimonial-text">
                      Dr. Harry is a passionate and enthusiastic person. As a
                      mentor of Data Science and Business Intelligence, he is
                      willing to share his knowledge with others. With a lot of
                      experience, he easily explained the insights from the
                      existing business case that we are currently discussed.
                      Nice to meet you, Dr. Harry. I hope we can continue with
                      another project. Thank you.{" "}
                    </div>
                    <div className="testimonial-author">
                      <a href="https://www.linkedin.com/in/bmachsan/">
                        Beny Maulana Achsan
                      </a>
                    </div>
                    Information Technology Executive at PT Paragon Technology and Innovation
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-wrapper">
                    <img
                      className="img-fluid"
                      src="images/corporate/faris.jfif"
                      alt="alternative"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div className="testimonial-text">
                      Mr. Harry is very enthusiastic and full of curiosity, and
                      he always willing to share his knowledge with others. So
                      when our office is developing Business intelligence
                      platform using Tableau, I directly asked to invite Mr.
                      Harry to be a mentor for all of us, not only to make the
                      application but also shares how to create and provide tips
                      & tricks that others might not give. That value makes us
                      satisfied in working with Mr. Harry
                    </div>
                    <div className="testimonial-author">
                      <a href="https://www.linkedin.com/in/faris-muhtadi/">
                        Faris Muhtadi
                      </a>
                    </div>
                    Operation and Maintenance Management Gas Transmission at PT Perusahaan Gas Negara (Persero) Tbk
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-wrapper">
                    <img
                      className="img-fluid"
                      src="images/corporate/rizky.jfif"
                      alt="alternative"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div className="testimonial-text">
                      Harry is our partner as Chief Economist & Strategy at PT.
                      Indeks Komoditas Indonesia, who brings up a new approach
                      to data analytics project workshop. Aims to focus on
                      delivering know-how to our clients and facilitating
                      cutting edge approach of advanced analytics so as to they
                      are able to develop any cases in different contextual
                      settings
                    </div>
                    <div className="testimonial-author">
                      <a href="https://www.linkedin.com/in/rizky-agung-prasetyo/">
                        Rizky Agung Prasetyo
                      </a>
                    </div>
                    Key Account Manager OEM di PT Castrol Indonesia
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Corporate;
