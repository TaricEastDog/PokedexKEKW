import React from 'react';
import './styles/PokeList.css'
import './PokeAvatar.js'
import PokeAvatar from './PokeAvatar.js';

class PokeList extends React.Component {
  render() {
    return (
      <div className='list-container'> 
          <PokeAvatar />
          <PokeAvatar />
          <PokeAvatar />
          <PokeAvatar />
          <PokeAvatar />
          <PokeAvatar />
          <PokeAvatar />
          <PokeAvatar />
          <PokeAvatar />
      </div>
    )
  }
}


export default PokeList;