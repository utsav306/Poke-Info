// PokemonDetails.js
import {  useLocation } from 'react-router-dom';
import './styles/PokemonDetails.css';


const PokemonDetails = ({ pokemonDetails }) => {
  const { data } = useLocation().state;
 

  console.log(data.name)
  return (

 

    <div className="pokemon-details">
      <div className="pokemon-photo">
        <img src={data.sprites.front_default} alt={data.name} className="pokemon-image" />
      </div>
      <div className="pokemon-info">
        <h2>Pokémon Details</h2>
        <p><strong>Name: </strong>{data.name} </p>
        <p><strong>Type: </strong>{
          //display all type
          data.types.map(type => type.type.name).join(', ')
        }</p>  
        <p><strong>Moves: </strong>
        {data.moves.map(move => move.move.name).join(', ')}
        </p>
        <p><strong>Height: </strong>{data.height}</p>
        <p><strong>Weight: </strong>{data.weight}</p>
        <p><strong>Abilities: </strong>{data.abilities.map(ability => ability.ability.name).join(', ')}</p>
        <p><strong>Base Experience: </strong>{data.base_experience}</p>
        <p><strong>Order: </strong>{data.order}</p>
      </div>
    </div>
  );
};

export default PokemonDetails;
