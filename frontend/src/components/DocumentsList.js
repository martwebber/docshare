import React, { useState, useEffect } from 'react';
import DocumentItem from './DocumentItem';

function DocumentsList() {
  const [documents, setDocuments] = useState([]);
  //const [search, setSearch] = useState({});

  useEffect(() => {
    fetch('http://localhost:4000/api/documents')
      .then(res => res.json())
      .then(docs => setDocuments(docs.documents))
  }, [])

  function handleDeleteClickEvent(id) {
    console.log(id)
    fetch(`http://localhost:4000/documents/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        let updatedDocuments = documents.filter((document) => (
          document._id !== id
        ))
        setDocuments(updatedDocuments)
      })
  }

  const documentsList = documents.map(document => (
    <DocumentItem
      key={document._id}
      document={document}
      onDeleteClick={handleDeleteClickEvent}
    />
  ))


  // const searchResults = documents.filter((result) => {

  // })

  return (
    <div className="col-12 d-flex justify-content-center text-center">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Owner</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">File</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {documentsList}
        </tbody>
      </table>
    </div>
  )

}

export default DocumentsList;