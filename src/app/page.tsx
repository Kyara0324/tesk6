import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto p-4 text-center">
      <Head>
        <title>포켓몬 도감</title>
      </Head>
      <h1 className="text-2xl font-bold mb-8">포켓몬 도감</h1>
      <div className="pokemon-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* 포켓몬 카드 샘플 */}
        <div className="pokemon-card bg-gray-800 text-white p-4 rounded-lg transform transition-transform hover:scale-105">
          <img
            className="w-20 h-20 mx-auto mb-4"
            src="path_to_image.jpg"
            alt="이상해씨"
          />
          <p className="pokemon-name text-lg font-semibold">이상해씨</p>
          <p className="pokemon-number text-gray-400">도감번호: 1</p>
        </div>
        {/* 다른 포켓몬 카드 추가 */}
      </div>
    </div>
  );
}
