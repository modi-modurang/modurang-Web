import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/index';
import Signup from './pages/SignUpPage/index'
import Main from './pages/Main/index'
  
function App() {
  useEffect(() => {
    // if not logged in navigate to login page
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
