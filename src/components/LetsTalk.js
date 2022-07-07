import React from "react";
import letstalkimg from "../assets/Letstalkimg.png";

export default function LetsTalk() {
  return (
    <>
      <div className="letstalk__banner">
        <div className="letstalk__banner__section">
          <img
            src={letstalkimg}
            className="letstalk__banner__img"
            alt="letstalkimg"
          />
        </div>
        <div className="letstalk__banner__overlay">
          <div className="letstalk__banner__overlay__heading__top">
            Let's talk to us for help
          </div>
          <div className="letstalk__banner__overlay__section">
            <div className="letstalk__banner__overlay__content">
              <div className="letstalk__banner__overlay__content__left">
                <div className="letstalk__banner__overlay__content__left__heading">
                  Get in touch
                </div>
                <div className="letstalk__banner__overlay__content__left__input">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <textarea
                    name="Subject"
                    placeholder="Subject"
                    id=""
                    cols="30"
                    rows="8"
                  ></textarea>
                </div>
                <div className="letstalk__banner__overlay__content__left__button">
                  <button>Sumit</button>
                </div>
              </div>
              <div className="letstalk__banner__overlay__content__right">
                <div className="letstalk__banner__overlay__content__right__content">
                  <div className="letstalk__banner__overlay__content__right__content__heading">
                    Contact Info
                  </div>
                  <div className="letstalk__banner__overlay__content__right__content__letstalk__content">
                    <div className="letstalk__banner__overlay__content__right__content__heading__letstalk">
                      Let's talk
                    </div>
                    <div className="letstalk__banner__overlay__content__right__content__heading__small__text">
                      abcdqwert1234@gmail.com
                    </div>
                    <div className="letstalk__banner__overlay__content__right__content__heading__small__text">
                      123-12344453434
                    </div>
                  </div>
                  <div className="letstalk__banner__overlay__content__right__content__heading__visit__us__sec">
                    <div className="letstalk__banner__overlay__content__right__content__heading__visitus">
                      Visit Us.
                    </div>
                    <div className="letstalk__banner__overlay__content__right__content__heading__small__text">
                      Main Rd Shokat abad Samundri
                    </div>
                  </div>
                  <div className="letstalk__banner__overlay__content__right__svgs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.996"
                      height="21.99"
                      viewBox="0 0 10.996 21.99"
                    >
                      <path
                        id="facebook"
                        d="M15.176,3.651h2.008V.155A25.923,25.923,0,0,0,14.258,0C11.364,0,9.381,1.821,9.381,5.167v3.08H6.187v3.909H9.381V21.99H13.3V12.156h3.065l.487-3.909H13.3V5.554c0-1.13.305-1.9,1.879-1.9Z"
                        transform="translate(-6.187)"
                        fill="#fff"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21.99"
                      height="21.99"
                      viewBox="0 0 21.99 21.99"
                    >
                      <g
                        id="Group_539"
                        data-name="Group 539"
                        transform="translate(-1170.478 -698.132)"
                      >
                        <g
                          id="instagram_1_"
                          data-name="instagram (1)"
                          transform="translate(1170.478 698.132)"
                        >
                          <path
                            id="Path_148"
                            data-name="Path 148"
                            d="M214.866,212.933A1.933,1.933,0,1,1,212.933,211,1.933,1.933,0,0,1,214.866,212.933Zm0,0"
                            transform="translate(-201.937 -201.938)"
                            fill="#fff"
                          />
                          <path
                            id="Path_149"
                            data-name="Path 149"
                            d="M129.105,120h-6.528A2.58,2.58,0,0,0,120,122.577v6.528a2.58,2.58,0,0,0,2.577,2.577h6.528a2.58,2.58,0,0,0,2.577-2.577v-6.528A2.58,2.58,0,0,0,129.105,120Zm-3.264,9.062a3.221,3.221,0,1,1,3.221-3.221A3.225,3.225,0,0,1,125.841,129.062Zm3.694-6.271a.644.644,0,1,1,.644-.644A.644.644,0,0,1,129.535,122.792Zm0,0"
                            transform="translate(-114.846 -114.846)"
                            fill="#fff"
                          />
                          <path
                            id="Path_150"
                            data-name="Path 150"
                            d="M16.192,0H5.8A5.8,5.8,0,0,0,0,5.8V16.192a5.8,5.8,0,0,0,5.8,5.8H16.192a5.8,5.8,0,0,0,5.8-5.8V5.8A5.8,5.8,0,0,0,16.192,0Zm1.933,14.259a3.87,3.87,0,0,1-3.865,3.865H7.731a3.87,3.87,0,0,1-3.865-3.865V7.731A3.87,3.87,0,0,1,7.731,3.865h6.528a3.87,3.87,0,0,1,3.865,3.865Zm0,0"
                            transform="translate(0)"
                            fill="#fff"
                          />
                        </g>
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.682"
                      height="19.241"
                      viewBox="0 0 23.682 19.241"
                    >
                      <path
                        id="twitter"
                        d="M21.249,7.049a9.691,9.691,0,0,0,2.433-2.52h0a10.139,10.139,0,0,1-2.8.767,4.829,4.829,0,0,0,2.136-2.683,9.714,9.714,0,0,1-3.079,1.175,4.855,4.855,0,0,0-8.4,3.319,5,5,0,0,0,.112,1.107A13.745,13.745,0,0,1,1.649,3.134,4.855,4.855,0,0,0,3.141,9.623a4.8,4.8,0,0,1-2.194-.6v.053a4.878,4.878,0,0,0,3.89,4.771,4.828,4.828,0,0,1-1.273.16,4.285,4.285,0,0,1-.919-.083,4.9,4.9,0,0,0,4.536,3.383,9.759,9.759,0,0,1-6.02,2.07A9.183,9.183,0,0,1,0,19.313a13.672,13.672,0,0,0,7.448,2.179,13.724,13.724,0,0,0,13.8-14.443Z"
                        transform="translate(0 -2.25)"
                        fill="#fff"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.907"
                      height="22.906"
                      viewBox="0 0 22.907 22.906"
                    >
                      <g id="google" transform="translate(0)">
                        <g
                          id="Group_81"
                          data-name="Group 81"
                          transform="translate(0 6.385)"
                        >
                          <g id="Group_80" data-name="Group 80">
                            <path
                              id="Path_144"
                              data-name="Path 144"
                              d="M5.082,144.969l-3.9-2.253A11.378,11.378,0,0,0,1.2,152.844L5.082,150.6a6.9,6.9,0,0,1,0-5.632Z"
                              transform="translate(0 -142.717)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_83"
                          data-name="Group 83"
                          transform="translate(1.929 0)"
                        >
                          <g id="Group_82" data-name="Group 82">
                            <path
                              id="Path_145"
                              data-name="Path 145"
                              d="M60.164,2.808A11.453,11.453,0,0,0,43.127,5.092l3.9,2.254A6.939,6.939,0,0,1,57.078,6.079a.74.74,0,0,0,1-.049L60.2,3.9A.75.75,0,0,0,60.164,2.808Z"
                              transform="translate(-43.127 0)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_85"
                          data-name="Group 85"
                          transform="translate(11.951 9.461)"
                        >
                          <g id="Group_84" data-name="Group 84">
                            <path
                              id="Path_146"
                              data-name="Path 146"
                              d="M278.008,212.146a.751.751,0,0,0-.745-.666h-9.385a.747.747,0,0,0-.747.747v2.985a.747.747,0,0,0,.747.747h5.259a7.024,7.024,0,0,1-2.4,3.132l2.234,3.869a11.7,11.7,0,0,0,4.711-6.547A11.024,11.024,0,0,0,278.008,212.146Z"
                              transform="translate(-267.131 -211.479)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_87"
                          data-name="Group 87"
                          transform="translate(1.945 15.56)"
                        >
                          <g id="Group_86" data-name="Group 86">
                            <path
                              id="Path_147"
                              data-name="Path 147"
                              d="M55.81,350.064a6.928,6.928,0,0,1-8.435-2.263l-3.888,2.245a11.442,11.442,0,0,0,9.508,5.1,11.219,11.219,0,0,0,5.051-1.212Z"
                              transform="translate(-43.487 -347.801)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
