import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
faLinkedin

function Footer() {
  return (
    <div className='row p-5 mt-md-5'>
      <div className='col-md-4'>
        <h4 className='mb-3'><FontAwesomeIcon icon={faVideo} className='text-warning me-3'/>Media Player</h4>
        <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime earum ex sunt ut odit harum, soluta explicabo sapiente architecto, iure blanditiis velit veritatis? Odit et nesciunt sequi provident quis.</p>
      </div>
      <div className='col-md-1'></div>
      <div className='col-md-2'>
      <h4>Links</h4>
      <Link to={'/'}><p>Landing page</p></Link>
      <Link to={'/home'}><p>Home page</p></Link>
      <Link to={'/watch-history'}><p>Watch History page</p></Link>
      </div>
      
      <div className='col-md-2'>
        <h4>Guides</h4>
        <p className='mt-3'>React</p>
        <p>React Bootstrap</p>
        <p>Bootstrap</p>
      </div>
      <div className='col-md-3'>
        <h4>Contacts</h4>
        <div className='d-flex mt-3'>
          <input type="text" placeholder='EMAIL ID' className='form-control' />
          <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className='d-flex justify-content-between mt-4'>
        <FontAwesomeIcon icon={faInstagram} size='2xl' />
        <FontAwesomeIcon icon={faFacebook} size='2xl' />
        <FontAwesomeIcon icon={faTwitter} size='2xl'  />
        <FontAwesomeIcon icon={faLinkedin} size='2xl'  />

        </div>
      </div>
      
    </div>
  )
}

export default Footer