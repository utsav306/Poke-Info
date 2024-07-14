import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import './styles/Card.css';
import { usePokemonData } from './PokemonDataProvider.jsx'; 
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const pokemonDetails = usePokemonData();
  const [visiblePokemonCount, setVisiblePokemonCount] = useState(20);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleMorePokemons = () => {
    setVisiblePokemonCount(prevCount => prevCount + 20);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemon = pokemonDetails.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMoreInfo = (pokemon) => {
    navigate(`/pokemon/${pokemon.name}`, { state: { data: pokemon } });
  };

  return (
    <div className="main">
      <h1>Welcome to Poke-Info</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Pokémon by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="pokemon-cards-container">
        {filteredPokemon.slice(0, visiblePokemonCount).map((pokemon, index) => (
          <PokemonCard
            key={index} // Ensure to use a unique key
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            onMoreInfo={() => handleMoreInfo(pokemon)}
          />
        ))}
      </div>
      {filteredPokemon.length > visiblePokemonCount && (
        <button onClick={handleMorePokemons}>More Pokémon</button>
      )}
    </div>
  );
};

export default Card;
