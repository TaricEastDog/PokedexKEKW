import React, { Component } from 'react';
import { CurrentPokemonConsumer } from './Context';

export default class PokeAvatar extends Component {
  state = {
    pokeName: '',
    pokeId: '',
    pokeImg: ''
  }

  componentDidMount() {
    const pokeName = this.props.name;
    const pokeId = this.props.pokeUrl.slice(34, -1)
    const pokeImg = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeId}.png?raw=true`

    this.setState({
      pokeName,
      pokeId,
      pokeImg
    })
  }


  render() {
    return (
      <div className='card'>
        <img className='card-img-top' src={this.state.pokeImg} alt={this.state.pokeName} />
        <div className='card-body'>
          <h5 className='card-title'>{this.state.pokeId}</h5>
          <p className='card-text'>{this.state.pokeName}</p>
          <CurrentPokemonConsumer 
            key={this.state.pokeId} 
            currentId={this.state.pokeId}
          >
            {(context) => (
              <React.Fragment>
                <button onClick={context.handleClick}>{this.state.pokeName}</button> 
              </React.Fragment>)}
          </CurrentPokemonConsumer>
        </div>
      </div>
    )
  }
}
