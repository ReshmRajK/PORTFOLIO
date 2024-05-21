import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import design from '../assets/web-design.png'
import fronEnd from '../assets/front-end.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Services() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div style={{ marginTop: '100px', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center flex-wrap gap-5 w-100'>

      <Card style={{ width: '20rem' }} className='card_image shadow card mb-5' data-aos="fade-up"
        data-aos-duration="3000">
        <Card.Img variant="top" src={design} style={{ width: '100%', height: '200px' }} />
        <Card.Body style={{ height: '15rem' }}>
          <Card.Title className='caption mt-2'>Web Designing</Card.Title>
          <Card.Text className='mb-5' style={{ textAlign: 'center', color: 'white' }}>
            Proficient in HTML, CSS, JavaScript and responsive design frameworks. Optimizing user experiences, and collaborating effectively with cross-functional teams to meet project goals
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '20rem' }} className='card_image shadow card mb-5' data-aos="fade-down"
        data-aos-duration="3000">
        <Card.Img variant="top" src={fronEnd} style={{ width: '100%', height: '200px' }} />
        <Card.Body style={{ height: '15rem' }}>
          <Card.Title className='caption mt-2'>Front End Development</Card.Title>
          <Card.Text className='mb-5' style={{ textAlign: 'center', color: 'white' }}>
            Collaborate with designers,optimize applications,develop features,and maintain brand consistency for user-facing interfaces.Key Skills: Proficiency in HTML,CSS,JavaScript,and React.
          </Card.Text>
        </Card.Body>
      </Card>


    </div>
  )
}

export default Services