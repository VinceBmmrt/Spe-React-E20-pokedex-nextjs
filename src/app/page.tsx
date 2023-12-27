import { Pokemon } from "@/@types/pokemon";
import PokemonList from "@/components/PokemonList";

export default async function Home() {
  const pokemons: Pokemon[] = await fetch(
    "https://tyradex.vercel.app/api/v1/pokemon",
  ).then((r) => r.json());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PokemonList pokemons={pokemons} />
    </main>
  );
}
