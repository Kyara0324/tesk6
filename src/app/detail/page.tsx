import { useRouter } from "next/router";
import Head from "next/head";

export default function PokemonDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>포켓몬 상세 정보</title>
      </Head>
      <div className="pokemon-details bg-white text-black p-8 rounded-lg mx-auto shadow-lg max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">버터플</h2>
        <img
          className="block mx-auto mb-4 w-36 h-36"
          src="path_to_butterfree_image.jpg"
          alt="버터플"
        />
        <div className="info mb-4">
          <span className="font-bold">이름:</span> 버터플
        </div>
        <div className="info mb-4">
          <span className="font-bold">키:</span> 1.1 m{" "}
          <span className="font-bold">무게:</span> 32 kg
        </div>
        <div className="info mb-4">
          <span className="font-bold">타입:</span>
          <span className="type bg-orange-500 text-white py-1 px-2 rounded ml-2">
            벌레
          </span>
          <span className="type bg-orange-500 text-white py-1 px-2 rounded ml-2">
            비행
          </span>
          <span className="font-bold ml-4">특성:</span>
          <span className="specialty bg-green-500 text-white py-1 px-2 rounded ml-2">
            복안
          </span>
          <span className="specialty bg-green-500 text-white py-1 px-2 rounded ml-2">
            색안경
          </span>
        </div>
        <div className="description text-sm mb-4">
          <span className="font-bold">기술:</span> <br />
          칼바람 바람일으키기...
        </div>
        <a
          className="back-button inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          href="/"
        >
          뒤로 가기
        </a>
      </div>
    </div>
  );
}
