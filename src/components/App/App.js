import React, { Component } from 'react';
import './App.css';
import MoviesList from '../MoviesList/MoviesList';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <MoviesList/>
      </div>
    );
  }
}

export default App;
