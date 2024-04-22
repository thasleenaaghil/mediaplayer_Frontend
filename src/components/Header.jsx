import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <Navbar className="bg-body-transparent border border-secondary">
    <Container>
      <Link to={'/'} style={{textDecoration:'none'}}>
      <Navbar.Brand >
      <FontAwesomeIcon icon={faVideo} className='text-warning me-3'beat size='2xl' /> {' '}
       <span className='fs-4' style={{color:"white"}}>Media Player</span>
      </Navbar.Brand>
      </Link>
      
    </Container>
  </Navbar>
)
}
  


export default Header