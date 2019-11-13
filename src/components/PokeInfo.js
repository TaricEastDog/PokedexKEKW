import React, { Component } from 'react'
import './styles/PokeInfo.css'
import axios from 'axios'

export default class PokeInfo extends Component {
  state = {
    pokeName: '',
    pokeId: '',
    pokeType: [],
    pokeSpriteUrl: '',
    pokeAbilities: [],
    pokeDescription: '',
    pokeWeight: '',
    pokeHeight: '', 
  };
    
  async componentDidUpdate(prevProps, prevState) {
    if(this.props.clickedId !== prevProps.clickedId) {
      const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${this.props.clickedId}/`;
      const pokeSpecies = `https://pokeapi.co/api/v2/pokemon-species/${this.props.clickedId}/`;
      
      const pokeRes = await axios.get(pokeUrl);

      const pokeName = pokeRes.data.name;
      const pokeId = pokeRes.data.id;
      const pokeWeight = pokeRes.data.weight * 100;
      const pokeHeight = pokeRes.data.height * 10;
      const pokeSpriteUrl = pokeRes.data.sprites.front_default;
      const pokeAbilities = pokeRes.data.abilities.map(ability => ability.ability.name);
      const pokeType = pokeRes.data.types.map(type => type.type.name);

      await axios.get(pokeSpecies)
        .then(res => {
          let pokeDescription = '';
          res.data.flavor_text_entries.some(flavor => {
            if (flavor.language.name === 'en') {
              pokeDescription = flavor.flavor_text;
              return;
            }
          });
          this.setState({
            pokeDescription
          });
        });
      
      this.setState({
        pokeName: pokeName.charAt(0).toUpperCase() + pokeName.slice(1),
        pokeId: `${pokeId}`,
        pokeWeight,
        pokeHeight,
        pokeSpriteUrl,
        pokeAbilities,
        pokeType,
      });    
    }    
  }

  render() {
    return (
      <div className="container" style={{position: "sticky", top: "0px"}}>
        <div className='row '>
          <div className="col-4 p-0">
            <img src={this.state.pokeSpriteUrl} className='p-0 m-0 w-100' alt={this.state.pokeName} />
          </div>
          <div className="col-8 text-right">
            <div className="row text-right px-1">
              <h4>{this.state.pokeName}</h4>
            </div>
            <div className="row">
              <div className="text-right px-1">
                <p className='mb-1'>{this.state.pokeId ? 'PokeID: ' : ''}</p>
                <p className='mb-1'>{this.state.pokeId ? 'Weight: ' : ''}</p>
                <p className='mb-1'>{this.state.pokeId ? 'Height: ' : ''}</p>
              </div>
              <div className="text-left px-1">
                <p className='mb-1'>{this.state.pokeId ?  ' #' + this.state.pokeId.padStart(3, '0') : ''}</p>
                <p className='mb-1'>{this.state.pokeId ? this.state.pokeWeight / 1000 + ' kg' : ''}</p>
                <p className='mb-1'>{this.state.pokeId ? this.state.pokeHeight  + ' cm' : ''}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <p className='mb-1 text-justify p-2'>{this.state.pokeId ? `${this.state.pokeDescription}` : ''}</p>
        </div>
      </div>
    )
  }
}
