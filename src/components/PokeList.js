import React from 'react';
// import './styles/PokeList.css';
import PokeAvatar from './PokeAvatar.js';
import Axios from 'axios';

class PokeList extends React.Component {

    state = {
      url: 'https://pokeapi.co/api/v2/pokemon/',
      pokemon: null,
    }

  

  async componentDidMount() {
    const res = await Axios.get(this.state.url);
    this.setState({pokemon: res.data['results']});
  }

  render() {
    return (
      <div className='container'>
        {this.state.pokemon ? (<div className='row'> 
          {this.state.pokemon.map(pokemon => <PokeAvatar
            key={pokemon.name}
            url={pokemon.url}
            name={pokemon.name}         
          />)}
        </div>) : ("asdas")
        }
      </div>
    )
  }
}


export default PokeList;
