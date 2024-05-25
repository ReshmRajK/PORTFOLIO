import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div style={{ marginTop: '100px', minHeight: '100vh' }} className='d-flex justify-content-evenly flex-wrap align-items-center w-100'>
      <div className='text-center' data-aos="zoom-in" data-aos-duration="3000">
        <h3><i className="fa-solid fa-location-dot fa-flip"></i></h3>
        <h5>Thumponamelathil</h5>
        <h5>Chathinamkulam</h5>
        <h5>Chandanathope</h5>
        <h5>(P.O)</h5>
        <h5>Kollam</h5>
        <h5>691014</h5>
      </div>

      <div className='text-center' data-aos="zoom-in-up" data-aos-duration="3000">
        <h3 className='mt-5'><i className="fa-solid fa-mobile-screen-button fa-beat"></i></h3>
        <h5>+91 8848896016</h5>

        <h3><i className="fa-solid fa-envelope-circle-check fa-flip mt-3"></i></h3>
        <h5>reshmarajmsm@gmail.com</h5>

        <div className='d-flex justify-content-center gap-5  mt-5'>
          <Link to={'https://github.com/ReshmRajK'}><h3><i className="fa-brands fa-github fa-fade"></i></h3></Link>
          <Link to={'https://www.linkedin.com/in/reshma-raj-k-9aa106212'}><h3><i className="fa-brands fa-linkedin-in fa-fade"></i></h3></Link>

        </div>
      </div>

    </div>
  )
}

export default Contact