import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  const Home = lazy(() => import('./components/Home/Home'));

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
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
