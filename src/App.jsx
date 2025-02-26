 import React from 'react';
 import Home from "./Components/Home/Home.jsx";
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import "./App.css"

 
 const App = () => {
   return (
     <div>
     <Router>
      <Routes>
        <Route  path='/' element={ <Home />}/>
      </Routes>
     </Router>
     </div>
   )
 }
 
 export default App