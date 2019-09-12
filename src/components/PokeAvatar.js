import React, { Component } from 'react';
import './styles/PokeAvatar.css';

export default class PokeAvatar extends Component {

  state = {
    pokemonIndex: '',
    imageUrl: '',
    name: '',
  }
  

  componentDidMount() {
    const {url, name} = this.props;
    const pokemonIndex = url;

    this.setState ({
      pokemonIndex: pokemonIndex,
      name,
  //    imageUrl: imageUrl
    })
  }

  render() {
    return (
      <div className='avatar'> <p> {this.state.name} </p> </div>
    )
  }
}
