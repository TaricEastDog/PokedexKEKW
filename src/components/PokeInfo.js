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
            }
          });
          this.setState({
            pokeDescription
          });
        });
      
      this.setState({
        pokeName: pokeName.charAt(0).toUpperCase() + pokeName.slice(1),
        pokeId,
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
      <div className='info-container'>
        {this.state.pokeName}
      </div>
    )
  }
}
