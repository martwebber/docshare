import React, { useEffect, useState } from "react";
//import axios from 'axios';
const Search = () => {
    const [search, setSearch] = useState("")
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/documents')
          .then(res => res.json())
          .then(docs => setDocuments(docs.documents))
      }, [])                                         

  const docsList = documents.filter((val)=>{
    if(search === ""){
        return val;
    }else if(val.title.toLowerCase().includes(search.toLowerCase())){
        return val;
    }
  }).map((doc)=>(
    <h3 key={doc._id}>{doc.title}</h3>
    
  ))
  return (
    <div className="">
      <input
        type="text"
        placeholder={"Search for documents"}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <h1>Documents</h1>
      {docsList}
    </div>
  );
};

export default Search;