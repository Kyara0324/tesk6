"use client";

import React, { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon";
import axios from "axios";
import Link from "next/link";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get("/api/pokemons");
        console.log(response); // 응답 데이터 확인
        setPokemons(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Failed to fetch pokemons:", error);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        포켓몬 도감
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {pokemons.map((pokemon) => (
          <Link href={"/PokemonDetail"}>
            <div key={pokemon.id} className="flex justify-center">
              <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition-transform cursor-pointer">
                <img
                  className="w-24 h-24 mx-auto mb-2"
                  src={pokemon.sprites.front_default}
                  alt={pokemon.korean_name}
                />
                <p className="text-center text-lg font-semibold">
                  {pokemon.korean_name}
                </p>
                <p className="text-center text-sm text-gray-400">
                  도감번호: {pokemon.id}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
