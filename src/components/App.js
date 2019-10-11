import React from 'react';
// import './styles/App.css';
import PokeList from './PokeList.js';
import PokeInfo from './PokeInfo';
// import PokeAvatar from './PokeAvatar';


class App extends React.Component {
  state = {
    clickedId: 1
  }

  handleData = (data) => {
    this.setState({
      clickedId: data
    });
  }

  render() {
    return(
      <div className='container'>
        <div className='row'>
          <div className="col-6">
            <PokeList 
            clickedId={this.state.clickedId}
            handlerFromApp={this.handleData}
            />  
          </div>
          <div className='col-6'>
            <PokeInfo clickedId={this.state.clickedId} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
