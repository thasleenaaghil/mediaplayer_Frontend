import { faArrowLeft, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryApi, getAllVideoHistoryApi } from '../services/allAPI'


function Watchhistory() {
const[videoHistory,setVideoHistory]=useState([])
const[deletevideoHistory,setDeleteVideoHistoy]=useState(false)


 
//function to get all video from backend
  const getAllVideo = async()=>{
    const response = await getAllVideoHistoryApi()

    setVideoHistory(response.data)
  }
 console.log(videoHistory);


  useEffect(()=>{
    getAllVideo()
    setDeleteVideoHistoy(false)
  },[deletevideoHistory])
  //function to delete a particular video
  const handleDelete = async(id)=>{
    const  response = await deleteVideoHistoryApi(id)
    console.log(response)
  setDeleteVideoHistoy(true)
  console.log(deletevideoHistory);
  }
  return (
    <>
    <div className='d-flex align-items-center mx-3 mb-5 mt-4'>
      <h4>Watch History</h4>
      <Link to={'/home'} className='ms-auto' style={{textDecoration:'none'}}><h5 ><FontAwesomeIcon className='me-2'  icon={faArrowLeft} /><span id='back'>Back Home</span><FontAwesomeIcon className='ms-2 me-3' icon={faHouse} /></h5></Link>
    </div>
    <div className='row mx-4 mt-5'>
   <div className='col-md-1'></div>
   <div className='col-md-10 p-4' style={{overflow:'auto'}}>
    { videoHistory?.length>0?
    <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>CAPTION</th>
          <th>URL</th>
          <th>TIME STAMP</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
       {videoHistory?.map((item,index)=> (<tr>
          <td>{index+1}</td>
          <td>{item?.caption}</td>
          <td><a href={item?.url} target='_blank'>{item?.url}</a></td>
          <td>{item?.timpeStamp}</td>
          <td><FontAwesomeIcon icon={faTrash} className='btn btn-outline-danger' onClick={()=>handleDelete(item?.id)} /></td>
        </tr>))}
      </tbody>
    </table>:
    <p className='text-warning fs-5 mt-5'>Watch History is clean....</p>
    
    }
   </div>

    </div>
    
    </>
  )
}

export default Watchhistory