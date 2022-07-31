import React from 'react';

function DocumentItem({document, onDeleteClick}){
  const {_id, owner, title, description, fileUrl} = document;

  const handleDeleteClick = ()=>{
    onDeleteClick(_id)
  }
    return(
        <tr>
        <td>{_id}</td>
        <td>{owner}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{fileUrl}</td>
        <td><button className="btn btn-primary">Update</button></td>
        <td><button onClick={handleDeleteClick} className="btn btn-danger">Delete</button></td>
      </tr>
    )
}

export default DocumentItem;