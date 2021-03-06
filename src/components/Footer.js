import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logodark.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__columns">
          <div className="footer__container__col">
            <div className="footer__container__col__logo">
              <img
                src={logo}
                alt="logo"
                style={{ width: 150, marginBottom: 20 }}
              />
            </div>
            <div className="footer__container__col__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </div>
          </div>
          <div className="footer__container__col">
            <div className="footer__container__col__logo">Useful links</div>
            <Link
              to="/termandcondition"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="footer__container__col__text"
            >
              Terms & Condtions
            </Link>
            <Link
              to="/privacypolicy"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="footer__container__col__text"
            >
              Privacy Policy
            </Link>
            <Link
              to="/aboutus"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="footer__container__col__text"
            >
              About Us
            </Link>
          </div>
          <div className="footer__container__col">
            <div className="footer__container__col__logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28.134"
                height="27.963"
                viewBox="0 0 28.134 27.963"
              >
                <g
                  id="Group_540"
                  data-name="Group 540"
                  transform="translate(-1195.862 -1274.167)"
                >
                  <g
                    id="Group_343"
                    data-name="Group 343"
                    transform="translate(1195.862 1274.167)"
                  >
                    <path
                      id="Path_414"
                      data-name="Path 414"
                      d="M28.134,14.067a14.067,14.067,0,1,0-16.265,13.9v-9.83H8.3V14.067h3.573v-3.1c0-3.525,2.1-5.472,5.312-5.472a21.659,21.659,0,0,1,3.15.274V9.232H18.556a2.033,2.033,0,0,0-2.292,2.2v2.638h3.9l-.624,4.066H16.265v9.83a14.07,14.07,0,0,0,11.869-13.9"
                      fill="#5b58a5"
                    />
                  </g>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28.134"
                height="28.134"
                viewBox="0 0 28.134 28.134"
              >
                <g
                  id="Group_541"
                  data-name="Group 541"
                  transform="translate(-1253.155 -1274.167)"
                >
                  <g
                    id="Group_342"
                    data-name="Group 342"
                    transform="translate(1253.155 1274.167)"
                  >
                    <path
                      id="Path_410"
                      data-name="Path 410"
                      d="M78.749,14.067A14.067,14.067,0,1,1,64.682,0,14.067,14.067,0,0,1,78.749,14.067"
                      transform="translate(-50.615)"
                      fill="#5b58a5"
                    />
                    <path
                      id="Path_411"
                      data-name="Path 411"
                      d="M73.548,11a.967.967,0,1,0,.967.967A.967.967,0,0,0,73.548,11"
                      transform="translate(-55.115 -2.253)"
                      fill="#5b58a5"
                    />
                    <path
                      id="Path_412"
                      data-name="Path 412"
                      d="M67.345,12.558a4.062,4.062,0,1,0,4.062,4.062,4.066,4.066,0,0,0-4.062-4.062m0,6.663a2.6,2.6,0,1,1,2.6-2.6,2.6,2.6,0,0,1-2.6,2.6"
                      transform="translate(-53.21 -2.573)"
                      fill="#e9e9e9"
                    />
                    <path
                      id="Path_413"
                      data-name="Path 413"
                      d="M69.473,23.788H62.889a4.959,4.959,0,0,1-4.954-4.954V12.249a4.959,4.959,0,0,1,4.954-4.954h6.585a4.959,4.959,0,0,1,4.955,4.954v6.585a4.96,4.96,0,0,1-4.955,4.954M62.889,8.846a3.406,3.406,0,0,0-3.4,3.4v6.585a3.406,3.406,0,0,0,3.4,3.4h6.585a3.407,3.407,0,0,0,3.4-3.4V12.249a3.406,3.406,0,0,0-3.4-3.4Z"
                      transform="translate(-52.115 -1.494)"
                      fill="#e9e9e9"
                    />
                  </g>
                </g>
              </svg>
              <svg
                id="Group_341"
                data-name="Group 341"
                xmlns="http://www.w3.org/2000/svg"
                width="28.134"
                height="28.134"
                viewBox="0 0 28.134 28.134"
              >
                <path
                  id="Path_408"
                  data-name="Path 408"
                  d="M129.364,14.067A14.067,14.067,0,1,1,115.3,0a14.067,14.067,0,0,1,14.067,14.067"
                  transform="translate(-101.23)"
                  fill="#5b58a5"
                />
                <path
                  id="Path_409"
                  data-name="Path 409"
                  d="M124.759,11.239a6.338,6.338,0,0,1-1.551.442c.25-.041.615-.493.763-.676a2.855,2.855,0,0,0,.515-.939c.014-.027.023-.06,0-.081a.091.091,0,0,0-.083.007,7.924,7.924,0,0,1-1.84.7.122.122,0,0,1-.126-.033,1.505,1.505,0,0,0-.161-.165,3.265,3.265,0,0,0-.891-.545,3.1,3.1,0,0,0-1.367-.22,3.272,3.272,0,0,0-1.3.366,3.339,3.339,0,0,0-1.046.855,3.225,3.225,0,0,0-.625,1.251,3.392,3.392,0,0,0-.033,1.322c.01.073,0,.083-.064.073a9.826,9.826,0,0,1-6.321-3.217c-.074-.084-.114-.084-.175.006A3.206,3.206,0,0,0,111,14.175c.123.118.251.235.388.342a3.214,3.214,0,0,1-1.22-.342c-.074-.047-.111-.02-.118.064a1.962,1.962,0,0,0,.021.363,3.241,3.241,0,0,0,2,2.583,1.841,1.841,0,0,0,.406.124,3.62,3.62,0,0,1-1.2.037c-.087-.017-.12.026-.087.111a3.366,3.366,0,0,0,2.513,2.1c.114.02.227.02.342.046-.007.01-.014.01-.021.021a3.98,3.98,0,0,1-1.716.91,6.16,6.16,0,0,1-2.607.334c-.14-.021-.169-.019-.208,0s0,.057.04.093c.178.118.359.222.543.322a8.618,8.618,0,0,0,1.743.7,9.283,9.283,0,0,0,9.011-2.107,9.457,9.457,0,0,0,2.494-6.9c0-.1.117-.153.187-.206A6.1,6.1,0,0,0,124.74,11.5a.387.387,0,0,0,.081-.244v-.014c0-.041,0-.029-.063,0"
                  transform="translate(-102.92 -1.992)"
                  fill="#e8e8e8"
                />
              </svg>
              <svg
                id="Group_340"
                data-name="Group 340"
                xmlns="http://www.w3.org/2000/svg"
                width="28.133"
                height="28.134"
                viewBox="0 0 28.133 28.134"
              >
                <path
                  id="Path_416"
                  data-name="Path 416"
                  d="M165.912,0a14.062,14.062,0,0,0-5.739,26.9c-.017-.4-.034-.791-.021-1.188.046-1.368.214-1.838,1.978-9.254a.5.5,0,0,0-.04-.309,5.2,5.2,0,0,1-.137-3.466c.8-2.529,3.666-2.723,4.167-.636.309,1.291-.509,2.98-1.135,5.477-.521,2.061,1.905,3.526,3.977,2.021,1.912-1.386,2.654-4.71,2.513-7.066-.277-4.7-5.428-5.712-8.7-4.2-3.746,1.733-4.6,6.376-2.906,8.5.214.27.38.435.309.708-.11.425-.206.853-.323,1.275a.451.451,0,0,1-.668.3,3.834,3.834,0,0,1-1.565-1.172c-1.436-1.779-1.847-5.3.052-8.276a9.943,9.943,0,0,1,9.591-4.229,8.124,8.124,0,0,1,7.472,6.709,11.175,11.175,0,0,1-2.051,7.85c-2.433,3.018-6.378,3.219-8.2,1.366-.139-.142-.252-.309-.39-.478-.02.068-.037.126-.052.184-.874,3.423-.972,4.184-1.87,5.774-.138.244-.291.478-.44.714A14.068,14.068,0,1,0,165.912,0"
                  transform="translate(-151.846)"
                  fill="#5b58a5"
                />
                <path
                  id="Path_417"
                  data-name="Path 417"
                  d="M165.219,22.385c.015-.058.033-.115.053-.184.138.169.25.336.39.478,1.82,1.853,5.766,1.652,8.2-1.365a11.171,11.171,0,0,0,2.051-7.85,8.124,8.124,0,0,0-7.471-6.71,9.943,9.943,0,0,0-9.591,4.23c-1.9,2.979-1.488,6.5-.052,8.275a3.825,3.825,0,0,0,1.565,1.172.452.452,0,0,0,.669-.3c.117-.422.213-.851.322-1.275.071-.274-.095-.439-.309-.708-1.691-2.122-.839-6.766,2.907-8.5,3.268-1.512,8.418-.5,8.7,4.2.141,2.356-.6,5.681-2.513,7.066-2.073,1.5-4.5.04-3.979-2.02.627-2.5,1.445-4.186,1.136-5.477-.5-2.088-3.37-1.894-4.168.635a5.226,5.226,0,0,0,.137,3.467.513.513,0,0,1,.041.309c-1.764,7.416-1.933,7.886-1.978,9.255-.014.4,0,.792.021,1.187a14,14,0,0,0,1.564.6c.15-.236.3-.47.441-.714.9-1.59.995-2.35,1.869-5.774"
                  transform="translate(-153.019 -1.369)"
                  fill="#e8e8e8"
                />
              </svg>
              <svg
                id="Group_339"
                data-name="Group 339"
                xmlns="http://www.w3.org/2000/svg"
                width="28.134"
                height="28.134"
                viewBox="0 0 28.134 28.134"
              >
                <path
                  id="Path_418"
                  data-name="Path 418"
                  d="M230.594,14.067A14.067,14.067,0,1,1,216.527,0a14.067,14.067,0,0,1,14.067,14.067"
                  transform="translate(-202.46)"
                  fill="#5b58a5"
                />
                <path
                  id="Path_419"
                  data-name="Path 419"
                  d="M225.656,14.294a3.378,3.378,0,0,0-3.378-3.378h-8.637a3.378,3.378,0,0,0-3.379,3.378v4.019a3.378,3.378,0,0,0,3.379,3.378h8.637a3.378,3.378,0,0,0,3.378-3.378ZM220.577,16.6,216.7,18.521c-.152.082-.668-.028-.668-.2V14.387c0-.175.52-.285.672-.2l3.708,2.017c.156.088.319.313.161.4"
                  transform="translate(-204.058 -2.236)"
                  fill="#e9e9e9"
                />
              </svg>
            </div>
          </div>
          <div className="footer__container__col">
            <div className="footer__container__col__logo">Help Center</div>
            <Link
              to="/letstalk"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="footer__container__col__text"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
