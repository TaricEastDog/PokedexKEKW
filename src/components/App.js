import React, { Component } from 'react'
import PokeInfo from './PokeInfo'
import PokeList from './PokeList'
import { CurrentPokemonProvider, CurrentPokemonConsumer } from './Context'


export default class App extends Component {
  render() {
    return (
      <CurrentPokemonProvider>
        <CurrentPokemonConsumer>
          {() => <div className='container'>
            <div className='col-6'>
              <PokeList />
            </div>
            <div className='col-6'>
              <PokeInfo />
            </div>
          </div> 
          }
        </CurrentPokemonConsumer>
      </CurrentPokemonProvider>
    )
  }
}
