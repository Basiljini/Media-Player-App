import React, { useEffect, useState } from 'react'
import VideoCard from '../Components/VideoCard'
import { Row, Col } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoServerResponse}) {
 const[allVideos,setAllVideos] = useState([])
 const[deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  const getAllUploadedVideos = async ()=>{
    const {data} = await getAllVideos()
    setAllVideos(data)
   console.log(data);
  }
  useEffect(()=>{
    setDeleteVideoStatus(false)
    getAllUploadedVideos()
  },[uploadVideoServerResponse,deleteVideoStatus])
  console.log(setAllVideos);
  return (
    <>
     <Row>
      {
        allVideos.length>0?
        allVideos.map(video=>(
          <Col className='mt-2' sm={12} md={6} lg={4} xl={3}>
          <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
          </Col>
        ))
       : <p className='fw-bolder fs-5 text-danger mt-3'>Nothing to display</p>
      }
      </Row>
    </>
  )
}

export default View