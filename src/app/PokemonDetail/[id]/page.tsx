"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

interface Pokemon {
  korean_name: string;
  height: number;
  weight: number;
  types: { type: { korean_name: string } }[];
  abilities: { ability: { korean_name: string } }[];
  moves: { move: { korean_name: string } }[];

  sprites: {
    front_default: string;
  };
}

const PokemonDetail = ({ params }: { params: { id: string } }) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/pokemons/${params.id}`
        );
        setPokemon(response.data);
      } catch (error) {
        console.error("Failed to fetch pokemon:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [params.id]);

  if (loading)
    return (
      <p className="text-center text-white">오늘부터 포켓몬 불매운동 한다...</p>
    );

  if (!pokemon)
    return <p className="text-center text-white">No Pokemon data found</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="pokemon-details bg-white text-black p-8 rounded-lg mx-auto shadow-lg max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {pokemon.korean_name}
        </h2>
        <Image
          src={pokemon.sprites?.front_default}
          alt={pokemon.korean_name}
          width={100}
          height={100}
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
          {pokemon.types?.map((typeInfo, index) => (
            <span
              key={index}
              className="type bg-orange-500 text-white py-1 px-2 rounded ml-2"
            >
              {typeInfo.type.korean_name}
            </span>
          ))}
          <span className="font-bold ml-4">특성:</span>
          {pokemon.abilities?.map((abilityInfo, index) => (
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
          <div className="flex flex-wrap justify-center mt-2">
            {pokemon.moves.map((moveInfo, index) => (
              <span
                key={index}
                className="block bg-gray-200 text-black py-1 px-2 rounded m-1"
              >
                {moveInfo.move.korean_name}
              </span>
            ))}
          </div>
        </div>
        <Link
          href="/"
          className="back-button inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          뒤로 가기
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetail;
