import React from "react";
import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <footer>
      <div className="tp-footer__area black-bg">
        <div className="tp-footer">
          {/* <!-- main-footer start  --> */}
          <div className="tp-footer__main">
            <div className="container">
              <div className="tp-footer-border pt-100 pb-70">
                <div className="pb-30 pb-70">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="footer-logo mb-30">
                        <Link to="/" href="#">
                          <img src="/assets/img/logo/logo.png" alt="" />
                        </Link>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">
                        About Us
                      </h3>
                      <ul>
                        <li>
                          <a href="#d">Proficiency</a>
                        </li>
                        <li>
                          <a href="#d">Adaptability</a>
                        </li>
                        <li>
                          <a href="#d">ConstaDependabilityrica</a>
                        </li>
                        <li>
                          <a href="#d">Ingenuity</a>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">
                        Our Service
                      </h3>
                      <ul>
                        <li>
                          <a href="#d">Versatility</a>
                        </li>
                        <li>
                          <a href="#d"> Affordability</a>
                        </li>
                        <li>
                          <a href="#d">Expertise </a>
                        </li>
                        <li>
                          <a href="#d"> Reliability</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 ">
                    <div className="tp-footer__widget tp-footer__2  pb-30">
                      <h3 className="tp-footer__widget-title text-white">
                        Quick Links
                      </h3>
                      <ul>
                        <li>
                          <a href="#d">Our Team</a>
                        </li>
                        <li>
                          <a href="#d">Faq</a>
                        </li>
                        <li>
                          <a href="#d">Portfolio</a>
                        </li>
                        <li>
                          <a href="#d">Service</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2  pb-30">
                      <h3 className="tp-footer__widget-title text-white">
                        Contact Us{" "}
                      </h3>
                      <ul>
                        <li>
                          <a href="#d">
                            11th FLOOR, FUJAIRAH TOWER, FUJAIRAH, UAE <br />
                            Warehouse: P.O. BOX 380575 RAS AL KHOR DUBAI
                          </a>
                        </li>
                        <li>
                          <a href="tel:+88015569569365">
                            Tel : +9714 283 1148 <br />
                            Mob : +97155 999 7283
                          </a>
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
      <div className="top-footer-copyright pt-30 pb-30 black-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-copyrigh-text text-center text-white">
                <span>
                Orion General Trading LLC © {new Date().getFullYear()}. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer copyright end  --> */}
    </footer>
  );
};

export default FooterThree;
