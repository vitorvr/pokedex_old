import React, { Component } from 'react';
import './PokemonCard.scss';

class PokemonCard extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    }
  }
  render() {
    return (
      <div className="PokemonCard">
        {this.props.pokemonName}
      </div>
    );
  }
}

export default PokemonCard;
