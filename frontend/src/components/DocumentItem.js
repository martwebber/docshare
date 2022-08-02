import React from 'react';
import { Link } from 'react-router-dom';

function DocumentItem({document}){
  const {id, owner, title} = document;

    return(
        <tr>
        <td>{owner}</td>
        <td>{title}</td>
        <td><Link to={`/document/${id}`}><button className="btn btn-primary">View more details</button></Link></td>
      </tr>
    )
}

export default DocumentItem;