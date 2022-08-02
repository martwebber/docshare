import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col,Container, Button } from "react-bootstrap";

export default function DocumentPage(){
    const [document, setDocument] = useState("")
    let { id } = useParams()
    let navigate = useNavigate();

  function handleDeleteClickEvent() {
    fetch(`https://outgoing-sideways-spoonbill.glitch.me/documents/${document.id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/all-documents")
      })
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
                            <Card.Link href={document.fileUrl} target="_blank">Document Link</Card.Link>
                        </Card.Body>
                        <Button className="btn btn-sm" variant="danger" onClick={handleDeleteClickEvent                           }>Delete</Button>

                    </Card>
                </Col>
            </Row>
        </Container>    
    )
}

