import React from "react";

const AboutCompany = () => {
  return (
    <>
      <div className="about-details-page pt-140 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-details-info pr-65">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-25">
                    About our Company
                  </span>
                  <h2 className="tp-pt-size mb-40">
                    Our business delivers top-of-the-line services.
                  </h2>
                </div>
                <div className="about-tb-content">
                  <nav>
                    <div className="nav mb-30" id="nav-tab" role="tablist">
                      <button
                        className="nav-links active"
                        id="mission"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-mission"
                        type="button"
                        role="tab"
                        aria-controls="nav-mission"
                        aria-selected="true"
                      >
                        Our Mission
                      </button>

                      <button
                        className="nav-links"
                        id="nav-vission-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-vission"
                        type="button"
                        role="tab"
                        aria-controls="nav-vission"
                        aria-selected="false"
                      >
                        Our Vission
                      </button>
                      <button
                        className="nav-links"
                        id="nav-value-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-value"
                        type="button"
                        role="tab"
                        aria-controls="nav-value"
                        aria-selected="false"
                      >
                        Our Value
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-mission"
                      role="tabpanel"
                      aria-labelledby="nav-mission"
                    >
                      <p>
                        Our mission at OGT is clear - to understand customer
                        needs at the utmost level. We achieve this by providing
                        the best quality products, flexibility in sourcing,
                        competitive prices, on-time deliveries, and customized
                        solutions tailored to the unique needs of our customers.
                        At Orion General Trading, we are not just a business; we
                        are a partner committed to your success. Join us on a
                        journey of reliability, quality, and trust.
                      </p>

                      <p>
                        Every facet of our business is driven by a singular
                        focus — to provide unparalleled value and reliability to
                        our customers. OGT is dedicated to becoming a benchmark
                        for excellence in the world of logistics trading,
                        ensuring that our mission is not just a statement, but a
                        daily commitment to our clients and partners.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-vission"
                      role="tabpanel"
                      aria-labelledby="nav-vission-tab"
                    >
                      <p>
                        Our vision at OGT is clear—to attain a substantial
                        clientele and foster continuous growth. We are dedicated
                        to achieving this by delivering top-quality products at
                        the most competitive prices. This vision propels us
                        forward, driving our commitment to excellence and
                        innovation. At Orion General Trading, we don't just
                        provide products; we build relationships and contribute
                        to the success of your ventures. Join us in a journey
                        where quality, trust, and competitive edge converge.
                      </p>

                      <p>
                        Our commitment to excellence is integral to this vision,
                        as we aim to be leaders who contribute significantly to
                        the progress of the logistics trading landscape. At OGT,
                        we see ourselves as agents of positive change, staying
                        ahead of industry advancements and consistently
                        delivering exceptional value to our clients.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-value"
                      role="tabpanel"
                      aria-labelledby="nav-value-tab"
                    >
                      <p>
                        At Orion General Trading (OGT), our core values guide
                        our every action. Integrity is non-negotiable; we
                        prioritize honesty, transparency, and ethical practices
                        in all our dealings. Customer-centricity is ingrained in
                        our culture, driving us to understand and surpass our
                        clients' expectations. Additionally, we thrive on
                        innovation, leveraging creative solutions and
                        cutting-edge technologies to stay at the forefront of
                        the industry.
                      </p>

                      <p>
                        Collaboration and teamwork are essential, fostering an
                        environment where diverse talents converge to achieve
                        shared goals. OGT is unwavering in its commitment to
                        sustainability, promoting responsible practices that
                        positively impact the environment and the communities we
                        serve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="tp-about-img-box p-relative d-inline-block mb-30">
                <div className="about-page-img">
                  <img src="assets/img/about/about-page.jpg" alt="" />
                </div>
                <div className="dots-img">
                  <img src="assets/img/about/dot.jpg" alt="" />
                </div>
                <div className="about-info-box d-flex flex-column justify-content-center text-center">
                  <h3 className="box-title">10</h3>
                  <h4 className="box-subtitle">
                    Year of <br />
                    Experience
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
