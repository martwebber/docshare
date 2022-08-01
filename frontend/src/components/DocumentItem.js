import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DocumentPage from './DocumentPage';

function DocumentItem({document, handleDeleteClickEvent}){
  //const [documents, setDocuments] = useState([]);
  const {id, owner, title, description} = document;

  <DocumentPage
  onDeleteClick={handleDeleteClickEvent}
  />
    return(
        <tr>
        <td>{owner}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td><Link to={`/document/${id}`}><button className="btn btn-primary">View more details</button></Link></td>
      </tr>
    )
}

export default DocumentItem;