import React, { Component, createContext } from 'react'

const CurrentPokemonContext = createContext();

export class CurrentPokemonProvider extends Component {
  state = {
    clickedId: 1
  }

  handleClick = () => {
    const clickedId = this.props.currentId;
    this.setState({clickedId: clickedId})
  }

  render() {
    return (
      <CurrentPokemonContext.Provider value={{
        handleClick: this.handleClick,
        clickedId: this.state.clickedId
      }}>
        {this.props.children}
      </CurrentPokemonContext.Provider>
    )
  }
}

export const CurrentPokemonConsumer = CurrentPokemonContext.Consumer
