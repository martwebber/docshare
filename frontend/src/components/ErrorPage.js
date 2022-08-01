import React from 'react';
import { Alert } from 'react-bootstrap';
export default function ErrorPage(){
    return(
        <div>
            <alert variant="danger">
            <h1>ERROR: PAGE NOT FOUND!</h1>
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            </alert>
        </div>
    )
}

