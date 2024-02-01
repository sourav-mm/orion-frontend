import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- footer area start --> */}
      <footer>
        <div className="tp-footer__area black-bg">
          <div className="tp-footer">
            {/* <!-- main-footer start  --> */}
            <div className="tp-footer__main">
              <div className="container">
                <div className="tp-footer-border pt-60 pb-30">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="tp-footer__widget  pb-30">
                        <h3 className="tp-footer__widget-title">
                          About Us
                        </h3>
                        <ul>
                        <li>
                          <a href="#s">Proficiency</a>
                        </li>
                        <li>
                          <a href="#s">Adaptability</a>
                        </li>
                        <li>
                          <a href="#s">ConstaDependabilityrica</a>
                        </li>
                        <li>
                          <a href="#s">Ingenuity</a>
                        </li>
                        
                      </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="tp-footer__widget pb-30">
                        <h3 className="tp-footer__widget-title">Our Service</h3>
                        <ul>
                          <li>
                            <a href="#s">Versatility</a>
                          </li>
                          <li>
                            <a href="#s">Affordability </a>
                          </li>
                          <li> href="#s"
                            <a href="#s">Expertise  </a>
                          </li>
                          <li>
                            <a href="#s"> Reliability</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                      <div className="tp-footer__widget  pb-30">
                        <h3 className="tp-footer__widget-title">Quick Links</h3>
                        <ul>
                          <li>
                            <a href="#s">Our Team</a>
                          </li>
                          <li>
                            <a href="#s">Faq</a>
                          </li>
                          <li>
                            <a href="#s">Portfolio</a>
                          </li>
                          <li>
                            <a href="#s">Service</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="tp-footer__widget  pb-30">
                        <h3 className="tp-footer__widget-title">Contact Us</h3>
                        <ul>
                          <li>
                            <a href="#s">
                            11th FLOOR, FUJAIRAH TOWER, FUJAIRAH, UAE <br />
                            Warehouse: P.O. BOX 380575 RAS AL KHOR DUBAI
                            </a>
                          </li>
                          <li>
                            <a href="tel:+88015569569365"> Tel : +9714 283 1148 <br />
                            Mob : +97155 999 7283</a>
                          </li>
                          <li>
                            <a href="mailto:support@example.com">
                            sales@orionworld.co
                            </a>
                          </li>
                          
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- main footer end  --> */}
          </div>
        </div>

        {/* <!-- footer copy right --> */}
        <div className="top-footer-copyright pt-30 black-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-12">
                <div className="tp-copyrigh-text mb-30">
                  <span>
                     Orion General Trading LLC © {new Date().getFullYear()}. All rights reserved.
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="tp-footer-social-icon mb-30 text-md-end">
                  <ul>
                    <li>
                      <a href="#s">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#s">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#s">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#s">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#s">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer copyright end  --> */}
      </footer>
      {/* <!-- footer area end --> */}
    </>
  );
};

export default Footer;
