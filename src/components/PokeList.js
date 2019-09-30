import React, { Component } from 'react';
import axios from 'axios';
import PokeAvatar from './PokeAvatar';

export default class PokeList extends Component {

  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokemons: null
  }

  async componentDidMount() {
    await axios.get(this.state.url)
    .then(res => {
      const pokemons = res.data['results'];
      this.setState({pokemons});
    })

  }

  render() {
    return (
      <div className='row'>
        {this.state.pokemons ? (
          this.state.pokemons.map(pokemons => 
            <div className='col-4'>
              <PokeAvatar 
                key={pokemons.name}
                name={pokemons.name}
                pokeUrl={pokemons.url}
              />
            </div>)
        ) : (
          <p>Loading...</p>
          )
        }  
      </div>
    )
  }
}
