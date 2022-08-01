import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Card, Row, Col,Container, Button } from "react-bootstrap";
export default function DocumentPage({onDeleteClick}){
    const [document, setDocument] = useState("")
  let { id } = useParams()
  const handleDeleteClick = ()=>{
    onDeleteClick(document.id)
  }
    useEffect(() => {
    fetch(`https://outgoing-sideways-spoonbill.glitch.me/documents/${id}`)
      .then(res => res.json())
      .then(doc => setDocument(doc))
  }, [id])
    return(

        <Container className="d-flex">
            <Row className="m-auto align-self-center">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>{document.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{document.owner}</Card.Subtitle>
                            <Card.Text>
                                S{document.description}
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        <Button className="btn btn-sm" variant="primary">Update</Button>
                        <Button className="btn btn-sm" variant="danger" onClick={handleDeleteClick}>Delete</Button>

                    </Card>
                </Col>
            </Row>
        </Container>    
    )
}

