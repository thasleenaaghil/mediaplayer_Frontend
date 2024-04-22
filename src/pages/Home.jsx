import React, { useState } from 'react'
import Add from '../components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'


function Home() {
  const [videoUploadStatus,setVideoUploadStatus] = useState({})
  const [dragOutvideostatus,setVideoDragoutStatus]=useState(false)
  return (
    <>
    <div className='my-5 container d-flex'>
      <Add setVideoUploadStatus={setVideoUploadStatus} />
     <Link to={'/watch-history'} style={{textDecoration:'none'}} className='ms-auto'> <h5 ><span className='wh'>Watch History</span> <FontAwesomeIcon icon={faClockRotateLeft} className='ms-2 me-3' /></h5></Link>
      
      
      </div>
      <div className="row mt-5 p-5">

        <div className="col-md-9">
          <h4>All Videos</h4>
          <View videoUploadStatus={videoUploadStatus}setVideoDragoutStatus= {setVideoDragoutStatus} />
        </div>
        <div className="col-md-3 px-4">
          <Category dragOutvideostatus={dragOutvideostatus} setVideoDragoutStatus={setVideoDragoutStatus}/></div>
        
      </div>
      </>
  )
}

export default Home