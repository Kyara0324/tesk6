"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Pokemon } from "../types/pokemon";
import Link from "next/link";

export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`/api/pokemons/${id}`);
      const data: Pokemon = await response.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="pokemon-details bg-white text-black p-8 rounded-lg mx-auto shadow-lg max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {pokemon.korean_name}
        </h2>
        <img
          className="block mx-auto mb-4 w-36 h-36"
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
        />
        <div className="info mb-4">
          <span className="font-bold">이름:</span> {pokemon.korean_name}
        </div>
        <div className="info mb-4">
          <span className="font-bold">키:</span> {pokemon.height / 10} m{" "}
          <span className="font-bold">무게:</span> {pokemon.weight / 10} kg
        </div>
        <div className="info mb-4">
          <span className="font-bold">타입:</span>
          {pokemon.types.map((typeInfo, index) => (
            <span
              key={index}
              className="type bg-orange-500 text-white py-1 px-2 rounded ml-2"
            >
              {typeInfo.type.korean_name}
            </span>
          ))}
          <span className="font-bold ml-4">특성:</span>
          {pokemon.abilities.map((abilityInfo, index) => (
            <span
              key={index}
              className="specialty bg-green-500 text-white py-1 px-2 rounded ml-2"
            >
              {abilityInfo.ability.korean_name}
            </span>
          ))}
        </div>
        <div className="description text-sm mb-4">
          <span className="font-bold">기술:</span> <br />
          {pokemon.moves.map((moveInfo, index) => (
            <span key={index} className="block">
              {moveInfo.move.korean_name}
            </span>
          ))}
        </div>
        <Link href="/">
          <a className="back-button inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
            뒤로 가기
          </a>
        </Link>
      </div>
    </div>
  );
}
