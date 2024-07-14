import React, { createContext, useContext, useState, useEffect } from 'react';

const PokemonDataContext = createContext();

export const usePokemonData = () => useContext(PokemonDataContext);

export const PokemonDataProvider = ({ children }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1302'); // Adjust limit as per your need
        const result = await response.json();
        const details = await Promise.all(
          result.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        setPokemonDetails(details);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // Set loading state to false once data fetching is complete
      }
    };

    if (pokemonDetails.length === 0) {
      fetchData();
    }
  }, [pokemonDetails]);

  return (
    <PokemonDataContext.Provider value={pokemonDetails}>
      {isLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner">
            <p>Loading Pokémon data...</p>
          </div>
        </div>
      ) : (
        children // Render children once data is loaded
      )}
    </PokemonDataContext.Provider>
  );
};
