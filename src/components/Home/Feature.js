import React from "react";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <>
      {/* <!-- feature area start  --> */}
      <div className="tp-feature-area position-relative">
        <div
          className="tp-fe-bg d-none d-lg-block"
          style={{
            backgroundImage: `url(/assets/img/bg/bg-1.jpg)`,
          }}
        ></div>
        <div className="container-fluid p-0">
          <div className="row g-0 justify-content-end">
            <div className="col-xl-4 col-lg-12 tp-modify-width d-block">
              <div className="tp-section-title-sm-box tp-white-text grey-bg-3 hide-content">
                <span className="tp-section-subtitle-sm">
                  WE ELEVATE YOUR BUSINESS GROWTH
                </span>
                <h3 className="tp-section-title-sm tp-white-text-sm mb-5">
                  Nurture Success through Innovative and Contemporary Business
                  Strategies.
                </h3>
                <p>
                  Embark on a journey of success with our distinctive and modern
                  business strategies. At our core, we believe in cultivating
                  growth through innovative approaches tailored to the
                  contemporary business landscape. Our dedicated team is
                  committed to steering your enterprise towards prosperity by
                  employing unique strategies that align with the dynamic
                  demands of the market. Trust us to navigate the path to
                  success, ensuring your business not only survives but thrives
                  in the ever-evolving business ecosystem. Dive into a realm of
                  prosperity as we foster success through our cutting-edge and
                  unique business strategies. At the heart of our approach lies
                  a commitment to cultivating growth by embracing innovation
                  tailored to the demands of the modern business landscape. Our
                  seasoned team is dedicated to orchestrating a strategic
                  symphony that propels your enterprise forward. With an
                  unwavering focus on adaptability and creativity, we ensure
                  your business not only survives but flourishes in the dynamic
                  currents of the evolving market. Partner with us to craft a
                  success story that stands out in today's competitive business
                  world.
                </p>
                <Link className="tp-btn-sm" to="/about">
                  <span>
                    <svg
                      width="36"
                      height="8"
                      viewBox="0 0 36 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width="36"
                      height="8"
                      viewBox="0 0 36 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  View MOre
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- feature area end   --> */}
    </>
  );
};

export default Feature;
