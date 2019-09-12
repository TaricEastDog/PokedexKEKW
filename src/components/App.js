import React from 'react';
import './styles/App.css';
import PokeList from './PokeList.js';
import PokeInfo from './PokeInfo';

class App extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  render() {
    return(
      <div className='App'>
        <PokeList className='poke-list' />
        <PokeInfo />
      </div> 
    )
  }
}

export default App;
