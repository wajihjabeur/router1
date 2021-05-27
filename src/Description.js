import React from 'react'
import {Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
function Description(Props) {
    return (
        <div>
            <Link to="/"><Button>Home Page</Button></Link>
            <h1>{Props.location.Props.name}</h1>
            <h4>{Props.location.Props.description}</h4>
            <iframe width="560" height="315" src={Props.location.Props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    )

}

export default Description
