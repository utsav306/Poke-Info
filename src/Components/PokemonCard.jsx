import React from 'react';
import './styles/PokemonCard.css';

const PokemonCard = ({ name, image, onMoreInfo }) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} className="pokemon-image" />
      <h3 className="pokemon-name">{name}</h3>
      <button className="more-info-button" onClick={onMoreInfo}>More Info</button>
    </div>
  );
};

export default PokemonCard;
