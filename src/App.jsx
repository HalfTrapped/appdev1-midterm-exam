import React, { useState } from 'react';
// Import images from src/assets/images
import logo from './assets/images/logo.png';
import sliderDec from './assets/images/slider-dec.png';
import headingLineDec from './assets/images/heading-line-dec.png';
import pricingTable01 from './assets/images/pricing-table-01.png';
import aboutRightDec from './assets/images/about-right-dec.png';
import whiteLogo from './assets/images/white-logo.png';
import quoteImage from './assets/images/quote.png';
import clientImage from './assets/images/client-image.jpg';

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  function handleToggleModal() {
    setToggleModal(!toggleModal);
  }

  return (
    <>
      {/* Preloader */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <img src={logo} alt="Chain App Dev" />
                </a>
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="#services">Services</a></li>
                  <li className="scroll-to-section"><a href="#about">About</a></li>
                  <li className="scroll-to-section"><a href="#pricing">Pricing</a></li>
                  <li className="scroll-to-section"><a href="#newsletter">Newsletter</a></li>
                  <li>
                    <div className="gradient-button">
                      <a id="modal_trigger" href="#modal">
                        <i className="fa fa-sign-in-alt"></i> Sign In Now
                      </a>
                    </div>
                  </li>
                </ul>
                <a className='menu-trigger'><span>Menu</span></a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Modal */}
      <div id="modal" className="popupContainer" style={{ display: 'none' }}>
        <div className="popupHeader">
          <span className="header_title">Login</span>
          <span className="modal_close"><i className="fa fa-times"></i></span>
        </div>
        <section className="popupBody">
          <div className="social_login">
            <div>
              <a href="#" className="social_box fb">
                <span className="icon"><i className="fab fa-facebook"></i></span>
                <span className="icon_title">Connect with Facebook</span>
              </a>
              <a href="#" className="social_box google">
                <span className="icon"><i className="fab fa-google-plus"></i></span>
                <span className="icon_title">Connect with Google</span>
              </a>
            </div>
            <div className="centeredText"><span>Or use your Email address</span></div>
            <div className="action_btns">
              <div className="one_half"><a href="#" id="login_form" className="btn">Login</a></div>
              <div className="one_half last"><a href="#" id="register_form" className="btn">Sign up</a></div>
            </div>
          </div>

          <div className="user_login">
            <form>
              <label>Email / Username</label>
              <input type="text" />
              <br />
              <label>Password</label>
              <input type="password" />
              <br />
              <div className="checkbox">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Remember me on this computer</label>
              </div>
              <div className="action_btns">
                <div className="one_half">
                  <a href="#" className="btn back_btn">
                    <i className="fa fa-angle-double-left"></i> Back
                  </a>
                </div>
                <div className="one_half last">
                  <a href="#" className="btn btn_red">Login</a>
                </div>
              </div>
            </form>
            <a href="#" className="forgot_password">Forgot password?</a>
          </div>

          <div className="user_register">
            <form>
              <label>Full Name</label>
              <input type="text" />
              <br />
              <label>Email Address</label>
              <input type="email" />
              <br />
              <label>Password</label>
              <input type="password" />
              <br />
              <div className="checkbox">
                <input id="send_updates" type="checkbox" />
                <label htmlFor="send_updates">Send me occasional email updates</label>
              </div>
              <div className="action_btns">
                <div className="one_half">
                  <a href="#" className="btn back_btn">
                    <i className="fa fa-angle-double-left"></i> Back
                  </a>
                </div>
                <div className="one_half last">
                  <a href="#" className="btn btn_red">Register</a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* Main Banner */}
      <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <h2>Get The Latest App From App Stores</h2>
                <p>Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great website to download free CSS templates.</p>
                <div className="white-button first-button scroll-to-section">
                  <a href="#contact">Free Quote <i className="fab fa-apple"></i></a>
                </div>
                <div className="white-button scroll-to-section">
                  <a href="#contact">Free Quote <i className="fab fa-google-play"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src={sliderDec} alt="Slider Decoration" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h4>Amazing <em>Services &amp; Features</em> for you</h4>
                <img src={headingLineDec} alt="Heading Line Decoration" />
                <p>If you need the greatest collection of HTML templates for your business, please visit <a rel="nofollow noreferrer" href="https://www.toocss.com/" target="_blank" >TooCSS</a> Blog. If you need to have a contact form PHP script, go to <a href="https://templatemo.com/contact" target="_parent" rel="noreferrer">our contact page</a> for more information.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="service-item first-service">
                <h4>App Maintenance</h4>
                <p>You are not allowed to redistribute this template ZIP file on any other website.</p>
                <div className="text-button"><a href="#">Read More <i className="fa fa-arrow-right"></i></a></div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item second-service">
                <h4>Rocket Speed of App</h4>
                <p>You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit this layout.</p>
                <div className="text-button"><a href="#">Read More <i className="fa fa-arrow-right"></i></a></div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item third-service">
                <h4>Multi Workflow Idea</h4>
                <p>If this template is beneficial for your work, please support us <a rel="nofollow" href="https://paypal.me/templatemo" target="_blank">a little via PayPal</a>. Thank you.</p>
                <div className="text-button"><a href="#">Read More <i className="fa fa-arrow-right"></i></a></div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item fourth-service">
                <h4>24/7 Help &amp; Support</h4>
                <p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.</p>
                <div className="text-button"><a href="#">Read More <i className="fa fa-arrow-right"></i></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h4>About <em>What We Do</em> &amp; Who We Are</h4>
                <img src={headingLineDec} alt="Heading Line Decoration" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4><a href="#">Maintance Problems</a></h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4><a href="#">24/7 Support &amp; Help</a></h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4><a href="#">Fixing Issues About</a></h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4><a href="#">Co. Development</a></h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor idunte ut labore et dolore adipiscing magna.</p>
                  <div className="gradient-button">
                    <a href="#">Start 14-Day Free Trial</a>
                  </div>
                  <span>*No Credit Card Required</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image">
                <img src={aboutRightDec} alt="About Right Decoration" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div id="clients" className="the-clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>Check What <em>The Clients Say</em> About Our App Dev</h4>
                <img src={headingLineDec} alt="Heading Line Decoration" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    {/* Client reviews with nested structure omitted for brevity - follow same pattern */}
                    <div className="col-lg-7 align-self-center">
                      <div className="menu">
                        {/* First review */}
                        <div className="first-thumb active">
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>David Martino Co</h4>
                                <span className="date">30 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">Financial Apps</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                <span className="rating">4.8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Additional reviews omitted for brevity */}
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ul className="nacc">
                        <li className="active">
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={quoteImage} alt="Quote Icon" />
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit ...”</p>
                                  </div>
                                  <div className="down-content">
                                    <img src={clientImage} alt="Client David Martino" />
                                    <div className="right-content">
                                      <h4>David Martino</h4>
                                      <span>CEO of David Company</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* Additional client content elements omitted for brevity */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="pricing-tables">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>We Have The Best Pre-Order <em>Prices</em> You Can Get</h4>
                <img src={headingLineDec} alt="Heading Line Decoration" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$12</span>
                <h4>Standard Plan App</h4>
                <div className="icon">
                  <img src={pricingTable01} alt="Pricing Icon" />
                </div>
                <ul>
                  <li>Lorem Ipsum Dolores</li>
                  <li>20 TB of Storage</li>
                  <li className="non-function">Life-time Support</li>
                  <li className="non-function">Premium Add-Ons</li>
                  <li className="non-function">Fastest Network</li>
                  <li className="non-function">More Options</li>
                </ul>
                <div className="border-button"><a href="#">Purchase This Plan Now</a></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-pro">
                <span className="price">$25</span>
                <h4>Business Plan App</h4>
                <div className="icon">
                  <img src={pricingTable01} alt="Pricing Icon" />
                </div>
                <ul>
                  <li>Lorem Ipsum Dolores</li>
                  <li>50 TB of Storage</li>
                  <li>Life-time Support</li>
                  <li>Premium Add-Ons</li>
                  <li className="non-function">Fastest Network</li>
                  <li className="non-function">More Options</li>
                </ul>
                <div className="border-button"><a href="#">Purchase This Plan Now</a></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$66</span>
                <h4>Premium Plan App</h4>
                <div className="icon">
                  <img src={pricingTable01} alt="Pricing Icon" />
                </div>
                <ul>
                  <li>Lorem Ipsum Dolores</li>
                  <li>120 TB of Storage</li>
                  <li>Life-time Support</li>
                  <li>Premium Add-Ons</li>
                  <li>Fastest Network</li>
                  <li>More Options</li>
                </ul>
                <div className="border-button"><a href="#">Purchase This Plan Now</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>Join our mailing list to receive the news &amp; latest trends</h4>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-3">
              <form id="search" action="#" method="GET">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <input type="email" name="address" className="email" placeholder="Email Address..." autoComplete="on" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <button type="submit" className="main-button">
                        Subscribe Now <i className="fa fa-angle-right"></i>
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Contact Us</h4>
                <p>Rio de Janeiro - RJ, 22795-008, Brazil</p>
                <p><a href="#">010-020-0340</a></p>
                <p><a href="#">info@company.co</a></p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>About Us</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Pricing</a></li>
                </ul>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Pricing</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Free Apps</a></li>
                  <li><a href="#">App Engine</a></li>
                  <li><a href="#">Programming</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">App News</a></li>
                </ul>
                <ul>
                  <li><a href="#">App Dev Team</a></li>
                  <li><a href="#">Digital Web</a></li>
                  <li><a href="#">Normal Apps</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>About Our Company</h4>
                <div className="logo">
                  <img src={whiteLogo} alt="White Logo" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="copyright-text">
                <p>
                  Copyright © 2022 Chain App Dev Company. All Rights Reserved. <br />
                  Design: <a href="https://templatemo.com/" target="_blank" rel="noreferrer" title="css templates">TemplateMo</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
