import React from 'react';
import "./app.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Home from './containers/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/signup" element={<SignUp/>}>
          </Route>
          <Route path='/home' element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
