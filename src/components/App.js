import React from 'react';
// import './styles/App.css';
import PokeList from './PokeList.js';
import PokeInfo from './PokeInfo';
// import PokeAvatar from './PokeAvatar';


class App extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  render() {
    return(
      <div className='container'>
        <div className='row'>
          <div className="col-6">
            <PokeList />  
          </div>
          <div className='col-6'>
            <PokeInfo />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
