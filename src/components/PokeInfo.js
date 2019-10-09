import React, { Component } from 'react';
import { CurrentPokemonConsumer } from './Context.js';


export default class PokeInfo extends Component {
  state= {
    curretId: ''
  }



  render() {
    return (
      <CurrentPokemonConsumer>
        {(context) => (
          <React.Fragment>
            <p>{context.clickedId}</p>
          </React.Fragment>
        )}
      </CurrentPokemonConsumer>
      
    )
  }
}
