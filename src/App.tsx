import React from 'react';
import "./app.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Home from './containers/Home';
import Footer from './components/Footer';
import Subnote from './containers/Subnote';


function App() {
 

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path="login" element={<Login />}>
          </Route>
          <Route path="signup" element={<SignUp/>}>
          </Route>
          <Route path="subnote" element={<Subnote/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
