import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/todo" element={<TodoPage />} /> */}
      </Routes>

    </>
  );
};

export default App;