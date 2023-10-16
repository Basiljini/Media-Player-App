import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import Category from '../Components/Category'
import View from '../Components/View'

function Home() {
  const [uploadVideoServerResponse, setUploadVideoServerResponse]=useState({})
  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
      <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
      <Link to={'/watch-history'} className='fs-5' style={{textDecoration:'none', color:'white',}}>Watch History</Link>
    </div>
    <div className='container-fluid mt-5 mb-5 d-flex justify-content-between' >
      <div className="allvideos col-lg-8">
        <h3>All Videos</h3>
        <View uploadVideoServerResponse={uploadVideoServerResponse}/>
      </div>
    <div className="col-lg-1"></div>
    <div className='col-lg-3'>  
    <Category/>
    </div>
    </div>
    </>
  )
}

export default Home