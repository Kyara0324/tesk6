import React from "react";
import { Pokemon } from "../types/pokemon";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-card bg-gray-800 text-white p-4 rounded-lg transform transition-transform hover:scale-105">
      <img
        className="w-20 h-20 mx-auto mb-4"
        src={pokemon.sprites.front_default}
        alt={pokemon.korean_name}
      />
      <p className="pokemon-name text-lg font-semibold">
        {pokemon.korean_name}
      </p>
      <p className="pokemon-number text-gray-400">도감번호: {pokemon.id}</p>
    </div>
  );
};

export default PokemonCard;
