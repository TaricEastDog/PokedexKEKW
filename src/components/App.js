import React from 'react';
import './styles/App.css';
import PokeList from './PokeList.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  render() {
    return(
      <div className='App'>
        <PokeList />
      </div> 
    )
  }
}

export default App;