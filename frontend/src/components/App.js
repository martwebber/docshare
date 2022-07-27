import './../App.css';
import { BrowserRouter as Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import CreateNewDocumentForm from './CreateNewDocumentForm';
import Home from './Home'
function App() {
  return (
    <div className="App">
        <CreateNewDocumentForm/>
  </div>

  );
}

export default App;
