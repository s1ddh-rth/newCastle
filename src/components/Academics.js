import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Description from "./Description";
import Video from "./Video";

const imageOne = "images/acad.png";
const imageTwo = "images/acad2.png";

function Academics() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <Link className="navbar-brand logo-text page-scroll" to="/">
          Patria & Co.
        </Link>
      </nav>
      <header id="header" className="header">
        <h1>Academic Solutions</h1>
        <div className="NewCarousel" style={{ width: "80%", margin: "auto" }}>
          <Carousel
            autoPlay={true}
            showStatus={false}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
          >
            <div>
              <img src={imageOne} alt="demoImage" />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <img src={imageTwo} alt="demoImage" />
              {/* <p className="legend">Legend 2</p> */}
            </div>
          </Carousel>
        </div>
      </header>
      <Description />
      <div className="basic-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Have a look at some of our course works</h2>
              <div class="embed-container jhu">
                <iframe
                  frameborder="0"
                  scrolling="no"
                  margin=""
                  width="100%"
                  height="600"
                  title="2019-nCoV"
                  src="https://public.tableau.com/views/Batch16Session1/SalesOptimizationDashboard?:showVizHome=no&:embed=true:language=en-US&:display_count=n&:origin=viz_share_link"
                ></iframe>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Video title="Sneak peak to one of our workshops" src="https://www.youtube.com/embed/P1_KTOulLrE" />
      <div className="slider-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>This is what our Students think of us</h3>

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
                      src="images/corporate/nurul.gif"
                      alt="alternative"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div className="testimonial-text">
                      Mas Harry is a mentor on our private Tableau Workshop
                      Support Group. He has a broad knowledge about Integrated
                      Tableau and R programming for advanced analytics and he
                      gives us a lot of lessons and homework to do, so that we
                      can built our own dashboard. Our first 5-hours workshop
                      (from overall 32 hours learning hour) includes all the
                      basic things about Tableu and we had a chance to build our
                      simple new dashboard.
                    </div>
                    <div className="testimonial-author">
                      <a href="https://www.linkedin.com/in/auliya/">
                        Nurul Auliya
                      </a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-wrapper">
                    <img
                      className="img-fluid"
                      src="images/students/azhari.jfif"
                      alt="alternative"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div className="testimonial-text">
                      I have known Harry since we were in high school and we
                      also have a seatmate. Harry is a very determined person,
                      full of enthusiasm, persistent in achieving his goals and
                      many other positive things. So it is not surprising if he
                      can reach the current position. Apart from all that, Harry
                      Patria is an asset for this nation
                    </div>
                    <div className="testimonial-author">
                      <a href="https://www.linkedin.com/in/maulana-azhari-lubis-89a08069/">
                        Maulana Azhari Lubis
                      </a>
                    </div>
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

export default Academics;
