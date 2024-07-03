"use client";

import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../types/pokemon";
import axios from "axios";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(`/api/pokemons`);
      setPokemons(response.data);
      setLoading(false);
    };

    fetchPokemons();
  }, []);

  console.log(pokemons);

  if (loading) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
