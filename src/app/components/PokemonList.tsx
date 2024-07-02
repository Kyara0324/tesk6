"use client";

import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../types/pokemon";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      const data = await response.json();
      const pokemonList: Pokemon[] = await Promise.all(
        data.results.map(async (result: { url: string }) => {
          const res = await fetch(result.url);
          const pokemonData = await res.json();

          return {
            id: pokemonData.id,
            name: pokemonData.name,
            korean_name: "예제 포켓몬 이름", // 실제 번역 데이터 필요
            height: pokemonData.height,
            weight: pokemonData.weight,
            sprites: pokemonData.sprites,
            types: pokemonData.types.map((typeInfo: any) => ({
              type: {
                name: typeInfo.type.name,
                korean_name: "타입 한국어 이름", // 실제 번역 데이터 필요
              },
            })),
            abilities: pokemonData.abilities.map((abilityInfo: any) => ({
              ability: {
                name: abilityInfo.ability.name,
                korean_name: "특성 한국어 이름", // 실제 번역 데이터 필요
              },
            })),
            moves: pokemonData.moves.map((moveInfo: any) => ({
              move: {
                name: moveInfo.move.name,
                korean_name: "기술 한국어 이름", // 실제 번역 데이터 필요
              },
            })),
          };
        })
      );
      setPokemons(pokemonList);
      setLoading(false);
    };

    fetchPokemons();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="pokemon-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
