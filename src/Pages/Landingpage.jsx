import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Landingpage() {
  const navigateByUrl = useNavigate()
  const navigate = ()=>{
    navigateByUrl('/home')
  }
  return (
    <>
      <Row className=' mb-5 align-items-center mt-5'>
        <Col className='ms-3' md={4}>
          <h1>Welcome to <span  className='text-success fw-bold'>MEDIA PLAYER</span></h1>
          <p  style={{textAlign:'justify'}}><b>Where user can manage their favourite videos. </b> User can upload any youtube videos by copy and paste their URL. MEDIA PLAYER will allow to add and remove their uploaded videos and also arrange them in different categories by drag and drop. It's free, try it now!</p>
          <button onClick={navigate} className='btn btn-success fw-bolder'>Get Started</button>
        </Col>
        <Col></Col>
        <Col className='me-2' md={6}>
          <img className='img-fluid' src="https://cielo24.com/wp-content/uploads/2021/07/How-to-Add-Captions-to-QuickTime-Player-Videos-scaled.jpeg" alt="" />
   
        </Col>
      </Row>
      <div className='container mt-5 mb-5 d-flex flex-column justify-content-between align-items-center'>
           <h3 style={{color:'white'}} className='fw-bold'>Features</h3>
      <div className='features mt-5 d-flex justify-content-between w-100'>
      <Card className='p-3 shadow' style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/87/30/b2/8730b273ed414c986407066b2017cc85.gif" />
        <Card.Body>
          <Card.Title style={{color:'white'}}>Managing videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='p-3 shadow' style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://cdn.dribbble.com/users/1543148/screenshots/4597378/filter_-_back.gif" />
        <Card.Body>
          <Card.Title style={{color:'white'}}>Categorise videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='p-3 shadow' style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://cdn.dribbble.com/users/1860339/screenshots/6076039/lupa.gif" />
        <Card.Body>
          <Card.Title style={{color:'white'}}>Watch History</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
           </div>
      </div>
      <div className="container border rounded p-5 border-secondary shadow mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="content">
          <h4 className='text-success'>Simple, Fast and Powerful</h4>
          <h6><span className='fs-5 '>Play Everything:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex accusantium excepturi laudantium dolorum libero maxime  </h6>
          <h6><span className='fs-5 '>Categorise Videos:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex accusantium excepturi laudantium dolorum libero  </h6>
          <h6><span className='fs-5'>Manage History:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex accusantium excepturi laudantium dolorum libero maxime  </h6>
        </div>
        <div className="video ms-5">
        <iframe width="688" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Landingpage