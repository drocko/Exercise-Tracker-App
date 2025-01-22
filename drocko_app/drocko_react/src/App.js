import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddMoviePage from './pages/AddMoviePage';
import EditMoviePage from './pages/EditMoviePage';
import { useState } from 'react';
import Navigation from './components/Navigation';

function App() {
  const [movieToEdit, setMovieToEdit] = useState();
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <h1>Exercises Final Project</h1>
          <p>My final portfolio project for CS290! </p>
      <Navigation className="Navigation-class">
          <Route path="/" element={<HomePage setMovieToEdit={setMovieToEdit} />}/>
          <Route path="/add-exercise" element={<AddMoviePage />}/>
      </Navigation>

		  <Routes>
          <Route path="/" element={<HomePage setMovieToEdit={setMovieToEdit} />}/>
          <Route path="/add-exercise" element={<AddMoviePage />}/>
          <Route path="/edit-exercise" element={ <EditMoviePage movieToEdit={movieToEdit}/>}/>
		  </Routes>
      </div>


      </Router>
      <div className="App-footer">
            <p>© 2024 Derick Do.</p>
      </div>
    </div>
  );
}

export default App;