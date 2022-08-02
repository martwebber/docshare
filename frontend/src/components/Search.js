import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const Search = () => {
    const [search, setSearch] = useState("")
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        fetch('https://outgoing-sideways-spoonbill.glitch.me/documents')
          .then(res => res.json())
          .then(docs => setDocuments(docs))
      }, [])                                         

  const docsList = documents.filter((val)=>{
    if(search === ""){
        return val;
    }else if(val.title.toLowerCase().includes(search.toLowerCase())){
        return val;
    }
  }).map((doc)=>(
   <div>
    <Link to={`/document/${doc.id}`}> <h3 key={doc.id}>{doc.title}</h3></Link>
   <strong><span>{doc.owner}</span></strong> 
   </div>

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