import React from 'react';
import './../App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import CreateNewDocumentForm from './CreateNewDocumentForm';
import Home from './Home';
import DocumentsList from './DocumentsList';
import Search from './Search';

function App() {
  return (

    <div className="App">
      <NavBar/>
       <Routes>
       <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/all-documents" element={<DocumentsList/>}></Route>
      <Route exact path="/create-new-document" element={<CreateNewDocumentForm/>}></Route>
      <Route exact path="/search" element={<Search/>}></Route> 
      </Routes>
  </div>
  );
}

export default App;
