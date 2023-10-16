import React, { useEffect } from 'react'
import { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import { toast } from 'react-toastify';
import VideoCard from './VideoCard';


function Category() {
  const [categories,setCategories]=useState([])
  const [categoryName,setCategoryName] = useState("")
  const [show, setShow]=useState(false);
  const handleClose = ()=> setShow(false)
  const handleShow = ()=> setShow(true)

   const insertCategory = async ()=>{
    if(categoryName){
      let body ={
        categoryName,allVideos:[]
      }
    // make api call
    const response = await addCategory(body)
    if(response.status>=200 && response.status<300){
      // reset state
      setCategoryName("")
      // modal hide
      handleClose()
      //
      toast.success("New Category added ")
      // call getCategories
      getCategories()
    }else{
      toast.warning("Upload error")
    }
    console.log(response);
    }
    else{
     toast.warning("please fill the form")
    }
   }

   const getCategories = async ()=>{
     const {data} = await getAllCategory()
     setCategories(data);
   }
   
   const removeCategory = async (id)=>{
    // make api
    await deleteCategory(id)
    // call get all Categories
    getCategories()
   }

   useEffect(()=>{
    getCategories()
   },[])

   const dragOverCategory = (e)=>{
    console.log("dragging over Category");
    e.preventDefault()
   } 

   const videoDrop = async (e,categoryId)=>{
    console.log("inside drop function");
    console.log("Category ID :",categoryId);
    const videoCardId = e.dataTransfer.getData("cardId")
    console.log("Video Card ID :",+videoCardId);
    // get video details
    const {data} = await getAVideo(videoCardId)
    let selectedCategory = categories.find(item=>item.id === categoryId)
    selectedCategory.allVideos.push(data)
   await updateCategory(categoryId,selectedCategory)
   getCategories()
  }

  return (
    <>
     <div className="d-grid">
      <button onClick={handleShow} className="btn btn-success">Add New Category</button>
     </div>
     {
      categories?categories.map(item=>(
        <div className='border p-3 rounded mt-3 mb-3' droppable 
        onDrop={(e)=>videoDrop(e,item?.id)} 
        onDragOver={(e)=>dragOverCategory(e)}>
          <div className='d-flex justify-content-between'>
            <h5>{item?.categoryName}</h5>
            <button onClick={()=>removeCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          </div>
          <Row>
            {
               item?.allVideos&&item?.allVideos.map(card=>(
                <Col sm={12} className='p-1 mb-2'>
                <VideoCard displayData={card} insideCategory={true}/>
                </Col>
               ))
            }
          </Row>
        </div>
      )): <p className='fw-bolder text-danger mt-3'> no categories!!!</p>

     }
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form action="">
         <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control onChange={e=>setCategoryName(e.target.value)} className="mb-2" type="text" placeholder="Enter Category Name" />
     

        
      </Form.Group>
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={insertCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category