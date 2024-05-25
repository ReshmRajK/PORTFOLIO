import React from 'react';

function Home() {
  return (
    <div style={{ marginTop: '100px', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center w-100'>
      <div className='container'>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <h1>Hi, I'm Reshma Raj K</h1>
            <h3>Front End Developer</h3>
            <p>Seeking a challenging position in a reputable organization to
              expand and utilize my learning, skills and knowledge. Flexible to
              work in any environment as required.
            </p>
            <div className='mt-3'>
              <a href="https://github.com/ReshmRajK" target='_blank' ><i className="me-4 fa-brands fa-github icon"></i></a>
              <a href="https://www.linkedin.com/in/reshma-raj-k-9aa106212" target='_blank' ><i className="fa-brands fa-linkedin-in icon"></i></a>
            </div>

          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 col-md-6 ">

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home