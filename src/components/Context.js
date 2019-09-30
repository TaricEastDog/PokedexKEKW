import React, { Component, createContext } from 'react'

const CurrentPokemonContext = createContext();

export class CurrentPokemonProvider extends Component {
  state = {
    clickedId: 1
  }

  handleClick = () => {this.setState({ clickedId: this.state.clickedId + 1 })}

  render() {
    return (
      <CurrentPokemonContext.Provider value={{
        clickedId: this.state.clickedId,
        handleClick: this.handleClick
      
      }}>
        {this.props.children}
      </CurrentPokemonContext.Provider>
    )
  }
}

export const CurrentPokemonConsumer = CurrentPokemonContext.Consumer
