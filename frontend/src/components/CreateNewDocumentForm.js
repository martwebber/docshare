import React, { useState } from 'react';
//import axios from 'axios';

function CreateNewDocumentForm() {
  const [owner, setOwner] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [fileUrl, setFileUrl] = useState(null)

  //let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if ((fileUrl && title && description &&  owner) !== null) {
      formData.append('owner', owner);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('fileUrl', fileUrl);
    }

    // await axios({
    //   method: "POST",
    //   url: "http://localhost:4000/api/documents",
    //   data: formData,
    //   headers: { 'content-type': 'multipart/form-data' }
    // }).then((response) => {
    //   console.log(response  );
    //   //navigate.push('/');
    // })

    fetch("http://localhost:4000/api/documents",{
      method: "POST",
      body: formData
    })
    .then(response=>response.json())
    .then(results=>console.log(results))
  }


  return (
    <div className="col-12 d-flex justify-content-center text-center">
       <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h1>Create a new document</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="ownersname" className="form-label">Owner: </label>
          <input type="text" className="form-control" onChange={(e) => setOwner(e.target.value)} id="ownersname" name="owner" placeholder="Enter owner's name here..." />
        </div>
        <div className="mb-3">
          <label htmlFor="documentTitle" className="form-label">Title:</label>
          <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} id="documentTitle" name="title" placeholder="Enter document title here..." />
        </div>
        <div className="mb-3">
          <label htmlFor="documentDescription" className="form-label">Description:</label>
          <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} id="documentDescription" name="description" placeholder="Enter document description..."></textarea>
        </div>
        <div className="mb-3 form-check">
          <label className="form-label" htmlFor="fileUpload">Upload document</label>
          <input type="file" className="form-control" onChange={(e) => setFileUrl(e.target.files[0])} id="fileUpload" name="fileUrl" />
        </div>
        <button type="submit" className="btn btn-primary">Create document</button>
      </form>
    </div>
  )
}

export default CreateNewDocumentForm;