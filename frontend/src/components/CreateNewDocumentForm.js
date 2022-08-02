import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function CreateNewDocumentForm() {
    const [formData, setFormData] = useState({
      owner: "",
      title: "",
      description: "",
      fileUrl: ""
    });
    let navigate = useNavigate();

    function handleSubmit(e){
      e.preventDefault()
      fetch('https://outgoing-sideways-spoonbill.glitch.me/documents', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          owner: formData.owner,
          title: formData.title,
          description: formData.description,
          fileUrl: formData.fileUrl
        })
      })
      .then(response=>response.json())
      .then(data=>{
        console.log(data)
      navigate("/all-documents")
    })
    }

    function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        
      });
    }

  return (
    <div className="col-12 d-flex justify-content-center text-center">
       <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h1>Create a new document</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="ownersname" className="form-label">Owner: </label>
          <input type="text" className="form-control" onChange={handleChange} id="ownersname" name="owner" placeholder="Enter owner's name here..." />
        </div>
        <div className="mb-3">
          <label htmlFor="documentTitle" className="form-label">Title:</label>
          <input type="text" className="form-control" onChange={handleChange} id="documentTitle" name="title" placeholder="Enter document title here..." />
        </div>
        <div className="mb-3">
          <label htmlFor="documentDescription" className="form-label">Description:</label>
          <textarea className="form-control" onChange={handleChange} id="documentDescription" name="description" placeholder="Enter document description..."></textarea>
        </div>
        <div className="mb-3 form-check">
          <label className="form-label" htmlFor="fileUpload">Add document link</label>
          <input type="text" className="form-control" onChange={handleChange} id="fileUpload" name="fileUrl" />
        </div>
        <button type="submit" className="btn btn-primary">Create document</button>
      </form>
    </div>
  )
}

export default CreateNewDocumentForm;