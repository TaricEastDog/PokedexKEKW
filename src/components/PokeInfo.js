import React, { Component } from 'react';
import { CurrentPokemonConsumer } from './Context.js';


export default class PokeInfo extends Component {
  render() {
    return (
      <CurrentPokemonConsumer>
        {({clickedId}) => (
          <div>
            {clickedId}
          </div>
        )}
      </CurrentPokemonConsumer>
      
    )
  }
}
