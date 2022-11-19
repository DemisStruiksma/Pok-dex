import Layout from '../components/Layout';
import Link from 'next/link'

export default function Home({ pokedex }) {
  return (
    <Layout title="Pokédex">
      <h1 className="text-3xl font-bold">
        Pokédex
      </h1>

      <ul className="mt-10 grid grid-cols-4 gap-10">
        {pokedex.map((pokemon, index) => (
          <li key={index} className="relative bg-gray-400 rounded-lg text-white flex flex-col items-center py-6 transition ease-in-out duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-110 hover:bg-gray-600">
            <Link href={`/pokemon?id=${index + 1}`} className="absolute inset-0 z-1"></Link>
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="w-28 h-28"
                />
                <span className="mr-2 font-bold text-xs">
                  #00{index}
                </span>
                {pokemon.name}
            
          </li>
        ))}
      </ul>
    </Layout>

  )
}

export async function getStaticProps(context) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    const { results } = await res.json();
    const pokedex = results.map((result, index) => {
      const paddedIndex = ('00' + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
      return {
        ...result,
        image,
        paddedIndex,
      };
    })
    return {
      props: { pokedex },
    };
  } catch (error) {
    console.log(error);
  }
}