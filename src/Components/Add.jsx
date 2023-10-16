import React from 'react'
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {uploadVideo} from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {

  const [video,setVideo]= useState({
    id:"", caption:"",url:"",embbedLink:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractLink = (e)=>{
    const {value}=e.target
    if(value){
    const embbed = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embbedLink:embbed})
    }
    else{
      setVideo({...video,embbedLink:""})
  
    }
    
  }

  const handleUpload = async ()=>{
    const {id,caption,url,embbedLink} = video
    console.log(video);
    if(!id || !caption || !url || !embbedLink)
    {
      toast.warning("please fill the form completeley")
    }
    else{
    // make api call
    const response = await uploadVideo(video)

    if(response.status>=200 && response.status<300){
      // reset state
      setVideo({
        id:"",caption:"",url:"",embbedLink:""
      })
      // set server response
      setUploadVideoServerResponse(response.data)
      // hide modal
    handleClose()

    // console.log(response);
    toast.success(`${response.data.caption} is uploaded successfully`)
    }
        else{
          toast.error("Upload error, Please try later")
        }
    
    }
  }


  console.log(video);

  return (
    <>
      <div className='d-flex align-items-center'>
        <h3>Upload Video</h3>
        <button onClick={handleShow} className='btn'><i className="fa-solid fa-circle-plus fs-3"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form action="">
         <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control className="mb-2" type="text" placeholder="Enter video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
        <Form.Control className="mb-2" type="text" placeholder="Enter video caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}  />
        <Form.Control className="mb-2" type="text" placeholder="Enter video image URL" onChange={(e)=>setVideo({...video,url:e.target.value})}  />
        <Form.Control className="mb-2" type="text" placeholder="Enter youtube video link"  onChange={extractLink}  />

        
      </Form.Group>
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="success">Upload</Button>
        </Modal.Footer>
      </Modal>

     <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
       pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
     />
    </>
  )
}

export default Add