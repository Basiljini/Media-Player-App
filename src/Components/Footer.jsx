import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{width:'100%',height:'700px'}}>
     
     <div className='footer d-flex justify-content-evenly w-100'>

      <div className='website ' style={{width:'400px'}}>
       <h5> <i className="fa-solid fa-cloud-arrow-up"></i>{' '}Media player</h5>
       <p>Media Player is a free and open source HTML5 video player framework. Because the underlying core functions are completely implemented by the browser, only some video formats and codec are supported. In addition, it doesn't support multiple audio tracks switching. <br />
        Code licensed : BIT <br />
        version: m-p.v1.0
       </p>
      </div>

      <div className='link d-flex flex-column'>
        <h5>Links</h5>
        <br />
  
      <Link to={'http://localhost:3000/home'} style={{textDecoration:'none'}}>Home</Link>
      <Link to={'http://localhost:3000'} style={{textDecoration:'none'}}>Landingpage</Link>
      <Link to={'http://localhost:3000/watch-history'} style={{textDecoration:'none'}}>WatchHistory</Link>

      </div>

      <div className='link d-flex flex-column'>
        <h5>Guides</h5>
        <br />
      <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>React</Link>
      <Link to={'https://github.com/'} style={{textDecoration:'none'}}>Github</Link>
      <Link to={'  https://react.dev/community/team'} style={{textDecoration:'none'}}>Meet The Team</Link>
      <Link to={'https://www.linkedin.com/feed/'} style={{textDecoration:'none'}}>Linkedin</Link>
      <Link to={'https://bootswatch.com/'} style={{textDecoration:'none'}}>Bootswatch</Link>
      <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none'}}>Bootstrap</Link>

      </div>

      <div >
        <h5>Contact Us</h5>
      </div>

     </div>
     <br />
     <br />
     <div>
      <p>Copyright © 2023 Media Player. Built with React.</p>
     </div>
    </div>
  )
}

export default Footer