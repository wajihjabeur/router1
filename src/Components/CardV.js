import React from 'react'
import { Card,Button } from 'react-bootstrap';
import './Components.css';
import ReactStars from "react-rating-stars-component";
import {Link } from 'react-router-dom'


function CardV({elm}) {
  return (
    <div>
       <div >
          
            <Card className="card" name="one" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={elm.image}/>
            <Card.Body>
              <Card.Title>{elm.name}</Card.Title>
              <Card.Text>
              {elm.description}
              </Card.Text>
              <Card.Text>

                <Link to ={{pathname:'/Description',Props:{url:elm.url,name:elm.name,description:elm.description}}}>
                <Button>Official Trailer</Button></Link>

               </Card.Text>
             <div className="star"> <ReactStars 
              count={5}
              edit={false}
              size={24}
              value={elm.rating}
              activeColor="#ffd700"
            /></div>
              {/* <Card.Link href="#">ADD</Card.Link> */}
            </Card.Body>
          </Card>
           
         </div>
    </div>
  )
}

export default CardV




