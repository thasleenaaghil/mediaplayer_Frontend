import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoApi } from '../services/allAPI';


function Add({setVideoUploadStatus}) {
    const [show, setShow] = useState(false);
    //state to store the video details
    const[video,setvideo]=useState({
      caption:"",
      imageURL:"",
      embedLink:""
    })
    console.log(video);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedlink = (e)=>{
   const text = e.target.value 
   /*console.log(text)*/
   if(text.startsWith('https://youtu.be/')){
    const link = `https://www.youtube.com/embed/${text.slice(17,28)}`
    setvideo({...video,embedLink:link})
   }else{
    const link = `https://www.youtube.com/embed/${text.slice(-11)}`
    setvideo({...video,embedLink:link})
   }
  }
//function to upload the video details
const handleUpload =async ()=>{
const{caption,imageURL,embedLink}=video
if(!caption || !imageURL || !embedLink){
  toast.info('please fill the form completely')
}else{

  const response = await uploadVideoApi(video)
  console.log(response);
  if(response.status>=200 && response.status<300){
    toast.success('video uploaded successfully')
    setVideoUploadStatus(response.data)
    setvideo({
      caption:"",
      imageURL:"",
      embedLink:""
    })
    handleClose()
  }else{
    console.log(response);
    toast.error('something went wrong')
  }
  /*toast.success('proceed')*/
}
}

  return (
    <>
    <div>
        <h5>Upload New Video <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-2' /></h5>
    </div>
     <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
       <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2 text-warning' />Upload Videos</Modal.Title>
     </Modal.Header>
     <Modal.Body><p>Please fill the following details</p>
     <form className='mt-3 border p-2 rounded'>
        <div className='mb-3'>
            <input type='text'  placeholder='Enter Video Caption' className='form-control' onChange={(e)=>setvideo({...video,caption:e.target.value})}/>
        </div>
        <div className='mb-3'>
            <input type='text' placeholder='Enter Image Url' className='form-control'onChange={(e)=>setvideo({...video,imageURL:e.target.value})}/>
        </div>
        <div className='mb-3'>
            <input type='text' placeholder='Enter Youtube Video Link' className='form-control'onChange={(e)=>getEmbedlink(e)}/>
        </div>
     </form>
     
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Cancel
       </Button>
       <Button variant="warning" onClick={handleUpload}>
         Upload
       </Button>
     </Modal.Footer>
   </Modal>
   
   <ToastContainer theme='colored' position='top-center' autoClose={2000} />
   </>
  )
}

export default Add
