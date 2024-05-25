import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function More() {

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div style={{ marginTop: '100px', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center gap-5 w-100'>
      
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
          <h2 style={{textDecoration:'underline',color:"#00abf0"}} data-aos="fade-right" data-aos-duration="3000">
            EDUCATIONAL QUALIFICATION</h2>
          <h5>Bachelor Of Technology:College Of Engineering,Perumon </h5>
            <h6>2014-2018</h6>
            <h6>CGP:6.96</h6>
            <h6>Branch:Computer Science and Engineering</h6>
         
  
          <h2 style={{textDecoration:'underline',color:"#00abf0"}} className='mt-5' data-aos="fade-right" data-aos-duration="3000">
            HIGHER SECONDARY CLASS</h2>
          <h5>M.S.M.H.S.S, Chathinamkulam </h5>
            <h6>2010-2012</h6>
            <h6>Percentage : 81</h6>
            <h6>Biology Science</h6>
         
  
          <h2 style={{textDecoration:'underline',color:"#00abf0"}} className='mt-5' data-aos="fade-right" data-aos-duration="3000">
            S.S.L.C</h2>
          <h5>M.S.M.H.S.S, Chathinamkulam </h5>
            <h6>2009-2010</h6>
            <h6>Percentage : 76</h6>
          </div>

          <div className="col-lg-6">

          <h2 style={{textDecoration:'underline',color:"#00abf0"}} data-aos="fade-left" data-aos-duration="3000">
            AWARDS and ACHIEVEMENTS</h2>
           <h6> 1. Participated in Science Exhibition at school level.</h6>
            <h6>2. Attended workshop on PHP and MYSQL held on College Of Engineering Perumon, organized by IIIC, TEQIP-II</h6>
          
          <h2 style={{textDecoration:'underline',color:"#00abf0"}} className='mt-5' data-aos="fade-left" data-aos-duration="3000">
            HOBBIES and INTEREST</h2>
           <h6> 1. LISTENING mUSIC.</h6>
            <h6>2. wATCHING mOVIES.</h6>
        
          <h2 style={{textDecoration:'underline',color:"#00abf0"}} className='mt-5' data-aos="fade-left" data-aos-duration="3000">
            PERSONAL DETAILS</h2>
           <h6>Age & Date Of Birth : <span>29, 05-05-1995</span></h6>
           <h6>Gender : <span>Female</span></h6>
           <h6>Nationality : <span>Indian</span></h6>

          </div>
        </div>
      </div>
       
      </div>
      
  )
}

export default More