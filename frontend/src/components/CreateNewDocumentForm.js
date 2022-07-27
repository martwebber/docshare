import React, {useState} from 'react';

function CreateNewDocumentForm(){
    const [document, setDocument] = useState({
      owner:"",
      title:"",
      description:"",
      fileUrl:""
    })
    
    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:3000/documents",{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            owner: e.target.owner.value,
            title: e.target.title.value,
            description: e.target.description.value,
            fileUrl: e.target.fileUrl.value,
          })
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
        const test = {
            owner: e.target.owner.value,
            title: e.target.title.value,
            description: e.target.description.value,
            fileUrl: e.target.fileUrl.value,
        }
        console.log(test);
    }

    function handleChange(e){
        console.log(e.target.files[0]);
    }

    return(
       <div className="col-12 d-flex justify-content-center text-center">
       <form onSubmit={handleSubmit}>
       <div className="mb-3">
          <h1>Create a new document</h1>
          </div>
  <div className="mb-3">
    <label for="ownersname" className="form-label">Owner: </label>
    <input type="text" className="form-control" onChange={handleChange} id="ownersname" name="owner" placeholder="Enter owner's name here..."/>
  </div>
  <div className="mb-3">
    <label for="documentTitle" className="form-label">Title:</label>
    <input type="text" className="form-control" onChange={handleChange} id="documentTitle" name="title" placeholder="Enter document title here..."/>
  </div>
  <div className="mb-3">
    <label for="documentDescription" className="form-label">Description:</label>
    <textarea className="form-control" onChange={handleChange} id="documentDescription" name="description" placeholder="Enter document description..."></textarea>
  </div>
  <div className="mb-3 form-check">
  <label className="form-label" for="fileUpload">Upload document</label>
<input type="file" className="form-control" onChange={handleChange} id="fileUpload" name="fileUrl" />
  </div>
  <button type="submit" className="btn btn-primary">Create document</button>
</form>
       </div>
    )
}

export default CreateNewDocumentForm;