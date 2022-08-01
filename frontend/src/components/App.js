import React from 'react';
import './../App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import CreateNewDocumentForm from './CreateNewDocumentForm';
import Home from './Home';
import DocumentsList from './DocumentsList';
import Search from './Search';
import DocumentItem from './DocumentItem';
import ErrorPage from './ErrorPage';
import Footer from './Footer';
import DocumentPage from './DocumentPage';
function App() {
  return (

    <div className="App">
      <NavBar/>
       <Routes>
       <Route path="/" element={<Home/>}></Route>
        <Route path="/all-documents" element={<DocumentsList/>}></Route>
        <Route path="/create-new-document" element={<CreateNewDocumentForm/>}></Route>
        <Route path="/search" element={<Search/>}></Route> 
        <Route path="/document/:id" element={<DocumentPage/>}></Route> 
        <Route path="*" element={<ErrorPage/>}></Route> 
      </Routes>
      <Footer/>
  </div>    
  );
}

export default App;
