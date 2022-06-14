import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Creditcard from './components/CreditCard/CreditCard';
import Navbar from './components/Navbar/Navbar';

function App() {

  const Home = lazy(() => import('./components/Home/Home'));
  const NotFound = lazy(() => import('./components/NotFound/NotFound'));
  const Register = lazy(() => import('./components/Register/Register'));
  const Login = lazy(() => import('./components/Login/Login'));

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div className="text-center mt-5">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only ">Loading...</span></div>
        </div>} >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
