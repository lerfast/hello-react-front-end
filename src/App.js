import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting'; // Asegúrate de que la ruta de importación sea correcta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;
