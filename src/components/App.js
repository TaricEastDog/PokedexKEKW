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
          <div className="col-lg-8 col-md-6 col-xs-12 order-2 order-md-1">
            <PokeList 
            clickedId={this.state.clickedId}
            handlerFromApp={this.handleData}
            />  
          </div>
          <div 
          className='col-lg-4 col-md-6 col-xs-12 order-1 order-md-2'
          style={{position: "sticky", top: "0px", background: 'white'}}
          >
            <PokeInfo clickedId={this.state.clickedId} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
