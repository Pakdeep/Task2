import "react-toastify/dist/ReactToastify.css"
import React from 'react';
import "./app.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Home from './containers/Home';
import Footer from './components/Footer';
import Subnote from './containers/Subnote';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <ToastContainer position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path="login" element={<Login />}>
          </Route>
          <Route path="signup" element={<SignUp />}>
          </Route>
          <Route path="subnote" element={<Subnote />}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
