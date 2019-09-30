import React, { Component } from 'react'
import PokeInfo from './PokeInfo'
import PokeList from './PokeList'
import { CurrentPokemonProvider } from './Context'


export default class App extends Component {
  render() {
    return (
      <CurrentPokemonProvider>
      <div className='container'>
        <div className='col-6'>
          <PokeList />
        </div>
        <div className='col-6'>
          <PokeInfo />
        </div>
      </div>
    </CurrentPokemonProvider>
    )
  }
}
