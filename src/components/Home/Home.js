import React from 'react'
import './Home.scss'
import {
  HeaderPic,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Logo,
} from '../../assets/images'
import {
  Airbnb,
  Amazon,
  Facebook,
  Google,
  Grab,
  IconCalendar,
  IconCopy,
  IconFile,
  IconPlay,
  IconSquares,
  IconUser2,
  IconUsers,
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
        <section className="introduce">
          <div className="introduce-header">
            <h2 className="global-heading">
              All-In-One <span>Cloud Software.</span>
            </h2>
            <p className="introduce-desc global-text">
              Skilline is one powerful online software suite that combines all
              the tools needed to run a successful school or office.
            </p>
          </div>
          <div className="introduce-list">
            <div className="introduce-item">
              <div className="introduce-icon bg-purple">
                <img src={IconFile} alt="" />
              </div>
              <h3 className="introduce-title">
                Online Billing, Invoicing, & Contracts
              </h3>
              <p className="introduce-desc">
                Simple and secure control of your organization’s financial and
                legal transactions. Send customized invoices and contracts
              </p>
            </div>
            <div className="introduce-item">
              <div className="introduce-icon bg-yellow">
                <img src={IconCalendar} alt="" />
              </div>
              <h3 className="introduce-title">
                Easy Scheduling & Attendance Tracking
              </h3>
              <p className="introduce-desc">
                Schedule and reserve classrooms at one campus or multiple
                campuses. Keep detailed records of student attendance
              </p>
            </div>
            <div className="introduce-item">
              <div className="introduce-icon bg-blue">
                <img src={IconUsers} alt="" />
              </div>
              <h3 className="introduce-title">Customer Tracking</h3>
              <p className="introduce-desc">
                Automate and track emails to individuals or groups. Skilline’s
                built-in system helps organize your organization
              </p>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="about-header">
            <h2 className="global-heading">
              What is <span>Skilline?</span>
            </h2>
            <p className="global-text">
              Skilline is a platform that allows educators to create online
              classes whereby they can store the course materials online; manage
              assignments, quizzes and exams; monitor due dates; grade results
              and provide students with feedback all in one place.
            </p>
          </div>
          <div className="about-list">
            <div className="about-item">
              <img src={Img1} alt="" className="about-image" />
              <div className="about-content">
                <h3 className="about-title">FOR INSTRUCTORS</h3>
                <a href="#!" className="btn btn--outline">
                  Start a class today
                </a>
              </div>
            </div>
            <div className="about-item">
              <img src={Img2} alt="" className="about-image" />
              <div className="about-content">
                <h3 className="about-title">FOR STUDENTS</h3>
                <a href="#!" className="btn about-student">
                  Enter access code
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="skilline">
          <div className="skilline-content">
            <h2 className="skilline-heading">
              Everything you can do in a physical classroom,
              <span>you can do with Skilline</span>
            </h2>
            <p className="skilline-desc">
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <a href="#!" className="skilline-more">
              Learn more
            </a>
          </div>
          <div className="skilline-image">
            <img src={Img3} alt="" />
            <div className="skilline-play">
              <img src={IconPlay} alt="" />
            </div>
          </div>
        </section>
        <section className="feature">
          <div className="feature-header">
            <h2 className="global-heading">
              Our <span>Features</span>
            </h2>
            <p className="global-text">
              This very extraordinary feature, can make learning activities more
              efficient
            </p>
          </div>
          <div className="feature-main">
            <div className="feature-section">
              <div className="feature-image">
                <img src={Img4} alt="" />
              </div>
              <div className="feature-content">
                <h3 className="global-heading feature-heading">
                  A <span>user interface</span> designed for the classroom
                </h3>
                <ul className="feature-list">
                  <li className="feature-item">
                    <div className="feature-icon">
                      <img src={IconSquares} alt="" />
                    </div>
                    <p className="feature-text">
                      Teachers don’t get lost in the grid view and have a
                      dedicated Podium space.
                    </p>
                  </li>
                  <li className="feature-item">
                    <div className="feature-icon">
                      <img src={IconCopy} alt="" />
                    </div>
                    <p className="feature-text">
                      TA’s and presenters can be moved to the front of the
                      class.
                    </p>
                  </li>
                  <li className="feature-item">
                    <div className="feature-icon">
                      <img src={IconUser2} alt="" />
                    </div>
                    <p className="feature-text">
                      Teachers can easily see all students and class data at one
                      time.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="feature-section">
              <div className="feature-content">
                <h2 className="feature-heading global-heading">
                  <span>Tools</span> For Teachers And Learners
                </h2>
                <p className="feature-text">
                  Class has a dynamic set of teaching tools built to be deployed
                  and used during class. Teachers can handout assignments in
                  real-time for students to complete and submit.
                </p>
              </div>
              <div className="feature-image">
                <img src={Img5} alt="" />
              </div>
            </div>
            <div className="feature-section">
              <div className="feature-image">
                <img src={Img6} alt="" />
              </div>
              <div className="feature-content">
                <h3 className="global-heading feature-heading">
                  Assessments, <span>Quizzes</span>, Tests
                </h3>
                <div className="feature-text">
                  Easily launch live assignments, quizzes, and tests. Student
                  results are automatically entered in the online gradebook.
                </div>
              </div>
            </div>
            <div className="feature-section">
              <div className="feature-content">
                <h3 className="global-heading feature-heading">
                  <span>Class Management</span> Tools for Educators
                </h3>
                <div className="feature-text">
                  Class provides tools to help run and manage the class such as
                  Class Roster, Attendance, and more. With the Gradebook,
                  teachers can review and grade tests and quizzes in real-time.
                </div>
              </div>
              <div className="feature-image">
                <img src={Img7} alt="" />
              </div>
            </div>
            <div className="feature-section">
              <div className="feature-image">
                <img src={Img8} alt="" />
              </div>
              <div className="feature-content">
                <h3 className="global-heading feature-heading">
                  One-on-One <span>Discussions</span>
                </h3>
                <div className="feature-text">
                  Teachers and teacher assistants can talk with students
                  privately without leaving the Zoom environment.
                </div>
              </div>
            </div>
          </div>
          <a href="#!" className="btn feature-more">
            See more features
          </a>
        </section>
      </main>
    </div>
  )
}

export default Home
