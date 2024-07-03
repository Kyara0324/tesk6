import Head from "next/head";
import PokemonList from "../components/PokemonList";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>포켓몬 도감</title>
      </Head>
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        포켓몬 도감
      </h1>
      <PokemonList />
    </div>
  );
};

export default Home;
