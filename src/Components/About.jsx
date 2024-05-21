import React, { useEffect } from 'react'
import profile from '../assets/profile.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div style={{ marginTop: '100px', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center flex-wrap w-100'>
      <div className="container">
        <div className="row" data-aos="flip-left" data-aos-duration="3000">
          <div className="col-lg-6 col-md-6 ">

            <div className="row align-items-center">

              <div className="col-lg-5 col-md-5">
                <img src={profile} alt="Sorry...!!!" width={'300px'} height={'250px'} className='image_section me-3' />
              </div>

              <div className="col-lg-2 col-md-2"></div>

              <div className="col-lg-5 col-md-5">
                <h5>Name:<span className="fs-6">Reshma Raj K</span></h5>
                <h5>Profile:<span className="fs-6">Frond End Developer</span></h5>
                <h5>Email:<span className="fs-6">reshmarajmsm@gmail.com</span></h5>
                <h5>Phone:<span className="fs-6">8848896016</span></h5>
              </div>

            </div>

            <div className='p-5'>
              <h3>SKILLS</h3>
              <h6> HTML , CSS , BOOTSTRAP , REACT , REDUX , JAVASCRIPT , NODE , EXPRESS , MONGODB , REST APIS , GITHUB , POSTMAN</h6>

            </div>

          </div>
          <div className="col-lg-1 col-md-1"></div>

          <div className="col-lg-5 col-md-5">
            <h3>About Me</h3>
            <p>I am a Web Developer with an amazing ability to develop website that are both functional and
              aesthetically pleasing. I have a strong understanding of web standards and best practices,and
              I am passionate about creating websites that users will find easy to use and visually appealing.
              I always enjoy a challenge,and can work well under pressure;my other strengths are a strong commitment
              to customer services,and attention to details.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About