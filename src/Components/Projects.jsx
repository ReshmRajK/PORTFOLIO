import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import PORTFOLIO from '../assets/portfolio.png'
import MENUAPP from '../assets/menu-app.png'
import PROJECTFAIR from '../assets/projectfair.png'
import QUIZAPP from '../assets/quiz-app.png'
import CALCULATOR from '../assets/calcu.png'
import BEAUTY from '../assets/beauty-app.png'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Projects() {

  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <div style={{ marginTop: '100px', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center flex-wrap w-100'>
      <div>
        <div className='d-flex justify-content-center align-items-center flex-wrap gap-4 mb-5' data-aos="fade-down" data-aos-duration="3000">
          <Card className='shadow card card_image' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={PORTFOLIO} width={'100%'} height={'150px'} />
            <Card.Body>
              <Card.Title className='caption'>PORTFOLIO</Card.Title>

              <Link style={{ textDecoration: 'none' }} to={'https://reshmrajk.github.io/My-New-Portfolio'}>
                <div className='d-flex justify-content-center mt-3'><Button variant="info">CLICK ME</Button></div>
              </Link>
            </Card.Body>
          </Card>

          <Card className='shadow card card_image' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CALCULATOR} width={'100%'} height={'150px'} />
            <Card.Body>
              <Card.Title className='caption'>CALCULATOR</Card.Title>

              <Link style={{ textDecoration: 'none' }} to={'https://reshmrajk.github.io/CALCULATOR'}>
                <div className='d-flex justify-content-center mt-3'><Button variant="info">CLICK ME</Button></div>
              </Link>

            </Card.Body>
          </Card>

          <Card className='shadow card card_image' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={QUIZAPP} width={'100%'} height={'150px'} />
            <Card.Body>
              <Card.Title className='caption'>QUIZ APP</Card.Title>

              <Link style={{ textDecoration: 'none' }} to={'https://lambent-semifreddo-122c14.netlify.app'}>
                <div className='d-flex justify-content-center mt-3'><Button variant="info">CLICK ME</Button></div>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div className='d-flex justify-content-center align-items-center flex-wrap gap-4 mb-5' data-aos="fade-up" data-aos-duration="3000">
          <Card className='shadow card card_image' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={MENUAPP} width={'100%'} height={'150px'} />
            <Card.Body>
              <Card.Title className='caption'>MENU APP</Card.Title>

              <Link style={{ textDecoration: 'none' }} to={'https://menulistchoosen.netlify.app'}>
                <div className='d-flex justify-content-center mt-3'><Button variant="info">CLICK ME</Button></div>
              </Link>
            </Card.Body>
          </Card>

          <Card className='shadow card card_image' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={BEAUTY} width={'100%'} height={'150px'} />
            <Card.Body>
              <Card.Title className='caption'>BEAUTY PARLOUR APP</Card.Title>

              <Link style={{ textDecoration: 'none' }} to={'https://ornate-zabaione-f3f339.netlify.app'}>
                <div className='d-flex justify-content-center mt-3'><Button variant="info">CLICK ME</Button></div>
              </Link>
            </Card.Body>
          </Card>

          <Card className='shadow card card_image' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={PROJECTFAIR} />
            <Card.Body>
              <Card.Title className='caption' width={'100%'} height={'150px'}>PROJECT FAIR</Card.Title>

              <Link style={{ textDecoration: 'none' }} to={'https://project-fair-front-end-nine.vercel.app'}>
                <div className='d-flex justify-content-center mt-3'><Button variant="info">CLICK ME</Button></div>
              </Link>
            </Card.Body>
          </Card>

        </div>
      </div>
    </div>
  )
}

export default Projects 