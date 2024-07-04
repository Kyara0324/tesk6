"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Pokemon } from "./types/pokemon"; // 절대 경로 사용
import PokemonCard from "./components/PokemonCard"; // 절대 경로 사용

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const { data } = await axios.get("/api/pokemons");
        console.log(data); // 응답 데이터 확인
        setPokemons(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch pokemons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading)
    return (
      <p className="text-center text-white">오늘부터 포켓몬 불매운동 한다...</p>
    );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        포켓몬 도감
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="flex justify-center">
            <Link href={`/PokemonDetail/${pokemon.id}`}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
