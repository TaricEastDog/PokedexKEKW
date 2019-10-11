import React, { Component } from 'react';
import './styles/PokeAvatar.css';

export default class PokeAvatar extends Component {

  state = {
    pokemonIndex: '',
    pokemonUrl: '',
    name: '',
  }
  
  componentDidMount() {
    const {url, name} = this.props;
    const pokemonIndex = url.slice(34, -1);
    const pokemonUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState ({
      pokemonIndex: pokemonIndex,
      name,
      pokemonUrl: pokemonUrl
    })
  }

  handleClick = () => {
    this.props.handlerFromApp(this.state.pokemonIndex);
    this.setState({
      clickedId: this.state.pokemonIndex
    })
  }

  render() {
    return (
      <div className='col-xl-4 col-lg-6 col-md-12'>
        <div className="card">
          <img src={this.state.pokemonUrl} className='card-img-top' alt={this.state.name} />
          <div className="card-body">
            <h5 className="card-title">#{this.state.pokemonIndex.padStart(3, '0')} </h5> 
            <p className="card-text">{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</p>
            <button className="btn btn-primary" onClick={this.handleClick}>Details</button> 
          </div>
        </div>
      </div>
    )
  }
}
