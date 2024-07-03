import React from "react";
import { Pokemon } from "../types/pokemon";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition-transform cursor-pointer">
      <img
        className="w-24 h-24 mx-auto mb-2"
        src={pokemon.sprites.front_default}
        alt={pokemon.korean_name}
      />
      <p className="text-center text-lg font-semibold">{pokemon.korean_name}</p>
      <p className="text-center text-sm text-gray-400">
        도감번호: {pokemon.id}
      </p>
    </div>
  );
};

export default PokemonCard;
