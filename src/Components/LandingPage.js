import React from 'react'
import './css/LandingPage.css'
import Login from './Login'

export default function LandingPage() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div id="home-top" className="main">
        <div className="right">
          <img className='frame-img' src={require('./images/softwaredesign.webp')} alt='Entering and Leaving' />
        </div>
        <div className="left">
          <h2>ManageIng - Your One Stop Solution For Management Tasks</h2>
          <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique accomplish it all with ManageIng.
          </p>
          <p><button type="button" className="custom-btn btn-6" onClick={() => setModalShow(true)}>Get Started Now</button>
            <Login
              show={modalShow}
              onHide={() => setModalShow(false)}
            /></p>
        </div>
      </div>
      {/* Lower Body */}
      <div className='body-home'>
        <main>
          <section className="section-home">
            <div className="features-home">
              <div className="feature-home feature-one-home">
                <h2 className="feature__title-home">Supervisor</h2>
                <p className="feature__desc-home">Monitors activity to identify project roadblocks</p>
                <img className="feature__img-home" src="https://kellychi22.github.io/frontend-mentor-solutions/10-four-card-feature-section/images/icon-supervisor.svg" alt="" />
              </div>
              <div className="wrapper-home">
                <div className="feature-home feature-two-home">
                  <h2 className="feature__title-home">IT Leaders</h2>
                  <p className="feature__desc-home">Secure all leave and accommodation data in one platform, Cloud-based.</p>
                  <img className="feature__img-home" src="https://kellychi22.github.io/frontend-mentor-solutions/10-four-card-feature-section/images/icon-team-builder.svg" alt="" />
                </div>
                <div className="feature-home feature-three-home">
                  <h2 className="feature__title-home">Administrators</h2>
                  <p className="feature__desc-home">Automate the handling of daily leave of absence and accommodation tasks.</p>
                  <img className="feature__img-home" src="https://kellychi22.github.io/frontend-mentor-solutions/10-four-card-feature-section/images/icon-karma.svg" alt="" />
                </div>
              </div>
              <div className="feature-home feature-four-home">
                <h2 className="feature__title-home">HR Leaders</h2>
                <p className="feature__desc-home">Bring leave of absence and accommodation 100% in-house to own the end-to-end employee experience.</p>
                <img className="feature__img-home" src="https://kellychi22.github.io/frontend-mentor-solutions/10-four-card-feature-section/images/icon-calculator.svg" alt="" />
              </div>
            </div>
          </section>
        </main>
      </div>


      {/* Footer Part */}
      <footer className="footer-section-home">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta-home">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text-home">
                    <h4>Find us</h4>
                    <span>Indian Institute of Information Technology, Sonepat</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text-home">
                    <h4>Call us</h4>
                    <span>+91 8950982811</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>s
                  <div className="cta-text-home">
                    <h4>Mail us</h4>
                    <span>weare305restishistory@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content-home pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget-home">
                  <div className="footer-logo">
                    <a href="#home-top"><img src={require('./images/305webDesigners.png')} className="img-fluid" alt="logo" /></a>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/mohit-kukreja-347683229/" target={"_blank"}><img src={require("./images/Linkedin.png")} style={{width:"30px"}} alt="" /></a>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/imprince26/" target={"_blank"}><img src={require("./images/Linkedin.png")} style={{width:"30px"}} alt="" /></a>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/ujjwal-kumar-pandey-145612237/" target={"_blank"}><img src={require("./images/Linkedin.png")} style={{width:"30px"}} alt="" /></a>

                    <a href="#home-top"><i className="fab fa-twitter twitter-bg"></i></a>
                    <a href="#home-top"><i className="fab fa-google-plus-g google-bg"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget-home">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><a href="#home-top">Home</a></li>
                    <li><a href="#home-top">about</a></li>
                    <li><a href="#home-top">services</a></li>
                    <li><a href="#home-top">portfolio</a></li>
                    <li><a href="#home-top">Contact</a></li>
                    <li><a href="#home-top">About us</a></li>
                    <li><a href="#home-top">Our Services</a></li>
                    <li><a href="#home-top">Expert Team</a></li>
                    <li><a href="#home-top">Contact us</a></li>
                    <li><a href="#home-top">Latest News</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget-home">
                  <div className="footer-widget-heading">
                    <h3>Reach Us</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>For any queries and suggestions please contact us at:</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Sector-15,Sonipat,131001" readOnly />
                      {/* <button><i className="fa-regular fa-paper-plane-top"></i></button> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright &copy; 2022, All Right Reserved.</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li><a href="#home-top">Home</a></li>
                    <li><a href="#home-top">Terms</a></li>
                    <li><a href="#home-top">Privacy</a></li>
                    <li><a href="#home-top">Policy</a></li>
                    <li><a href="/">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}