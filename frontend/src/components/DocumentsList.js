import React, { useState, useEffect } from 'react';
import DocumentItem from './DocumentItem';

function DocumentsList() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch('https://outgoing-sideways-spoonbill.glitch.me/documents')
      .then(res => res.json())
      .then(docs => setDocuments(docs))
  }, [])

  const documentsList = documents.map(document => (
    <DocumentItem
      key={document.id}
      document={document}
    />
  ))

  return (
    <div className="col-12 d-flex justify-content-center text-center table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Owner</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">View document</th>
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