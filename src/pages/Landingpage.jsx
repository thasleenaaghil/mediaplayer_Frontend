import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
    <div className='row p-5 my-5'>
      <div className="col-md-1"></div>
   <div className='col-md-5 p-3'>
   <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
   <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam, minima facere laboriosam doloribus voluptatem nobis quisquam perferendis dignissimos doloremque illum quod recusandae praesentium incidunt consectetur itaque distinctio iusto tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste totam explicabo, obcaecati consequuntur sunt eius facilis dicta voluptatem voluptate, velit eveniet qui. Doloremque nemo aliquid laborum perspiciatis ratione illo!</p>

   <Link to={'/home'}><button className='btn btn-warning mt-4'>Get Started</button></Link>
</div>
<div className="col-md-1"></div>
<div className='col-md-5 p-3 d-flex justify-content-center align-items-center'>
  <img src="https://i.gifer.com/Clo7.gif" alt="image" className='w-75' />
</div>

    </div>

   <div className='mb-5 mt-5 py-5'>
    <h3 className='my-5 text-center'>Features</h3>
   <Row className='mb-5 mt-5 pt-0 pt-md-4'>
      
      <Col md={1}></Col>
      <Col md={3} className='p-5 p-md-0'>
      <Card style={{ width: '100%' }} className='p-4'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/d7/28/26/d728264b7433e62b7c4572c8d129e9be.gif" style={{width:'100%', height:'300px'}} />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>
      <Col md={4} className='d-flex justify-content-center'>
      <Card style={{ width: '80%' }} className='p-4'>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/1443878/screenshots/4655905/illuminati.gif" style={{width:'100%', height:'300px'}} />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>
      <Col md={3} className='p-5 p-md-0'>
      <Card style={{ width: '100%' }} className='p-4'>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/1443878/screenshots/3853432/media/a3e287f1f0694b6053510b205817d35e.gif" style={{width:'100%', height:'300px'}} />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>
      <Col md={1}></Col>
    </Row>
   </div>
    <div className='my-5 row pt-0 pt-md-5 pb-5'>
      <div className="col-md-1"></div>
      <div className="col-md-10 border p-5 rounded border-2">
        <Row>
        <Col md={6} className='p-3'>
           <h2 className='text-warning'>Simple fast and powerful</h2>
           <p style={{textAlign:'justify'}} className='mt-3'><span className='fs-4'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolore doloremque, reprehenderit, labore hic eos laborum aut harum in suscipit adipisci fuga vero? Atque consectetur nihil vitae expedita repellat inventore.</p>
           <p style={{textAlign:'justify'}} className='mt-3'><span className='fs-4'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolore doloremque, reprehenderit, labore hic eos laborum aut harum in suscipit adipisci fuga vero? Atque consectetur nihil vitae expedita repellat inventore.</p>
           <p style={{textAlign:'justify'}} className='mt-3'><span className='fs-4'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolore doloremque, reprehenderit, labore hic eos laborum aut harum in suscipit adipisci fuga vero? Atque consectetur nihil vitae expedita repellat inventore.</p>


        </Col>
        <Col md={6} className='p-3'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VU23OPQ1Pmc" title="Sai Abhyankkar - Katchi Sera (Music Video) | Samyuktha | Ken Royson | Think Indie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>

        </Row>
      </div>
      <div className="col-md-1"></div>

    </div>
    </>
  )
}

export default Landingpage