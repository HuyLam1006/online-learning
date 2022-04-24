import React from 'react'
import './Home.scss'
import { HeaderPic, Logo, LogoLine } from '../../assets/images'
import {
  Airbnb,
  Amazon,
  Facebook,
  Google,
  Grab,
  IconPlay,
  Netflix,
} from '../../assets/svg'

const Home = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-container">
          <div className="header-top">
            <img srcSet={Logo} alt="" className="header-logo" />
            <ul className="menu">
              <li className="menu-item">
                <a href="#!" className="menu-link">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="#!" className="menu-link">
                  Careers
                </a>
              </li>
              <li className="menu-item">
                <a href="#!" className="menu-link">
                  Blog
                </a>
              </li>
              <li className="menu-item">
                <a href="#!" className="menu-link">
                  About Us
                </a>
              </li>
            </ul>
            <div className="header-buttons">
              <a href="#!" className="btn btn--white">
                Login
              </a>
              <a href="#!" className="btn btn--primary">
                Sign Up
              </a>
            </div>
          </div>
          <div className="header-main">
            <div className="header-content">
              <h1 className="header-heading">
                Studying <span>Online is now much easier</span>
              </h1>
              <p className="header-desc">
                Skilline is an interesting platform that will teach you in more
                an interactive way
              </p>
              <div className="header-actions">
                <a href="#!" className="btn btn--primary">
                  Join for free
                </a>
                <a href="#!" className="watch">
                  <div className="watch-icon">
                    <img src={IconPlay} alt="" />
                  </div>
                  <span>Watch how it works</span>
                </a>
              </div>
            </div>
            <div className="header-image">
              <img srcSet={`${HeaderPic} 1.2x`} alt="" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="company">
          <h3 className="company-heading">
            Trusted by 5,000+ Companies Worldwide
          </h3>
          <div className="company-logos">
            <div className="company-logo">
              <img src={Google} alt="" />
            </div>
            <div className="company-logo">
              <img src={Netflix} alt="" />
            </div>
            <div className="company-logo">
              <img src={Airbnb} alt="" />
            </div>
            <div className="company-logo">
              <img src={Amazon} alt="" />
            </div>
            <div className="company-logo">
              <img src={Facebook} alt="" />
            </div>
            <div className="company-logo">
              <img src={Grab} alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
