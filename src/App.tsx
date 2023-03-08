import { Header } from "./components";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="screen__wrapper">
            <img src="/images/illustration-1.svg" alt="hero image" />

            <div className="hero__text">
              <h2 className="hero__title">
                All your files in one secure location, accessible anywhere.
              </h2>
              <p>
                Fylo stores your most important files in one secure location.
                Access them wherever you need, share and collaborate with
                friends, family, and co-workers.
              </p>
              <form>
                <input type="text" placeholder="Enter your email..." />
                <button>Get Started</button>
              </form>
            </div>
          </div>
        </section>

        <section className="stay-productive">
          <div className="screen__wrapper">
            <img
              className="stay-productive__img"
              src="/images/illustration-2.svg"
              alt="stay productive image"
            />

            <div className="">
              <h3 className="stay-productive__title">
                Stay productive, wherever you are
              </h3>

              <p className="stay-productive__p">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className="stay-productive__p">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>

              <a href="#" className="stay-productive__link">
                <span className="stay-productive__link--container">
                  See how Fylo works <img src="/images/icon-arrow.svg" alt="" />
                </span>
              </a>

              <div className="stay-productive__quote">
                <svg width="13" height="12" xmlns="http://www.w3.org/2000/svg">
                  <text
                    transform="translate(-34 -25)"
                    fill="#07043B"
                    fill-rule="evenodd"
                    font-family="Helvetica"
                    font-size="45"
                  >
                    <tspan x="33" y="56">
                      “
                    </tspan>
                  </text>
                </svg>
                <p className="stay-productive__quote--p">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>

                <div className="stay-productive__quote--author">
                  <img src="/images/avatar-testimonial.jpg" alt="ceo picture" />
                  <div>
                    <h4>Kyle Burton</h4>
                    <span>Founder & CEO, Huddle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="early-access">
          <div className="screen__wrapper">
            <div className="early-access__text">
              <h3>Get early access today</h3>
              <p>
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
            </div>
            <form>
              <input type="text" placeholder="email@example.com" />
              <button>Get Started For Free</button>
            </form>
          </div>
        </section>

        <footer>
          <div className="screen__wrapper">
            <div className="logo">
              <svg
                width="166"
                height="49"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path id="a" d="M.014.03h93.96v48.29H.015z" />
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M0 14.13v.123l27.95 13.13L56 14.209v-.033L27.95 1 0 14.13zm10.077.062L27.95 5.795l17.877 8.397-17.877 8.396-17.874-8.396zM27.95 32.483L0 19.55v4.784l27.95 12.964L56 24.289v-4.784L27.95 32.483zm0 9.703L0 29.25v4.783L27.95 47 56 33.99v-4.784l-28.05 12.98z"
                    fill="#fff"
                  />
                  <g transform="translate(72)">
                    <mask id="b" fill="#fff">
                      <use xlinkHref="#a" />
                    </mask>
                    <path
                      d="M87.56 24.152a8.1 8.1 0 0 0-2.161-5.573 7.259 7.259 0 0 0-2.34-1.673 6.864 6.864 0 0 0-2.85-.601c-1.01 0-1.961.2-2.852.601a7.257 7.257 0 0 0-2.34 1.673 8.102 8.102 0 0 0-2.16 5.574 8.102 8.102 0 0 0 2.16 5.573 7.257 7.257 0 0 0 2.34 1.672 6.864 6.864 0 0 0 2.851.602c1.01 0 1.96-.2 2.852-.602a7.259 7.259 0 0 0 2.339-1.672 8.1 8.1 0 0 0 2.16-5.574zm6.415 0c0 1.932-.357 3.723-1.07 5.373a13.098 13.098 0 0 1-2.94 4.28c-1.247 1.205-2.71 2.156-4.388 2.854-1.678.699-3.468 1.048-5.369 1.048-1.9 0-3.683-.349-5.346-1.048a13.863 13.863 0 0 1-4.366-2.876 13.351 13.351 0 0 1-2.94-4.302c-.713-1.65-1.07-3.426-1.07-5.329 0-1.873.364-3.634 1.092-5.284a13.92 13.92 0 0 1 2.962-4.325 13.671 13.671 0 0 1 4.367-2.898 13.552 13.552 0 0 1 5.301-1.048c1.901 0 3.69.35 5.369 1.048 1.678.698 3.14 1.65 4.388 2.854 1.248 1.204 2.228 2.638 2.94 4.302.713 1.665 1.07 3.449 1.07 5.351zM64.258 36.905a8.6 8.6 0 0 1-1.715.58c-.638.148-1.3.222-1.982.222a9.84 9.84 0 0 1-2.74-.379 6.003 6.003 0 0 1-2.295-1.226c-.653-.565-1.173-1.3-1.56-2.207-.385-.907-.578-2-.578-3.277V.029h6.549v29.474c0 1.07.215 1.806.646 2.207.43.401.943.602 1.537.602.742 0 1.455-.223 2.138-.669v5.262zM50.492 11.22L38.908 41.854c-.861 2.289-1.99 3.939-3.386 4.95-1.396 1.01-3.06 1.515-4.99 1.515-.297 0-.623-.022-.98-.066a7.352 7.352 0 0 1-1.025-.201l-2.138-5.975a8.486 8.486 0 0 0 1.56.557c.534.134 1.039.201 1.514.201 1.01 0 1.93-.23 2.762-.691.832-.46 1.47-1.315 1.916-2.564l.891-2.586-9.935-25.773h6.995l5.925 16.588 5.57-16.588h6.905zM23.538 7.342H6.786v8.294h16.529v5.618H6.785v15.784H.015V1.412h23.524v5.93z"
                      fill="#fff"
                      mask="url(#b)"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <div className="footer__options">
              <div className="">
                <p>
                  <svg
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"
                      fill="#FFF"
                      fill-rule="evenodd"
                    />
                  </svg>
                  Phone: +1-543-123-4567
                </p>
                <p>
                  <svg
                    width="20"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z"
                      fill="#FFF"
                      fill-rule="evenodd"
                    />
                  </svg>
                  example@fylo.com
                </p>
              </div>

              <ul>
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
              <ul>
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>

              <div className="social-media">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
