import Head from "next/head";
import PokemonList from "../components/PokemonList";

export default function Home() {
  return (
    <div className="container mx-auto p-4 text-center">
      <Head>
        <title>포켓몬 도감</title>
      </Head>
      <h1 className="text-2xl font-bold mb-8">포켓몬 도감</h1>
      <PokemonList />
    </div>
  );
}
